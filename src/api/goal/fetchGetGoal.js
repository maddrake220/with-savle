import axios from "axios";

import server from "@/config/server";

export const getGoalUrl = () => `${server}/api/goal`;

export const fetchGetGoal = async () => await axios.get(getGoalUrl());
