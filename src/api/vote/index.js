import axios from "axios";

const API_BASE_URL =
  (process.env.API_BASE_URL ?? "http://localhost:3000/") + "api/vote/";

export { fetchGetVote } from "./fetchGetVote";
export { fetchGetVoteById } from "./fetchGetVoteById";
export { fetchGetVoteCommentById } from "./fetchGetVoteCommentById";
export { fetchPostVote } from "./fetchPostVote";
export { fetchPostVoteComment } from "./fetchPostVoteComment";
export { fetchPutVote } from "./fetchPutVote";
export { fetchPutVoteLike } from "./fetchPutVoteLike";
export const getVoteUrl = () => API_BASE_URL;
export const getVoteByIdUrl = (id) => API_BASE_URL + id;
export const getVoteCommentByIdUrl = (id) => `${API_BASE_URL}comment/${id}`;
export const fetchVoteInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 4000,
});
