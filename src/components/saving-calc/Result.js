import ResultFoldBox from "./ResultFoldBox";
import css from "styled-jsx/css";
import periodCalc from "@/utils/periodCalc";

const style = css`
  .title {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }
  .title h2 {
    font-weight: bold;
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    position: relative;
  }
  .title h2 span {
    position: relative;
  }
  .title h2 span::before {
    content: "";
    position: absolute;
    height: 8px;
    background: rgba(143, 201, 255, 0.7);
    opacity: 0.4;
    top: 17px;
    left: -2px;
  }
  .result {
    margin-bottom: 75px;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
  button {
    width: 220px;
    height: 34px;
    display: block;
    margin: 0 auto;
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    background: #3178ff;
    border: none;
    border-radius: 8px;
    margin-bottom: 15px;
  }
`;
const Result = ({ inputs, setInputs, setState }) => {
  const { goal, goal_amount, saving_amount } = inputs;

  const handleReset = (e) => {
    e.preventDefault();
    setState({ next: false, result: false });
    setInputs({ goal: "", goal_amount: "", saving_amount: "" });
  };

  return (
    <>
      <div className="title">
        <h2>
          {goal.length > 12 ? (
            <>
              <span>{goal.slice(0, 12)}</span>
              <br />
              <span className="slice">{goal.slice(12)}</span>
            </>
          ) : (
            <span>{goal}</span>
          )}{" "}
          위해
          <br />
          <span className="result-amount">{saving_amount}원</span>을 적금한다면?
        </h2>
      </div>
      <div className="result">
        <ResultFoldBox period={"매월"} date={periodCalc("month", goal_amount, saving_amount)} rule={"월급날 규칙"} />
        <ResultFoldBox period={"매주"} date={periodCalc("week", goal_amount, saving_amount)} rule={"52주 규칙"} />
        <ResultFoldBox period={"매일"} date={periodCalc("day", goal_amount, saving_amount)} />
      </div>
      <button onClick={handleReset}>다시하기</button>
      <style jsx>{style}</style>
      <style jsx>{`
        .title h2 span::before {
          width: ${goal.length > 12 ? `180px` : `calc(${goal.length} * 15px)`};
        }
        .title h2 span.slice::before {
          width: calc((${goal.length} - 11) * 15px);
        }
        .title h2 span.result-amount::before {
          width: calc(${goal_amount.length} * 12px);
        }
      `}</style>
    </>
  );
};

export default Result;
