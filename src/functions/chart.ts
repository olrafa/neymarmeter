import { MentionsSummary } from "../types";
import { getDateString, getIsToday } from "./util";

const createEmptyBlock = (element: HTMLDivElement) => {
  const emptyBlock = document.createElement("div");
  emptyBlock.className = "run-block";
  element.appendChild(emptyBlock);
};

const getTooltipString = (runTime: Date, mentions: number) =>
  `${mentions} ${mentions >= 2 ? "resultados" : "resultado"} em ${new Date(
    runTime
  ).toLocaleString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    hour12: false,
  })}h`;

const completeIncompleteDays = (
  day: Date,
  dayRuns: Date[],
  dayBlock: HTMLDivElement
) => {
  // Create empty blocks for the first day of runs.
  const isToday = getIsToday(day);
  if (!isToday && dayRuns.length < 4) {
    const fillerBlocks = 4 - dayRuns.length;
    Array.from({ length: fillerBlocks }, () => createEmptyBlock(dayBlock));
  }
};

const addBlocks = (
  summary: MentionsSummary,
  dayRun: Date,
  dayBlock: HTMLDivElement
) => {
  const runData = summary.find(
    (s) => new Date(s.runHour).toUTCString() === new Date(dayRun).toUTCString()
  );

  const { color = "#161b22", mentions = 0, sites = [] } = runData || {};

  const runBlock = document.createElement("div");
  dayBlock.appendChild(runBlock);
  runBlock.className = "run-block";
  runBlock.style.backgroundColor = color;
  runBlock.dataset.sites = sites.join(",");

  const siteNameElements = Array.from(
    document.querySelectorAll(".search-site")
  );

  const resultSites = siteNameElements.filter(({ innerHTML }) =>
    sites.includes(innerHTML)
  );
  addEvents(runBlock, dayRun, mentions, resultSites);
};

const addEvents = (
  runBlock: HTMLDivElement,
  dayRun: Date,
  mentions: number,
  resultSites: Element[]
) => {
  const detail = document.getElementById("detail");

  ["mouseenter", "touchstart"].map((event) =>
    runBlock.addEventListener(event, () => {
      detail!.innerHTML = getTooltipString(dayRun, mentions);
      resultSites.forEach((rs) => {
        rs.classList.add("site-result");
      });
    })
  );

  ["mouseleave", "touchend"].map((event) =>
    runBlock.addEventListener(event, () => {
      detail!.innerHTML = "";
      resultSites.forEach((rs) => {
        rs.classList.remove("site-result");
      });
    })
  );
};

const addSitesHover = () => {
  const detail = document.getElementById("detail");

  const siteNameElements = Array.from(
    document.querySelectorAll(".search-site")
  );

  const runBlocks = Array.from(
    document.querySelectorAll(".run-block")
  ) as HTMLDivElement[];

  siteNameElements.forEach((site) => {
    ["mouseenter", "touchstart"].map((event) =>
      site.addEventListener(event, () => {
        const runsCount = runBlocks.filter((rb) =>
          rb.dataset?.sites?.includes(site.innerHTML)
        ).length;
        highlightRuns(site.innerHTML, runBlocks);

        detail!.innerHTML = `O termo "Neymar" foi encontrado em ${runsCount} visitas ao site ${site.innerHTML}`;
      })
    );
  });

  siteNameElements.forEach((site) => {
    ["mouseleave", "touchend"].map((event) =>
      site.addEventListener(event, () => removeHighlights(runBlocks))
    );
  });
};

const highlightRuns = (siteName: string, runBlocks: HTMLDivElement[]) =>
  runBlocks.forEach((rb) => {
    const siteList = rb.dataset?.sites?.split(",") || [];
    siteList.includes(siteName)
      ? rb.classList.add("highlight")
      : rb.classList.add("no-highlight");
  });

const removeHighlights = (elements: HTMLDivElement[]) => {
  const detail = document.getElementById("detail");
  detail!.innerHTML = "";
  elements.forEach((el) => {
    el.classList.remove("highlight");
    el.classList.remove("no-highlight");
  });
};

const fillDay = (day: Date, timestamps: Date[], summary: MentionsSummary) => {
  const chart = document.getElementById("chart");

  const dayBlock = document.createElement("div");
  dayBlock.dataset.date = getDateString(day);
  chart!.appendChild(dayBlock);
  dayBlock.className = "time-block";
  const dayRuns = timestamps.filter(
    (ts) =>
      new Date(new Date(ts).setHours(0, 0, 0, 0)).toString() === day.toString()
  );

  completeIncompleteDays(day, dayRuns, dayBlock);

  dayRuns.forEach((dr) => addBlocks(summary, dr, dayBlock));

  // Create empty blocks for the remaining runs of the day
  const completeDayBlock = () => {
    if (dayBlock.childElementCount >= 4) {
      return;
    }
    createEmptyBlock(dayBlock);
    completeDayBlock();
  };

  completeDayBlock();
};

export const createTimeBlocks = (
  timestamps: Date[],
  summary: MentionsSummary
) => {
  const days = timestamps.map((ts) => new Date(ts).setHours(0, 0, 0, 0));
  const uniqueDays = [...new Set(days)].map((d) => new Date(d));
  uniqueDays.forEach((d) => fillDay(d, timestamps, summary));
  addSitesHover();
};

export const highlightDay = (dateString: string) => {
  const dayBlocks = Array.from(
    document.querySelectorAll(".time-block")
  ) as HTMLDivElement[];

  dayBlocks.forEach((db) => {
    if (db.dataset.date === dateString) {
      db.classList.add("highlighted-day");
    } else {
      db.classList.remove("highlighted-day");
    }
  });
};
