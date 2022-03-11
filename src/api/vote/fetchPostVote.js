import server from "@/config/server";
import axios from "axios";

export const fetchPostVote = async (params) => await axios.post(`${server}/api/vote}`, { params });
