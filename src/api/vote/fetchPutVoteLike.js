import server from "@/config/server";
import axios from "axios";

export const fetchPutVoteLike = async (params) => await axios.put(`${server}/api/vote/like`, { params });
