import "./style.css";

import { Axis } from "models/axis";
import { Dom, DOMSection } from "models/dom";
import { AxisTopRenderer, AxisRightRenderer, AxisLeftRenderer, AxisBottomRenderer } from "renderers/axisRenderer";

const dom = new Dom(document.getElementById("container"));
new Axis({}, new AxisTopRenderer(dom.target(DOMSection.Top)));
new Axis({}, new AxisRightRenderer(dom.target(DOMSection.Right)));
new Axis({}, new AxisLeftRenderer(dom.target(DOMSection.Left)));
new Axis({}, new AxisBottomRenderer(dom.target(DOMSection.Bottom)));

dom.get(DOMSection.Left);
dom.get(DOMSection.Top);
dom.get(DOMSection.Bottom);
dom.get(DOMSection.Right);
