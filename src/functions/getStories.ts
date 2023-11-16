import { Story } from "../types";
import { getData } from "./data";

const getStories = async () => {
  const today = new Date();

  const todayString =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  console.log(todayString);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  console.log(yesterday.toLocaleDateString("pt-BR"));

  const news = await getData(`/news?date=${todayString}`);

  news && addStories(news);

  const newsHeader = document.getElementById("stories-date-header");
  newsHeader!.innerHTML += yesterday.toLocaleDateString("pt-BR", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
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
