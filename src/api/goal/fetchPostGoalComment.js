import server from "@/config/server";
import axios from "axios";

export const fetchPostGoalComment = async (params) => await axios.post(`${server}/api/goal/comment`, { params });
