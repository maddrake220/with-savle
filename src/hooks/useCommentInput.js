import { useCallback, useState } from "react";
import { fetchPostGoalComment } from "src/api/goal";
import { fetchPostVoteComment } from "src/api/vote";

import { controlTextarea } from "@/utils/controlTextarea";
import {
  commentCount,
  isCheckBlank,
  isCheckCount,
  isCheckValue,
} from "@/utils/index";

export const useCommentInput = (textReference, data, mutate, value, id) => {
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(false);
  const count = commentCount(comment);

  const handelChange = useCallback((event) => {
    const value = event.target.value;
    isCheckCount(value);
    controlTextarea(textReference, "change");
    setComment(value);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.shiftKey) return;

    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      setDisabled(true);
      isCheckBlank(count);

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
      mutate([...data, response.data.results], false);

      setComment("");
      controlTextarea(textReference, "reset");
      setDisabled(false);
    },
    [comment],
  );

  return [comment, disabled, handelChange, handleKeyPress, handleSubmit];
};
