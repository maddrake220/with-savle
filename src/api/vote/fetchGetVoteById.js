import { fetchVoteInstance } from ".";

export const fetchGetVoteById = async (id) => await fetchVoteInstance.get(id);
