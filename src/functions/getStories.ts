import { Story } from "../types";
import { getData } from "./data";
import { formatDate, getDateString } from "./util";

const getStories = async (date?: Date) => {
  console.log(date);
  const storiesBlock = document.getElementById("stories-list");
  storiesBlock!.innerHTML = "";

  const selectedDate = date || new Date();

  const selectedDateString = getDateString(selectedDate);
  const news = await getData(`/news?date=${selectedDateString}`);
  news && addStories(news);

  const yesterday = new Date(selectedDate);
  yesterday.setTime(yesterday.getTime() - 24 * 60 * 60 * 1000);

  const newsHeader = document.getElementById("stories-date-string");
  newsHeader!.innerHTML = formatDate(yesterday);
  newsHeader!.dataset.date = yesterday.toDateString();
};

const addStories = (stories: Story[]) => {
  const storiesBlock = document.getElementById("stories-list");

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
