import { useState } from "react";

import { useGetComment } from "@/hooks/useGetComment";

import styles from "../../styles/comment/Comment.module.scss";
import CommentInput from "./CommentInput";
import CommentText from "./CommentText";
import Toggle from "./Toggle";

const Comment = ({ value }) => {
  const [hidden, setHidden] = useState(true);
  const id = 5;
  const [data] = useGetComment(value, id);

  const handleHiddenComment = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.comment_container}>
      <div className={styles.title}>
        <p>댓글</p>
        <Toggle onClick={handleHiddenComment} hidden={hidden} />
      </div>
      <CommentInput value={value} id={id} />
      {!hidden &&
        data.map((comment) => <CommentText data={comment} key={comment.id} />)}
    </div>
  );
};

export default Comment;
