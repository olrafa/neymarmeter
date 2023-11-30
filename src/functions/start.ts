import { Site } from "../types";
import { createTimeBlocks } from "./chart";
import { getData } from "./data";
import { addArrowListeners } from "./datePicker";

const createSitesList = (sites: Site[]) => {
  const siteList = document.getElementById("site-list");
  if (!siteList) return;
  sites.forEach((s) => {
    console.log(s);
    const item = document.createElement("div");
    siteList.appendChild(item);
    item.innerHTML = s.site;
    item.className = "search-site";
  });
};

export const initialize = async () => {
  const sites = await getData("/hits-per-site");
  sites && createSitesList(sites);

  const timestamps = await getData("/mentions/neymar/timestamps");
  const summary = await getData("/mentions/neymar/summary");

  addArrowListeners();

  timestamps && createTimeBlocks(timestamps, summary);
};
