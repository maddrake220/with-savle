import axios from "axios";
import useSWR from "swr";

const fetcher = (server) => axios.get(server).then((r) => r.data);

export const useCustomSWR = (url, options = {}) =>
  useSWR(url, fetcher, options);
