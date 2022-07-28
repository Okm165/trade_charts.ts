import { AxisRenderer } from "renderers/axisRenderer";

export class Axis<Data, Renderer extends AxisRenderer> {
  public from = 0;
  public to = 0;
  public interval = 0;
  public readonly data: Data;
  public readonly cnv: HTMLCanvasElement;
  public readonly renderer: Renderer;

  constructor(data: Data, renderer: Renderer) {
    this.data = data;
    this.renderer = renderer;
    this.cnv = this.renderer.cnv;
    this.renderer.paint();
  }

  public setRange(from: number, to: number) {
    this.from = from;
    this.to = to;
  }

  public setInterval(interval: number) {
    this.interval = interval;
  }
}
