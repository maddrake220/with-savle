import server from "@/config/server";
import axios from "axios";

export const fetchGetVoteCommentById = async (id) => await axios.get(`${server}/api/vote/comment/${id}`);
