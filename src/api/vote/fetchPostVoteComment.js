import server from "@/config/server";
import axios from "axios";

export const fetchPostVoteComment = async (params) => await axios.post(`${server}/api/vote/comment`, { params });
