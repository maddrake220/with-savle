import { fetchGoalInstance } from ".";

export const fetchGetGoalCategory = async (parameters) =>
  await fetchGoalInstance.get("category", { params: parameters });
