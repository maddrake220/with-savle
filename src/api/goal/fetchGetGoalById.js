import axios from "axios";

import server from "@/config/server";

export const fetchGetGoalById = async (id) => await axios.get(`${server}/api/goal/${id}`);
