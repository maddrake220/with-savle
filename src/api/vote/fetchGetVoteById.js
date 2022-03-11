import server from "@/config/server";
import axios from "axios";

export const fetchGetVoteById = async (id) => await axios.get(`${server}/api/vote/${id}`);
