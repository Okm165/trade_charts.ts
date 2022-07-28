import { ensure } from "utils/check";

export abstract class AxisRenderer {
  public readonly _cnv: HTMLCanvasElement;
  public _ctx: CanvasRenderingContext2D;

  constructor(cnv: HTMLCanvasElement) {
    this._cnv = cnv;
    this._ctx = ensure(this._cnv.getContext("2d"));
  }

  public abstract getSize(): DOMRect;

  public abstract paint(): void;

  public abstract applyDomStyles(cnv: HTMLCanvasElement): void;
}

export class AxisTopRenderer extends AxisRenderer {
  constructor(cnv: HTMLCanvasElement) {
    super(cnv);
    this.applyDomStyles(this._cnv);
  }

  public applyDomStyles(cnv: HTMLCanvasElement) {
    cnv.style.display = "initial";
    cnv.style.width = "100px";
    cnv.style.height = "20px";
  }

  public getSize(): DOMRect {
    return this._cnv.getBoundingClientRect();
  }

  public paint() {
    console.log("paint");
  }
}
