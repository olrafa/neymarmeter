import { Story } from "../types";
import { getData } from "./data";
import { formateDate, getDateString } from "./util";

const getStories = async () => {
  const today = new Date();

  const todayString = getDateString();
  const news = await getData(`/news?date=${todayString}`);
  news && addStories(news);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const newsHeader = document.getElementById("stories-date-string");
  newsHeader!.innerHTML = formateDate(yesterday);
};

const addStories = (stories: Story[]) => {
  const storiesBlock = document.getElementById("stories");

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
