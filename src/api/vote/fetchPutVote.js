import { fetchVoteInstance } from ".";

// unused
export const fetchPutVote = async (parameters) =>
  await fetchVoteInstance.put("", { params: parameters });
