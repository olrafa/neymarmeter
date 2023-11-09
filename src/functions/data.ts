import { API_URL } from "../constants";

export const getData = async (route: string) => {
  try {
    const response = await fetch(API_URL + route);
    if (!response.ok) {
      throw new Error("Something went wrong with the request.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};
