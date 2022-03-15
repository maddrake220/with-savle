import styles from "@/styles/comment/CommentTextarea.module.scss";

function CommentTextarea({
  textReference,
  comment,
  isLoading,
  handelChange,
  handelSubmit,
}) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.shiftKey) return;

    if (event.key === "Enter") {
      event.preventDefault();
      handelSubmit(event);
    }
  };
  return (
    <textarea
      autoFocus
      className={styles.textarea}
      naeme="comment"
      ref={textReference}
      value={comment}
      onChange={handelChange}
      onKeyPress={handleKeyPress}
      placeholder="댓글을 남겨보세요"
      disabled={isLoading}
    />
  );
}

export default CommentTextarea;
