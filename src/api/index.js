import axios from "axios";

export const fetcher =
  (requireResults = false) =>
  async (url) => {
    const response = await axios.get(url);
    if (requireResults) {
      return response.data.results;
    }
    return response.data;
  };
