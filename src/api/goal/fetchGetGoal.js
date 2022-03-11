import axios from "axios";

import server from "@/config/server";

export const fetchGetGoal = async () => await axios.get(`${server}/api/goal`);
