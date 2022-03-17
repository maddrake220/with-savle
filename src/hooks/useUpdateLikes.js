// import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { fetchGetGoalById } from "src/api/goal";
// import { fetchGetVoteById } from "src/api/vote";

export const useUpdateLikes = (id, initCount) => {
  const [likes, setLikes] = useState(initCount);
  // const { pathname } = useRouter();
  const response = useCallback(async () => {
    // const isGoal = pathname.includes("goal");
    const stringId = id.toString();
    const {
      data: {
        results: { likes: updateLikes },
      },
    } = await fetchGetGoalById(stringId);

    if (updateLikes) {
      setLikes(updateLikes);
    }
  }, [id]);
  useEffect(() => {
    response();
  }, [response]);

  return { updateLikes: likes };
};
