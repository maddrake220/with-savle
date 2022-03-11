import axios from "axios";
import { mutate } from "swr";

import server from "@/config/server";

import { goal_address } from "../swr";

export const putLike = async (id, like) => {
  await axios.put(`${server}/api/goal/like`, { params: { id, like } });
};

export const postNewGoal = async (data) => {
  const response = await axios.post(`${server}/api/goal`, { params: data });
  mutate(goal_address);
  return response;
};

export const getGoalCategoryByAge = async (age) => {
  return await axios.get(`${server}/api/goal/category`, { params: { age } });
};
