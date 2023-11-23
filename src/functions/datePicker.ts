import { FIRST_NEWS_RUN, ONE_DAY } from "../constants";
import getStories from "./getStories";

export const addArrowListeners = () => {
  const [previous, next] = Array.from(document.querySelectorAll(".nav-arrow"));
  previous.addEventListener("click", () => changeDatePrevious());
  next.addEventListener("click", () => changeDateNext());
};

const getCurrentDate = () => {
  const dateElement = document.getElementById("stories-date-string");
  const currentDateString = dateElement?.dataset.date;

  return currentDateString;
};

const changeDatePrevious = () => {
  const currentDateString = getCurrentDate();
  if (!currentDateString) return;
  const queryDay = new Date(currentDateString);
  getStories(queryDay);
};

const changeDateNext = () => {
  const currentDateString = getCurrentDate();
  if (!currentDateString) return;
  const queryDay = new Date(currentDateString);
  queryDay.setTime(queryDay.getTime() + ONE_DAY * 2);
  getStories(queryDay);
};

export const checkForDisabledArrows = (headerDate?: Date) => {
  const [previous, next] = Array.from(document.querySelectorAll(".nav-arrow"));
  if (!headerDate) return;
  const firstNewsRun = new Date(FIRST_NEWS_RUN);
  const isFirstDate = headerDate.getTime() < firstNewsRun.getTime();
  hideShowArrow(previous, isFirstDate);

  const now = new Date();
  const isLatestDay =
    now.getTime() - headerDate.getTime() <= ONE_DAY + 60 * 1000;

  hideShowArrow(next, isLatestDay);
};

const hideShowArrow = (element: Element, hide: boolean) => {
  if (hide) {
    element.classList.add("hidden-arrow");
  } else {
    element.classList.remove("hidden-arrow");
  }
};
