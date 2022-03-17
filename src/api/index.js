import axios from "axios";

export const server =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/"
    : "https://with-savle.vercel.app/";

export const fetcher =
  (requireResults = false) =>
  async (url) => {
    const response = await axios.get(url);
    if (requireResults) {
      return response.data.results;
    }
    return response.data;
  };
