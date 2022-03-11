import axios from "axios";

import server from "@/config/server";

export const fetchGetGoalCategory = async (parameters) => await axios.get(`${server}/api/goal/category`, { params: parameters });
