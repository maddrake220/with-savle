import { fetchGoalInstance } from ".";

export const fetchPostGoalComment = async (parameters) =>
  await fetchGoalInstance.post(`comment`, { params: parameters });
