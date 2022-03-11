import server from "@/config/server";
import axios from "axios";

export const fetchGetGoal = async () => await axios.get(`${server}/api/goal`);
