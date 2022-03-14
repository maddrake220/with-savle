import axios from "axios";

import server from "@/config/server";

export const getVoteUrl = () => `${server}/api/vote`;

export const fetchGetVote = async () => await axios.get(getVoteUrl());
