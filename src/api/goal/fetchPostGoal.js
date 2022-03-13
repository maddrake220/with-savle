import axios from "axios";

import server from "@/config/server";

export const fetchPostGoal = async (parameters) =>
  await axios.post(`${server}/api/goal}`, { params: parameters });
