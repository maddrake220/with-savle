import styles from "@/styles/comment/CommentTextarea.module.scss";

function CommentTextarea({ textReference, comment, isLoading, handelChange }) {
  return (
    <textarea
      className={styles.textarea}
      naeme="comment"
      ref={textReference}
      value={comment}
      onChange={handelChange}
      placeholder="댓글을 남겨보세요"
      disabled={isLoading}
    />
  );
}

export default CommentTextarea;
