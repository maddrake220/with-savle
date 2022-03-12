import axios from "axios";
import useSWR from "swr";

import server from "@/config/server";

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data.results;
};

function useGetComment(value, id) {
  const type = value === "goal" ? true : false;
  const { data, mutate } = useSWR(
    type
      ? `${server}/api/goal/comment/${id}`
      : `${server}/api/vote/comment/${id}`,
    fetcher,
  );
  return [data, mutate];
}

export default useGetComment;
