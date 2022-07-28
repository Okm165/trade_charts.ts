import { ensure } from "utils/check";

export enum DOMSection {
  Top,
  Bottom,
  Middle,
  Left,
  Right,
}

interface Sections {
  Top: Node;
  Bottom: Node;
  Middle: Node;
  Left: Node;
  Right: Node;
}

export class Dom {
  public readonly _container: HTMLElement;
  public readonly _parentSections: Sections;

  constructor(container: HTMLElement | null) {
    this._container = ensure(container);
    const tbody = this._container.children[0];
    this._parentSections = {
      Top: ensure(tbody.children[0].children[1].children[0]),
      Bottom: ensure(tbody.children[2].children[1].children[0]),
      Middle: ensure(tbody.children[1].children[1]),
      Left: ensure(tbody.children[1].children[0].children[0]),
      Right: ensure(tbody.children[1].children[2].children[0]),
    };
  }

  public append<T>(section: DOMSection, render: (root: Node) => T): T {
    return render(this._parentSections[DOMSection[section] as keyof typeof this._parentSections]);
  }
}
