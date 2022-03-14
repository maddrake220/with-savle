import axios from "axios";

import server from "@/config/server";

export const fetchPutVoteLike = async (parameters) =>
  await axios.put(`${server}/api/vote/like`, { params: parameters });
