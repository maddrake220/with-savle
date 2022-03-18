import Book from "public/layout/book.svg";

import {
  useSavingGoalInput,
  useSavingGoalSubmit,
  useWidth,
} from "@/hooks/index";
import styles from "@/styles/saving-calc/SavingGoal.module.scss";

import Button from "./Button";
import SavingGoalInput from "./SavingGoalInput";

function SavingGoal({ data }) {
  const { goal, nextButtonFocus, handleChange } = useSavingGoalInput();
  const handleSubmit = useSavingGoalSubmit(data, goal);
  return (
    <>
      <div className={`${styles.title}`}>
        <h2>저축 목표를 알려주세요.</h2>
        <Book
          width={useWidth(63, 71, 137, "px")}
          style={{ marginRight: "7px" }}
        />
      </div>
      <SavingGoalInput
        goal={goal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        nextButtonFocus={nextButtonFocus}
      />
      <Button focus={nextButtonFocus} handleSubmit={handleSubmit} name="next" />
    </>
  );
}

export default SavingGoal;
