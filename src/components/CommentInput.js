import { useRef } from "react";

import useCommentInput from "@/hooks/useCommentInput";
import useGetComment from "@/hooks/useGetComment";

import styles from "../../styles/comment/CommentInput.module.scss";

const CommentInput = ({ value, id }) => {
  const textReference = useRef();

  const [data, mutate] = useGetComment(value, id);

  const [
    comment,
    disabled,
    blankCheck,
    handelChange,
    handleKeyPress,
    handleSubmit,
  ] = useCommentInput(textReference, data, mutate, value, id);

  return (
    <form className={styles.input_box} onSubmit={handleSubmit}>
      <textarea
        naeme="comment"
        ref={textReference}
        value={comment}
        disabled={disabled}
        onChange={handelChange}
        onKeyPress={handleKeyPress}
        placeholder="댓글을 남겨보세요 "
      />
      <input
        type="submit"
        className={blankCheck !== 0 ? styles.submit : undefined}
        value="등록"
        disabled={disabled}
      />
    </form>
  );
};

export default CommentInput;
