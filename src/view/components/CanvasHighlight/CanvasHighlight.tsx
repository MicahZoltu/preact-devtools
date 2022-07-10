import { throttle } from "../../../shells/shared/utils";

export class CanvasHighlight {
	dom: HTMLDivElement | null = null;
	canvas: HTMLCanvasElement | null = null;
	listener: any = null;

	id = "preact-devtools-highlight-updates";

	mount() {
		document.getElementById(this.id)?.remove();
		const dom = document.createElement("div");
		dom.id = this.id;
		dom.className = "preact-devtools";
		document.body.appendChild(dom);

		const canvas = document.createElement("canvas");
		canvas.className = "canvas-highlight";
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		dom.appendChild(canvas);
		this.canvas = canvas;

		window.addEventListener("resize", this.onResize);
	}

	onResize = throttle(() => {
		if (!this.canvas) return;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}, 60);

	destroy() {
		window.removeEventListener("resize", this.onResize);
		this.dom?.remove();
	}

	render() {
		if (!this.dom) {
			this.mount();
		}
	}
}
