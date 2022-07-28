import { ensure } from "utils/check";

export enum DOMSection {
  Top,
  Bottom,
  Middle,
  Left,
  Right,
}

interface Sections {
  Top: Element;
  Bottom: Element;
  Middle: Element;
  Left: Element;
  Right: Element;
}

export class Dom {
  public readonly container: HTMLElement;
  public readonly parentSections: Sections;

  constructor(container: HTMLElement | null) {
    this.container = ensure(container);
    const tbody = this.container.children[0];
    this.parentSections = {
      Top: ensure(tbody.children[0].children[1].children[0]),
      Bottom: ensure(tbody.children[2].children[1].children[0]),
      Middle: ensure(tbody.children[1].children[1]),
      Left: ensure(tbody.children[1].children[0].children[0]),
      Right: ensure(tbody.children[1].children[2].children[0]),
    };
  }

  public target(section: DOMSection): Element {
    return this.parentSections[DOMSection[section] as keyof typeof this.parentSections];
  }

  public append<T>(section: DOMSection, render: (root: Element) => T): T {
    return render(this.target(section));
  }

  public get(section: DOMSection): Element[] {
    const target = this.target(section);
    const ret = Array<Element>(target.children.length);
    for (let i = 0; i < target.children.length; i++) {
      ret[i] = ensure(target.children.item(i));
    }
    return ret;
  }

  public clear(section: DOMSection): void {
    const target = this.target(section);
    while (target.hasChildNodes()) {
      target.lastChild?.remove();
    }
  }
}
