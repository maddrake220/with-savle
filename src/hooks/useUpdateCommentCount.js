import { useEffect, useState } from "react";

import { countAnimation } from "../utils";

export const useUpdateCommentCount = () => {
  const [count, setCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    if (commentCount !== 0 && count === 0) {
      countAnimation(setCount, commentCount, 500);
    }
    if (count !== 0) {
      setCount(commentCount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentCount]);

  return [count, setCommentCount];
};
