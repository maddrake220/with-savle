import axios from "axios";

import server from "@/config/server";

export const getVoteCommentByIdUrl = (id) => `${server}/api/vote/comment/${id}`;

export const fetchGetVoteCommentById = async (id) =>
  await axios.get(getVoteCommentByIdUrl(id));
