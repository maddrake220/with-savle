import React from "react";

import styles from "@/styles/saving-calc/SavingGoal.module.scss";

function SavingGoalInput({
  nextButtonFocus,
  handleSubmit,
  handleChange,
  goal,
}) {
  const handelKeypress = (event) => {
    if (event.key === "Enter" && nextButtonFocus) handleSubmit(event);
  };
  return (
    <div className={styles.goal}>
      <p>저의 목표는</p>
      <p className={styles.goal_input}>
        <input
          id="goal"
          name="next"
          type="text"
          maxLength={21}
          placeholder="예) 결혼자금 모으기"
          onChange={handleChange}
          onKeyDown={handelKeypress}
          value={goal}
        ></input>{" "}
        입니다
        <span className={goal.length <= 20 ? styles.hidden : ""}>
          *최대 글자수는 20자입니다.
        </span>
      </p>
    </div>
  );
}

export default SavingGoalInput;
