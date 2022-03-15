import axios from "axios";

import server from "../server";

const API_BASE_URL = server + "api/vote/";

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
});
