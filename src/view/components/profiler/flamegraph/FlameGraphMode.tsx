import { h, Fragment } from "preact";
import { IconTab } from "../components/Tabs/Tabs";
import { useStore, useObserver } from "../../../store/react-bindings";
import { useCallback } from "preact/hooks";
import { FlamegraphType } from "../data/commits";
import { Icon } from "../../icons";

export function FlameGraphMode() {
	const store = useStore();
	const type = useObserver(() => store.profiler.flamegraphType.$);
	const disabled = useObserver(() => !store.profiler.isSupported.$);

	const onClick = useCallback((value: string) => {
		store.profiler.flamegraphType.$ = value as any;
	}, []);

	return (
		<Fragment>
			<IconTab
				name="flamegraph_mode"
				icon={<Icon icon="fire-icon" />}
				value={FlamegraphType.FLAMEGRAPH}
				checked={type === FlamegraphType.FLAMEGRAPH}
				onClick={onClick}
				disabled={disabled}
			>
				Flamegraph
			</IconTab>
			<IconTab
				name="flamegraph_mode"
				icon={<Icon icon="sort-icon" />}
				value={FlamegraphType.RANKED}
				checked={type === FlamegraphType.RANKED}
				onClick={onClick}
				disabled={disabled}
			>
				Ranked
			</IconTab>
			<IconTab
				name="flamegraph_mode"
				icon={<Icon icon="timeline" />}
				value={FlamegraphType.TIMELINE}
				checked={type === FlamegraphType.TIMELINE}
				onClick={onClick}
				disabled={disabled}
			>
				Timeline
			</IconTab>
		</Fragment>
	);
}
