import { useState } from "react";

import { controlTextarea } from "@/utils/controlTextarea";
import { commentCount, isCheckCount } from "@/utils/index";

export const useCommentTextarea = (textReference) => {
  const [comment, setComment] = useState("");
  const count = commentCount(comment);

  const handelChange = (event) => {
    const value = event.target.value;
    isCheckCount(value);
    controlTextarea(textReference, "change");
    setComment(value);
  };

  return { comment, count, setComment, handelChange };
};
