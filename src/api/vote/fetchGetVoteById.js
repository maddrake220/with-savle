import axios from "axios";

import server from "@/config/server";

export const fetchGetVoteById = async (id) =>
  await axios.get(`${server}/api/vote/${id}`);
