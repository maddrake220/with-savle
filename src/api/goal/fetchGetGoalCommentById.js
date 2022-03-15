import { fetchGoalInstance } from ".";

export const fetchGetGoalCommentById = async (id) =>
  fetchGoalInstance.get(`comment/${id}`);
