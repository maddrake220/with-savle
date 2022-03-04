import ResultFoldBox from "./ResultFoldBox";
import css from "styled-jsx/css";

const style = css`
  .title {
    width: 199px;
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
  p {
    margin: 0;
    font-size: 14px;
  }
`;
const Result = ({ goal, amount }) => {
  const calc = (value) => {
    let numberValue = Number(amount.replaceAll(",", ""));
    let count = numberValue / 20000;
    let date = 0;
    if (value === "month") {
      while (count > 12) {
        count = count - 12;
        date++;
      }
      return `${date}년 ${count}개월`;
    } else if (value === "week") {
      while (count > 4) {
        count = count - 4;
        date++;
      }
      return `${date}개월 ${count}주`;
    } else if (value === "day") {
      return `${count}일`;
    }
  };

  const handleSubmit = () => {};
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
          <span className="result-amount">{amount}원</span>을 적금한다면?
        </h2>
      </div>
      <ResultFoldBox period={"매월"} date={calc("month")} rule={"월급날 규칙"} />
      <ResultFoldBox period={"매주"} date={calc("week")} rule={"52주 규칙"} />
      <ResultFoldBox period={"매일"} date={calc("day")} />
      <style jsx>{style}</style>
      <style jsx>{`
        .title h2 span::before {
          width: ${goal.length > 12 ? `180px` : `calc(${goal.length} * 15px)`};
        }
        .title h2 span.slice::before {
          width: calc((${goal.length} - 11) * 15px);
        }
        .title h2 span.result-amount::before {
          width: calc(${amount.length} * 12px);
        }
      `}</style>
    </>
  );
};

export default Result;
