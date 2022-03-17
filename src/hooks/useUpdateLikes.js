import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { fetchGetGoalById } from "src/api/goal";
import { fetchGetVoteById } from "src/api/vote";

export const useUpdateLikes = (id) => {
  const [likes, setLikes] = useState(0);
  const { pathname } = useRouter();

  const response = useCallback(async () => {
    const isGoal = pathname.includes("goal");
    const stringId = id.toString();
    const {
      data: {
        results: { likes: updateLikes },
      },
    } = await (isGoal
      ? fetchGetGoalById(stringId)
      : fetchGetVoteById(stringId));

    if (updateLikes) {
      setLikes(updateLikes);
    }
  }, [id, pathname]);

  useEffect(() => {
    response();
  }, [response]);

  return { updateLikes: likes };
};
