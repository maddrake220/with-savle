import { fetchGoalInstance } from ".";

export const fetchPostGoal = async (parameters) =>
  await fetchGoalInstance.post("", { params: parameters });
