const PROD_API_URL = "https://mencionometro.vercel.app";

const DEV_API_URL = "http://localhost:3002";

export const API_URL = import.meta.url.includes("localhost")
  ? DEV_API_URL
  : PROD_API_URL;

export const FIRST_NEWS_RUN = "2023-11-16T06:00:00";

export const ONE_DAY = 24 * 60 * 60 * 1000;
