import axios from "axios";

import server from "@/config/server";

export const getGoalCategory = () => `${server}/api/goal/category`;

export const fetchGetGoalCategory = async (parameters) =>
  await axios.get(getGoalCategory(), { params: parameters });
