import axios from "axios";

import server from "@/config/server";

export const fetchPutGoalLike = async (parameters) =>
  await axios.put(`${server}/api/goal/like`, { params: parameters });
