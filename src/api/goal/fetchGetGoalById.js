import axios from "axios";

import server from "@/config/server";

export const getGoalByIdUrl = (id) => `${server}/api/goal/${id}`;

export const fetchGetGoalById = async (id) =>
  await axios.get(getGoalByIdUrl(id));
