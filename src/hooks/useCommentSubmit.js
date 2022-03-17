import { useState } from "react";
import { fetchPostGoalComment } from "src/api/goal";
import { fetchPostVoteComment } from "src/api/vote";

import { controlTextarea, isCheckBlank, isCheckValue } from "@/utils/index";

export const useCommentSubmit = (
  textReference,
  comment,
  setComment,
  count,
  data,
  mutate,
  value,
  id,
) => {
  const [isLoading, setIsLoading] = useState(false);

  const handelSubmit = async (event) => {
    event.preventDefault();

    if (isCheckBlank(count)) return;
    setIsLoading(true);
    setComment("");
    controlTextarea(textReference, "reset");

    //data POST
    mutate([...data, { text: comment }], false);
    const response = isCheckValue(value)
      ? await fetchPostGoalComment({
          text: comment,
          id: id,
        })
      : await fetchPostVoteComment({
          text: comment,
          id: id,
        });
    mutate([...data, response.data.results]);

    setIsLoading(false);
  };
  return { handelSubmit, isLoading };
};
