import axios from "axios";

import server from "@/config/server";

// unused
export const fetchPutVote = async (parameters) =>
  await axios.put(`${server}/api/vote`, { params: parameters });
