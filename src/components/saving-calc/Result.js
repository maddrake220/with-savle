import styles from "@/styles/saving-calc/Result.module.scss";
import { periodCalc } from "@/utils/index";

import Button from "./Button";
import ResultFoldBox from "./ResultFoldBox";
import ResultTitle from "./ResultTitle";

function Result({ data }) {
  const { inputs, setInputs, setState } = data;
  const { goal, goal_amount, saving_amount } = inputs;

  const handleReset = (event) => {
    event.preventDefault();
    setState({ next: false, result: false, done: false });
    setInputs({ goal: "", goal_amount: "", saving_amount: "" });
  };

  return (
    <>
      <ResultTitle goal={goal} saving_amount={saving_amount} />
      <div className={styles.result_wrap}>
        <ResultFoldBox
          setState={setState}
          period={"매월"}
          date={periodCalc("month", goal_amount, saving_amount)}
          rule={"월급날 규칙"}
        />
        <ResultFoldBox
          setState={setState}
          period={"매주"}
          date={periodCalc("week", goal_amount, saving_amount)}
          rule={"52주 규칙"}
        />
        <ResultFoldBox
          setState={setState}
          period={"매일"}
          date={periodCalc("day", goal_amount, saving_amount)}
        />
      </div>
      <Button handleReset={handleReset} name="done" focus={true} />
    </>
  );
}

export default Result;
