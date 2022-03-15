import { fetchVoteInstance } from ".";

export const fetchGetVoteCommentById = async (id) =>
  await fetchVoteInstance.get(`comment/${id}`);
