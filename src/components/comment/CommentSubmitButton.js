import styles from "@/styles/comment/CommentSubmitButton.module.scss";

function CommentSubmitButton({ isLoading, count }) {
  return (
    <input
      type="submit"
      className={`${styles.input} ${count !== 0 ? styles.submit : ""}`}
      value="등록"
      disabled={isLoading}
    />
  );
}

export default CommentSubmitButton;
