import getNews from "./functions/getStories";
import { initialize } from "./functions/start";
import {
  EXPLAINER,
  INITIAL_DETAIL_CAPTION,
  PAGE_TITLE,
  STORIES,
  SUB_TITLE,
} from "./strings";
import "./style.css";

import { inject } from "@vercel/analytics";

inject();

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
<div id="stories"><h3 id="stories-date-header">${STORIES}</h3>
<div id="date-selection">
<span class="nav-arrow arrow-previous">
</span>
<span id="stories-date-string">
</span>
<span class="nav-arrow arrow-next">
</span>
</div>
<div id="stories-list"></div>
</div>
  <div id="explainer">
  <h3>${EXPLAINER.title}</h3>
  <p>
    ${EXPLAINER.robot}<br /><br />
    ${EXPLAINER.chart}<br /><br />
    ${EXPLAINER.clarifier}<br /><br />
    ${EXPLAINER.newsFeed}
  </p></div>
  
</div>

</div>
`;

initialize();
getNews();
