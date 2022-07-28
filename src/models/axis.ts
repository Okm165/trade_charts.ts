import { Dom, DOMSection } from "./dom";

import { AxisRenderer } from "renderers/axisRenderer";

export class Axis<Data, Renderer extends AxisRenderer> {
  public _from = 0;
  public _to = 0;
  public _interval = 0;
  public readonly _data: Data;
  public readonly _canvas: HTMLCanvasElement;
  public readonly _renderer: Renderer;

  constructor(data: Data, dom: Dom, rendererObj: (cnv: HTMLCanvasElement) => Renderer) {
    this._data = data;
    this._canvas = dom.append(DOMSection.Top, this.dom);
    this._renderer = rendererObj(this._canvas);
  }

  public setRange(from: number, to: number) {
    this._from = from;
    this._to = to;
  }

  public setInterval(interval: number) {
    this._interval = interval;
  }

  public dom(root: Node): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.style.display = "none";
    root.appendChild(canvas);
    return canvas;
  }
}
