import { ID, Tree } from "../../view/store/types";
import { parseTable } from "../string-table";
import { MsgTypes } from "./events";
import { deepClone } from "../../view/components/profiler/flamegraph/transform/util";
import { RenderReasonMap } from "../10/renderer/renderReasons";

/**
 * This is the heart of the devtools. Here we translate incoming events
 * and construct the tree data structure which all operations in the
 * Devtools UI are based upon.
 *
 * We currently expect all operations to be in order.
 */
export function ops2Tree(oldTree: Tree, ops: number[]) {
	const pending: Tree = new Map();
	const rootId = ops[0];
	const roots: ID[] = [];
	const removals: ID[] = [];
	const reasons: RenderReasonMap = new Map();

	let i = ops[1] + 1;
	const strings = parseTable(ops.slice(1, i + 1));

	for (i += 1; i < ops.length; i++) {
		switch (ops[i]) {
			case MsgTypes.ADD_ROOT:
				roots.push(ops[i + 1]);
				i += 1;
				break;
			case MsgTypes.ADD_VNODE: {
				const id = ops[i + 1];
				const parentId = ops[i + 3];
				const parent = pending.get(parentId);
				if (parent) {
					parent.children.push(id);
				}

				pending.set(id, {
					children: [],
					depth: parent ? parent.depth + 1 : 0,
					id,
					name: strings[ops[i + 5] - 1],
					parent: parentId,
					type: ops[i + 2],
					key: ops[i + 6] > 0 ? strings[ops[i + 6] - 1] : "",
					startTime: ops[i + 7] / 1000,
					endTime: ops[i + 8] / 1000,
					treeStartTime: -1,
					treeEndTime: -1,
				});
				i += 8;
				break;
			}
			case MsgTypes.UPDATE_VNODE_TIMINGS: {
				const id = ops[i + 1];
				if (!pending.has(id)) {
					const node = oldTree.get(id)!;
					try {
						pending.set(id, deepClone(node));
					} catch (err) {
						// eslint-disable-next-line no-console
						console.error(`Missing node ${id} detected.`);
						throw err;
					}
				}
				const x = pending.get(id)!;
				x.startTime = ops[i + 2] / 1000;
				x.endTime = ops[i + 3] / 1000;

				i += 3;
				break;
			}
			case MsgTypes.REMOVE_VNODE: {
				const unmounts = ops[i + 1];
				i += 2;
				const len = i + unmounts;
				for (; i < len; i++) {
					const nodeId = ops[i];
					removals.push(nodeId);
					const node = oldTree.get(nodeId);
					if (node) {
						// Remove node from parent children array
						const parentId = node.parent;
						if (!pending.has(parentId)) {
							const oldParent = oldTree.get(parentId);
							if (oldParent) {
								pending.set(oldParent.id, deepClone(oldParent));
							}
						}

						const parent = pending.get(parentId);
						if (parent) {
							const idx = parent.children.indexOf(nodeId);
							if (idx > -1) parent.children.splice(idx, 1);
						}
					}
				}

				// Subtract one because of outer loop
				if (len > 0) i--;
				break;
			}
			case MsgTypes.REORDER_CHILDREN: {
				const parentId = ops[i + 1];
				const count = ops[i + 2];
				if (!pending.has(parentId) && oldTree.has(parentId)) {
					pending.set(parentId, deepClone(oldTree.get(parentId)!));
				}
				const parent = pending.get(parentId);
				if (parent) {
					parent.children = ops.slice(i + 3, i + 3 + count);
				}
				i = i + 2 + count;
				break;
			}
			case MsgTypes.RENDER_REASON: {
				const id = ops[i + 1];
				const type = ops[i + 2];
				const count = ops[i + 3];
				let items: string[] | null = null;
				if (count > 0) {
					items = ops.slice(i + 4, i + 4 + count).map(x => strings[x - 1]);
				}
				reasons.set(id, {
					type,
					items,
				});
				i = i + 3 + count;
				break;
			}
			default:
				throw new Error("Unknown event: " + ops[i]);
		}
	}

	return { rootId, roots, tree: pending, removals, reasons };
}
