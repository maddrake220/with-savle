import axios from "axios";

import server from "../server";

const API_BASE_URL = server + "api/goal/";

export { fetchGetGoal } from "./fetchGetGoal";
export { fetchGetGoalById } from "./fetchGetGoalById";
export { fetchGetGoalCategory } from "./fetchGetGoalCategory";
export { fetchGetGoalCommentById } from "./fetchGetGoalCommentById";
export { fetchPostGoal } from "./fetchPostGoal";
export { fetchPostGoalComment } from "./fetchPostGoalComment";
export { fetchPutGoalLike } from "./fetchPutGoalLike";

export const getGoalByIdUrl = (id) => API_BASE_URL + id;
export const getGoalUrl = () => API_BASE_URL;
export const getGoalCategory = () => API_BASE_URL + "category";
export const getGoalCommentByIdUrl = (id) => `${API_BASE_URL}comment/${id}`;

export const fetchGoalInstance = axios.create({
  baseURL: API_BASE_URL,
});
