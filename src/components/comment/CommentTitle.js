import styles from "@/styles/comment/CommentTitle.module.scss";
import { isCheckValue } from "@/utils/isCheckValue";

import Toggle from "./Toggle";

function CommentTitle({ value, handleHiddenComment, hidden }) {
  return (
    <div className={styles.title}>
      <p>댓글</p>
      {!isCheckValue(value) && (
        <>
          <Toggle onClick={handleHiddenComment} hidden={hidden} />
          <span>더보기</span>
        </>
      )}
    </div>
  );
}

export default CommentTitle;
