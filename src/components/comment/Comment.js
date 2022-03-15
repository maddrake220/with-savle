import { useEffect, useState } from "react";

import { useGetComment } from "@/hooks/index";
import styles from "@/styles/comment/Comment.module.scss";
import { isCheckValue } from "@/utils/isCheckValue";

import CommentInput from "./CommentInput";
import CommentText from "./CommentText";
import Toggle from "./Toggle";

function Comment({ value, id, setCount }) {
  const [hidden, setHidden] = useState(true);
  const [data] = useGetComment(value, id);

  const handleHiddenComment = () => {
    setHidden(!hidden);
  };

  useEffect(() => {
    if (!hidden) {
      setCount(data.length);
    }
  });

  return (
    <div className={styles.comment_container}>
      <div className={styles.title}>
        <p>댓글</p>
        {!isCheckValue(value) && (
          <Toggle onClick={handleHiddenComment} hidden={hidden} />
        )}
      </div>
      <CommentInput value={value} id={id} />
      {isCheckValue(value)
        ? data.map((comment, index) => (
            <CommentText data={comment} key={index} />
          ))
        : !hidden &&
          data.map((comment, index) => (
            <CommentText data={comment} key={index} />
          ))}
    </div>
  );
}

export default Comment;
