import axios from "axios";

import server from "@/config/server";

export const getVoteByIdUrl = (id) => `${server}/api/vote/${id}`;

export const fetchGetVoteById = async (id) =>
  await axios.get(getVoteByIdUrl(id));
