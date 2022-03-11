import axios from "axios";

import server from "@/config/server";

export const fetchGetVote = async () => await axios.get(`${server}/api/vote`);
