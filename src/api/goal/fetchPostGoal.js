import server from "@/config/server";
import axios from "axios";

export const fetchPostGoal = async (params) => await axios.post(`${server}/api/goal}`, { params });
