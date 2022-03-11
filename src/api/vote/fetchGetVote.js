import server from "@/config/server";
import axios from "axios";

export const fetchGetVote = async () => await axios.get(`${server}/api/vote`);
