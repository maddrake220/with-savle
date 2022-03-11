import axios from "axios";

import server from "@/config/server";

export const fetchPostVote = async (parameters) => await axios.post(`${server}/api/vote}`, { params: parameters });
