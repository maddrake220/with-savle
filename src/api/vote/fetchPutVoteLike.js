import { fetchVoteInstance } from ".";

export const fetchPutVoteLike = async (parameters) =>
  await fetchVoteInstance.put(`like`, { params: parameters });
