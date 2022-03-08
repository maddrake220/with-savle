import server from "@/config/server";
import axios from "axios";
import { mutate } from "swr";
import { goal_address } from "../swr";

export const putLike = async (id, like) => {
  await axios.put(`${server}/api/goal/like`, { params: { id, like } });
};

export const postNewGoal = async (data) => {
  const res = await axios.post(`${server}/api/goal`, { params: data });
  mutate(goal_address);
  return res;
};
