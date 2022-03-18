import styles from "@/styles/comment/Comment.module.scss";

function CommentText({ data }) {
  const { id, text } = data;

  return (
    <div className={styles.comment_text}>
      <h3>익명의 {id}님</h3>
      <pre>{text}</pre>
    </div>
  );
}

export default CommentText;
