import axios from "axios";
import useSWR from "swr";

import server from "@/config/server";
import { isCheckValue } from "@/utils/index";

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data.results;
};

export const useGetComment = (value, id) => {
  const { data, mutate } = useSWR(
    isCheckValue(value)
      ? `${server}/api/goal/comment/${id}`
      : `${server}/api/vote/comment/${id}`,
    fetcher,
  );
  return [data, mutate];
};
