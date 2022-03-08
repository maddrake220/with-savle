import axios from "axios";

export const fetcher = (server) => axios.get(server).then((r) => r.data);

export const goal_address = "/api/goal";

export const goal_category_address = "/api/goal/category";
