import server from "@/config/server";
import axios from "axios";

// unused
export const fetchPutVote = async (params) => await axios.put(`${server}/api/vote`, { params });
