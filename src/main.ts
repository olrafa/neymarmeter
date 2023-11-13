import { initialize } from "./functions/start";
import {
  EXPLAINER,
  INITIAL_DETAIL_CAPTION,
  PAGE_TITLE,
  SUB_TITLE,
} from "./strings";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="content">
<h1>${PAGE_TITLE}</h1>
<h4>${SUB_TITLE}</h4>
<div id="board">
<div id="chart"></div>
<div id="detail">${INITIAL_DETAIL_CAPTION}</div>
<div id="site-list">
</div></div>
<div id="info">
  <h3>${EXPLAINER.title}</h3>
  <p>
    ${EXPLAINER.robot}<br /><br />
    ${EXPLAINER.chart}<br /><br />
    ${EXPLAINER.clarifier}
  </p>
  <p>
    ${EXPLAINER.code}
  </p>
</div>
</div>
`;

initialize();
