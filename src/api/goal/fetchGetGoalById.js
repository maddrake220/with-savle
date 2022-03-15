import { fetchGoalInstance } from ".";

export const fetchGetGoalById = async (id) => await fetchGoalInstance.get(id);
