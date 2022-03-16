import styles from "@/styles/saving-calc/CalcInputBox.module.scss";

import Result from "./Result";
import SavingAmount from "./SavingAmount";
import SavingGoal from "./SavingGoal";

function SavingClac({ data }) {
  const { state } = data;
  const { next, result } = state;

  return (
    <div className={styles.box}>
      {!next && <SavingGoal data={data} />}
      {next && !result && <SavingAmount data={data} />}
      {result && <Result data={data} />}
    </div>
  );
}

export default SavingClac;
