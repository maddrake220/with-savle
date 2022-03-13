import axios from "axios";

import server from "@/config/server";

export const fetchPostGoalComment = async (parameters) =>
  await axios.post(`${server}/api/goal/comment`, { params: parameters });
