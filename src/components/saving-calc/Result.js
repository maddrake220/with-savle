import ResultFoldBox from "./ResultFoldBox";
import css from "styled-jsx/css";
import periodCalc from "@/utils/periodCalc";

const style = css`
  .title {
    width: 210px;
    margin-bottom: 24px;
  }
  h2 span {
    position: relative;
    font-size: 18px;
    color: #3178ff;
  }
  h2 span::before {
    content: "";
    position: absolute;
    height: 8px;
    background: rgba(143, 201, 255, 0.7);
    opacity: 0.4;
    top: 17px;
    left: -2px;
  }
  .result {
    margin-bottom: 85px;
  }
  button {
    color: #fff;
    background: #3178ff;
  }
  @media (min-width: 576px) {
    .title {
      width: 100%;
      margin-bottom: 27px;
    }
    h2 span {
      font-size: 20px;
    }
    h2 span::before {
      height: 8px;
      top: 20px;
      left: -2px;
    }
    .result {
      margin-bottom: 23px;
    }
  }
  @media (min-width: 1200px) {
    .title {
      width: 100%;
      margin-bottom: 55px;
    }
    h2 span {
      font-size: 40px;
    }
    h2 span::before {
      height: 16px;
      top: 35px;
      left: -2px;
    }
    .result {
      margin-bottom: 57px;
    }
  }
`;
const Result = ({ inputs, setInputs, setState }) => {
  const { goal, goal_amount, saving_amount } = inputs;
  const handleReset = (e) => {
    e.preventDefault();
    setState({ next: false, result: false, done: false });
    setInputs({ goal: "", goal_amount: "", saving_amount: "" });
  };

  return (
    <>
      <div className="title">
        <h2>
          {goal.length >= 12 ? (
            <>
              <span>{goal.slice(0, 10)}</span>
              <br />
              <span className="slice">{goal.slice(10)}</span>
            </>
          ) : (
            <span>{goal}</span>
          )}{" "}
          위해
          <br />
          <span className="result-amount">{saving_amount}원</span>을{saving_amount.length > 8 && <br />} 적금한다면?
        </h2>
      </div>
      <div className="result">
        <ResultFoldBox setState={setState} period={"매월"} date={periodCalc("month", goal_amount, saving_amount)} rule={"월급날 규칙"} />
        <ResultFoldBox setState={setState} period={"매주"} date={periodCalc("week", goal_amount, saving_amount)} rule={"52주 규칙"} />
        <ResultFoldBox setState={setState} period={"매일"} date={periodCalc("day", goal_amount, saving_amount)} />
      </div>
      <button onClick={handleReset}>다시하기</button>
      <style jsx>{style}</style>
      <style jsx>{`
        .title h2 span::before {
          width: ${goal.length >= 12 ? `170px` : `calc(${goal.length} * 15px)`};
        }
        .title h2 span.slice::before {
          width: calc((${goal.length} - 9) * 15px);
        }
        .title h2 span.result-amount::before {
          width: calc(${saving_amount.length} * 13px);
        }
        @media (min-width: 576px) {
          .title h2 span::before {
            width: ${goal.length >= 12 ? `190px` : `calc(${goal.length} * 17px)`};
          }
          .title h2 span.slice::before {
            width: calc((${goal.length} - 9) * 17px);
          }
          .title h2 span.result-amount::before {
            width: calc(${saving_amount.length} * 15px);
          }
        }
        @media (min-width: 1200px) {
          .title h2 span::before {
            width: ${goal.length >= 12 ? `380px` : `calc(${goal.length} * 30px)`};
          }
          .title h2 span.slice::before {
            width: calc((${goal.length} - 9) * 30px);
          }
          .title h2 span.result-amount::before {
            width: calc(${saving_amount.length} * 28px);
          }
        }
      `}</style>
    </>
  );
};

export default Result;
