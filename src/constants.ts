const PROD_API_URL = "https://mencionometro.vercel.app";

const DEV_API_URL = "http://localhost:3002";

export const API_URL = import.meta.url.includes("localhost")
  ? DEV_API_URL
  : PROD_API_URL;

export const FIRST_NEWS_RUN = "2023-11-16T06:00:00";

export const ONE_DAY = 24 * 60 * 60 * 1000;

const RUN_HOURS = [0, 6, 12, 18];

const adjustDisplayTime = (hour: number) => {
  const now = new Date();
  now.setUTCHours(hour, 0, 0, 0);
  return now.getHours();
};

const displayTimes = RUN_HOURS.map((hour) => adjustDisplayTime(hour));

export const runTimes = displayTimes
  .sort((a, b) => (a > b ? 1 : -1))
  .map((t) => `${t}h`)
  .join(", ");

export const NEWS_TIME = adjustDisplayTime(1);
