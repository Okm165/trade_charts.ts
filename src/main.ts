import "./style.css";

import { Axis } from "models/axis";
import { Dom } from "models/dom";
import { AxisTopRenderer } from "renderers/axisRenderer";

const dom = new Dom(document.getElementById("container"));
new Axis({}, dom, (cnv) => {
  return new AxisTopRenderer(cnv);
});
