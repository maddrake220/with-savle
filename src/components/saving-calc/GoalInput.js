import Book from "public/layout/book.svg";

import { useGoalInput, useWidth } from "@/hooks/index";
import styles from "@/styles/saving-calc/SavingClacCommon.module.scss";

function GoalInput({ data }) {
  const [goal, nextButtonFocus, handleChange, handelKeypress, handleSubmit] =
    useGoalInput(data);

  return (
    <>
      <div className={`${styles.title} ${styles.goal}`}>
        <h2>저축 목표를 알려주세요.</h2>
        <Book
          width={useWidth(63, 71, 137, "px")}
          style={{ marginRight: "7px" }}
        />
      </div>
      <div className={styles.goal}>
        <p>저의 목표는</p>
        <p className={styles.goal_input}>
          <input
            id="next"
            name="goal"
            type="text"
            maxLength={21}
            placeholder="예) 결혼자금 모으기"
            onChange={handleChange}
            onKeyDown={handelKeypress}
            value={goal}
            className={styles.input}
            autoFocus
          ></input>{" "}
          입니다
          <span className={goal.length <= 20 ? styles.hidden : ""}>
            *최대 글자수는 20자입니다.
          </span>
        </p>
      </div>
      <button
        id="next"
        onClick={handleSubmit}
        className={`${styles.button} ${nextButtonFocus ? styles.next : ""}`}
        disabled={!nextButtonFocus ? "disabled" : ""}
      >
        다음
      </button>
    </>
  );
}

export default GoalInput;
