import React from "react";
import styles from "@/styles/goal/NewGoalForm.module.scss";

export default function NewGoalTextSection({
  textareaReference,
  onChangeText,
  text,
  validationCheck,
}) {
  return (
    <>
      <div className={styles.textareaWrapper}>
        <textarea
          ref={textareaReference}
          className={styles.text}
          type="text"
          placeholder="내용을 입력해주세요!"
          onChange={onChangeText}
          value={text}
        />
      </div>
      <div style={{ width: "100%" }}>
        {validationCheck && (
          <div className={styles.validationFail}>내용을 입력해주세요!</div>
        )}
      </div>
    </>
  );
}
