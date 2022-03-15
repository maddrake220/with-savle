import { fetchVoteInstance } from ".";

export const fetchPostVote = async (parameters) =>
  await fetchVoteInstance.post("", { params: parameters });
