import { useRef } from "react";

import {
  useCommentSubmit,
  useCommentTextarea,
  useGetComment,
} from "@/hooks/index";
import styles from "@/styles/comment/CommentForm.module.scss";

import CommentSubmitButton from "./CommentSubmitButton";
import CommentTextarea from "./CommentTextarea";

function CommentForm({ value, id }) {
  const textReference = useRef();
  const [data, mutate] = useGetComment(value, id);

  const { comment, count, setComment, handelChange } =
    useCommentTextarea(textReference);

  const { handelSubmit, isLoading } = useCommentSubmit(
    textReference,
    comment,
    setComment,
    count,
    data,
    mutate,
    value,
    id,
  );

  return (
    <form className={styles.input_box} onSubmit={handelSubmit}>
      <CommentTextarea
        comment={comment}
        isLoading={isLoading}
        textReference={textReference}
        handelChange={handelChange}
      />
      <CommentSubmitButton count={count} isLoading={isLoading} />
    </form>
  );
}

export default CommentForm;
