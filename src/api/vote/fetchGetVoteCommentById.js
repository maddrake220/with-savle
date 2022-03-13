import axios from "axios";

import server from "@/config/server";

export const fetchGetVoteCommentById = async (id) =>
  await axios.get(`${server}/api/vote/comment/${id}`);
