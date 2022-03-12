import styles from "../../../styles/saving-calc/CalcInputBox.module.scss";
import AmountInput from "./AmountInput";
import GoalInput from "./GoalInput";
import Result from "./Result";

const CalcInputBox = ({ data }) => {
  const state = data[2];
  const { next, result } = state;

  return (
    <div className={styles.box}>
      {!next && <GoalInput data={data} />}
      {next && !result && <AmountInput data={data} />}
      {result && <Result data={data} />}
    </div>
  );
};

export default CalcInputBox;
