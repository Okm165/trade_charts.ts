import { ensure } from "utils/check";

export abstract class AxisRenderer {
  public readonly cnv: HTMLCanvasElement;
  public readonly ctx: CanvasRenderingContext2D;

  constructor(root: Element) {
    this.cnv = this.dom(root);
    this.ctx = ensure(this.cnv.getContext("2d"));
  }
  public abstract dom(root: Element): HTMLCanvasElement;
  public abstract paint(): void;

  public getSize(): DOMRect {
    return this.cnv.getBoundingClientRect();
  }
}

export class AxisTopRenderer extends AxisRenderer {
  constructor(root: Element) {
    super(root);
  }

  public dom(root: Element): HTMLCanvasElement {
    const cnv = document.createElement("canvas");
    cnv.style.display = "initial";
    cnv.style.width = "100%";
    cnv.style.height = "20px";
    root.appendChild(cnv);
    return cnv;
  }

  public paint() {
    this.ctx.save();
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
    this.ctx.restore();
  }
}

export class AxisRightRenderer extends AxisRenderer {
  constructor(root: Element) {
    super(root);
  }

  public dom(root: Element): HTMLCanvasElement {
    const cnv = document.createElement("canvas");
    cnv.style.display = "initial";
    cnv.style.width = "20px";
    cnv.style.height = "100%";
    root.appendChild(cnv);
    return cnv;
  }

  public paint() {
    this.ctx.save();
    this.ctx.fillStyle = "pink";
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
    this.ctx.restore();
  }
}

export class AxisLeftRenderer extends AxisRenderer {
  constructor(root: Element) {
    super(root);
  }

  public dom(root: Element): HTMLCanvasElement {
    const cnv = document.createElement("canvas");
    cnv.style.display = "initial";
    cnv.style.width = "20px";
    cnv.style.height = "100%";
    root.appendChild(cnv);
    return cnv;
  }

  public paint() {
    this.ctx.save();
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
    this.ctx.restore();
  }
}

export class AxisBottomRenderer extends AxisRenderer {
  constructor(root: Element) {
    super(root);
  }

  public dom(root: Element): HTMLCanvasElement {
    const cnv = document.createElement("canvas");
    cnv.style.display = "initial";
    cnv.style.width = "100%";
    cnv.style.height = "20px";
    root.appendChild(cnv);
    return cnv;
  }

  public paint() {
    this.ctx.save();
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
    this.ctx.restore();
  }
}
