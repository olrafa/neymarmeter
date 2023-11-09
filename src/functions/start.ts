import { Site } from "../types";
import { createTimeBlocks } from "./chart";
import { getData } from "./data";

const createSitesList = (sites: Site[]) => {
  // eslint-disable-next-line no-undef
  const siteList = document.getElementById("site-list");
  if (!siteList) return;
  sites.forEach((s) => {
    // eslint-disable-next-line no-undef
    const item = document.createElement("div");
    siteList.appendChild(item);
    item.innerHTML = s.site;
    item.className = "search-site";
  });
};

export const initialize = async () => {
  const sites = await getData("/sites");
  sites && createSitesList(sites);

  const timestamps = await getData("/mentions/neymar/timestamps");
  const summary = await getData("/mentions/neymar/summary");

  timestamps && createTimeBlocks(timestamps, summary);
};
