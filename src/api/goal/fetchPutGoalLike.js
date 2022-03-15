import { fetchGoalInstance } from ".";

export const fetchPutGoalLike = async (parameters) =>
  await fetchGoalInstance.put(`like`, { params: parameters });
