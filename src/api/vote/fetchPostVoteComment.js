import { fetchVoteInstance } from ".";

export const fetchPostVoteComment = async (parameters) =>
  await fetchVoteInstance.post(`comment`, { params: parameters });
