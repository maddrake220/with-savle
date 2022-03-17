import { useEffect } from "react";

import { useGetComment } from "@/hooks/index";
import styles from "@/styles/comment/Comment.module.scss";
import { countAnimation, isCheckValue } from "@/utils/index";

import CommentForm from "./CommenForm";
import CommentText from "./CommentText";
import CommentTitle from "./CommentTitle";

function Comment({ value, id, setCount, hidden, setHidden }) {
  const [data] = useGetComment(value, id);

  const handleHiddenComment = () => {
    setHidden(!hidden);
  };

  useEffect(() => {
    if (data) {
      countAnimation(setCount, data.length, 500);
    }
  }, [setCount, data]);

  return (
    <div className={styles.comment_container}>
      <CommentTitle
        value={value}
        handleHiddenComment={handleHiddenComment}
        hidden={hidden}
      />
      <CommentForm value={value} id={id} />
      {isCheckValue(value)
        ? data?.map((comment, index) => (
            <CommentText data={comment} key={index} />
          ))
        : !hidden &&
          data?.map((comment, index) => (
            <CommentText data={comment} key={index} />
          ))}
    </div>
  );
}

export default Comment;
