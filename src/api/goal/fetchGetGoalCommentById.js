import axios from "axios";

import server from "@/config/server";

export const fetchGetCommentById = async (id) =>
  await axios.get(`${server}/api/goal/comment/${id}`);
