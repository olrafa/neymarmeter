import { ONE_DAY } from "../constants";
import { Story } from "../types";
import { highlightDay } from "./chart";
import { getData } from "./data";
import { checkForDisabledArrows } from "./datePicker";
import { formatDate, getDateString } from "./util";

const getStories = async (date?: Date) => {
  const storiesBlock = document.getElementById("stories-list");
  storiesBlock!.innerHTML = "Carregando...";

  const selectedDate = date || new Date();

  const selectedDateString = getDateString(selectedDate);
  const news = await getData(`/news?date=${selectedDateString}`);
  news && addStories(news);

  const headerDate = new Date(selectedDate);
  headerDate.setTime(headerDate.getTime() - ONE_DAY);

  const newsHeader = document.getElementById("stories-date-string");
  newsHeader!.innerHTML = formatDate(headerDate);
  newsHeader!.dataset.date = headerDate.toDateString();
  checkForDisabledArrows(headerDate);
  highlightDay(getDateString(headerDate));
};

const addStories = (stories: Story[]) => {
  const storiesBlock = document.getElementById("stories-list");
  storiesBlock!.innerHTML = "";

  stories.forEach((story) => {
    const line = document.createElement("p");
    const source = document.createElement("span");
    source.innerHTML = story.source;
    const link = document.createElement("a");
    link.innerHTML = story.title;
    link.href = story.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    line.appendChild(source);
    line.appendChild(document.createElement("br"));
    line.appendChild(link);
    storiesBlock?.appendChild(line);
  });
};

export default getStories;
