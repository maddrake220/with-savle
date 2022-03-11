import server from "@/config/server";
import axios from "axios";

export const fetchGetGoalCategory = async (params) => await axios.get(`${server}/api/goal/category`, { params });
