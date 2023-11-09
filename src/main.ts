import { unsplashCredits } from "./constants";
import { initialize } from "./functions/start";
import {
  EXPLAINER,
  INITIAL_DETAIL_CAPTION,
  PAGE_TITLE,
  SUB_TITLE,
} from "./strings";
import "./style.css";

const [author, site] = unsplashCredits;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="content">
<h1>${PAGE_TITLE}</h1>
<h3>${SUB_TITLE}</h3>
<div id="chart"></div>
<div id="detail">${INITIAL_DETAIL_CAPTION}</div>
<div id="site-list"></div>
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

<div id="unsplash-credit">
Photo by
<a
  href="${author.href}"
  >${author.text}</a
>
on
<a
  href="${site.href}"
  >${site.text}</a
>
</div>
`;

initialize();
