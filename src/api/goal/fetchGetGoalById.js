import server from "@/config/server";
import axios from "axios";

export const fetchGetGoalById = async (id) => await axios.get(`${server}/api/goal/${id}`);
