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
  queryDay.setTime(queryDay.getTime() + 48 * 60 * 60 * 1000);
  getStories(queryDay);
};
