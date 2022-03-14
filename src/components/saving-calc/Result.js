import styles from "@/styles/saving-calc/SavingClacCommon.module.scss";
import { periodCalc } from "@/utils/index";

import ResultFoldBox from "./ResultFoldBox";

function Result({ data }) {
  const [inputs, setInputs, , setState] = data;
  const { goal, goal_amount, saving_amount } = inputs;

  const handleReset = (event) => {
    event.preventDefault();
    setState({ next: false, result: false, done: false });
    setInputs({ goal: "", goal_amount: "", saving_amount: "" });
  };

  return (
    <>
      <div className={`${styles.title} ${styles.result}`}>
        <h2>
          {goal.length >= 12 ? (
            <>
              <span className="goal_slice_first">{goal.slice(0, 10)}</span>
              <br />
              <span className="goal_slice_second">{goal.slice(10)}</span>
            </>
          ) : (
            <span className="goal_slice_first">{goal}</span>
          )}{" "}
          을 위해
          <br />
          <span className="amount">{saving_amount}원</span>을
          {saving_amount.length > 8 && <br />} 적금한다면?
        </h2>
      </div>
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
      <button
        className={`${styles.button} ${styles.result}`}
        onClick={handleReset}
      >
        다시하기
      </button>
      <style jsx>{`
        span.goal_slice_first::before {
          width: ${goal.length >= 12 ? `165px` : `calc(${goal.length} * 18px)`};
        }
        span.goal_slice_second::before {
          width: calc((${goal.length} - 9) * 15px);
        }
        span.amount::before {
          width: calc(${saving_amount.length} * 12px);
        }
        @media (min-width: 576px) {
          span.goal_slice_first::before {
            width: ${goal.length >= 12
              ? `180px`
              : `calc(${goal.length} * 17px)`};
          }
          span.goal_slice_second::before {
            width: calc((${goal.length} - 9) * 17px);
          }
          span.amount::before {
            width: calc(${saving_amount.length} * 14px);
          }
        }
        @media (min-width: 1200px) {
          span.goal_slice_first::before {
            width: ${goal.length >= 12
              ? `360px`
              : `calc(${goal.length} * 33px)`};
          }
          span.goal_slice_second::before {
            width: calc((${goal.length} - 9) * 33px);
          }
          span.amount::before {
            width: calc(${saving_amount.length} * 26px);
          }
        }
      `}</style>
    </>
  );
}

export default Result;
