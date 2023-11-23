export const getIsToday = (timestamp: Date) => {
  const date = new Date(timestamp);

  const currentDate = new Date();

  return (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  );
};

export const getDateString = (date?: Date) => {
  const searchDate = date || new Date();
  return (
    searchDate.getFullYear() +
    "-" +
    (searchDate.getMonth() + 1) +
    "-" +
    searchDate.getDate()
  );
};

export const formatDate = (date: Date) =>
  date.toLocaleDateString("pt-BR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
