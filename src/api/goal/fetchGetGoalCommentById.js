import server from "@/config/server";
import axios from "axios";

export const fetchGetCommentById = async (id) => await axios.get(`${server}/api/goal/comment/${id}`);
