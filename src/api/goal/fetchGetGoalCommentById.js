import axios from "axios";

import server from "@/config/server";

export const getGoalCommentByIdUrl = (id) => `${server}/api/goal/comment/${id}`;

export const fetchGetGoalCommentById = async (id) =>
  await axios.get(getGoalCommentByIdUrl(id));
