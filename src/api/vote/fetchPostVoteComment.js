import axios from "axios";

import server from "@/config/server";

export const fetchPostVoteComment = async (parameters) =>
  await axios.post(`${server}/api/vote/comment`, { params: parameters });
