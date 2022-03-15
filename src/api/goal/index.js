import axios from "axios";

const API_BASE_URL =
  (process.env.API_BASE_URL ?? "http://localhost:3000/") + "api/goal/";

export { fetchGetGoal } from "./fetchGetGoal";
export { fetchGetGoalById } from "./fetchGetGoalById";
export { fetchGetGoalCategory, getGoal } from "./fetchGetGoalCategory";
export { fetchGetCommentById } from "./fetchGetGoalCommentById";
export { fetchPostGoal } from "./fetchPostGoal";
export { fetchPostGoalComment } from "./fetchPostGoalComment";
export { fetchPutGoalLike } from "./fetchPutGoalLike";

export const getGoalByIdUrl = (id) => API_BASE_URL + id;
export const getGoalUrl = () => API_BASE_URL;
export const getGoalCategory = () => API_BASE_URL + "category";
export const getGoalCommentByIdUrl = (id) => `${API_BASE_URL}comment/${id}`;

export const fetchGoalInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 4000,
});
