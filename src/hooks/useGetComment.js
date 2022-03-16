import { fetcher } from "src/api";
import { getGoalCommentByIdUrl } from "src/api/goal";
import { getVoteCommentByIdUrl } from "src/api/vote";
import useSWR from "swr";

import { isCheckValue } from "@/utils/index";

export const useGetComment = (value, id) => {
  const { data, mutate } = useSWR(
    isCheckValue(value) ? getGoalCommentByIdUrl(id) : getVoteCommentByIdUrl(id),
    fetcher(true),
  );
  return [data, mutate];
};
