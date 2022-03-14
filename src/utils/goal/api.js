import axios from "axios";

import server from "@/config/server";

export const putLike = async (id, like) => {
  await axios.put(`${server}/api/goal/like`, { params: { id, like } });
};

export const postNewGoal = async (data) => {
  return await axios.post(`${server}/api/goal`, { params: data });
};

export const getGoalCategoryByAge = async (age) => {
  return await axios.get(`${server}/api/goal/category`, { params: { age } });
};
