import server from "@/config/server";
import axios from "axios";

export const fetchPutGoalLike = async (params) => await axios.put(`${server}/api/vote/goal`, { params });
