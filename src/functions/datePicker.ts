import getStories from "./getStories";

export const addArrowListeners = () => {
  const [previous, next] = Array.from(document.querySelectorAll(".nav-arrow"));

  previous.addEventListener("click", () => changeDate());
};

export const changeDate = () => {
  const dateElement = document.getElementById("stories-date-string");
  const currentDateString = dateElement?.dataset.date;

  if (!currentDateString) return;

  const queryDay = new Date(currentDateString);
  getStories(queryDay);
  queryDay.setTime(queryDay.getTime() - 24 * 60 * 60 * 1000);
};
