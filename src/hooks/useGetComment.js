import axios from "axios";
import { getGoalCommentByIdUrl } from "src/api/goal";
import { getVoteCommentByIdUrl } from "src/api/vote";
import useSWR from "swr";

import { isCheckValue } from "@/utils/index";

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data.results;
};

export const useGetComment = (value, id) => {
  const { data, mutate } = useSWR(
    isCheckValue(value) ? getGoalCommentByIdUrl(id) : getVoteCommentByIdUrl(id),
    fetcher,
  );
  return [data, mutate];
};
