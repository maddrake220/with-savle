import Book from "public/layout/book.svg";
import PiggyBank from "public/layout/piggy-bank.svg";
import { useState } from "react";
import css from "styled-jsx/css";

const style = css`
  .box {
    width: 280px;
    padding: 20px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(71, 72, 75, 0.1);
    border-radius: 12px;
    margin: auto;
  }
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    height: 63px;
  }
  .title h2 {
    width: 143px;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    position: relative;
  }
  .title h2::before {
    content: "";
    width: 127px;
    height: 8px;
    background: rgba(143, 201, 255, 0.7);
    opacity: 0.4;
    position: absolute;
    top: 17px;
    left: -2px;
  }
  .title.result h2 {
    width: 100%;
  }
  .title.result h2 span {
    position: relative;
  }
  .title.result h2 span::before {
    content: "";
    position: absolute;
    height: 8px;
    background: rgba(143, 201, 255, 0.7);
    opacity: 0.4;
    top: 17px;
    left: -2px;
  }

  .goal {
    margin-bottom: 53px;
  }
  .goal_input {
    margin-top: 18px;
  }
  .goal.text .goal_input input {
    width: 188px;
    border: none;
    border-bottom: 1px solid #e3e7ed;
    margin-right: 4px;
    font-size: 14px;
    text-align: right;
  }
  .goal.amount .goal_input input {
    width: 175px;
    border: none;
    border-bottom: 1px solid #e3e7ed;
    margin-right: 4px;
    font-size: 14px;
    text-align: right;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: #b2b2b2;
  }
  .amount-plus {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    color: #a0a1a9;
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
    color: #b2b2b2;
    border: none;
    border-radius: 8px;
    background: #d6d8dc;
    margin-bottom: 15px;
  }
  button.next {
    color: #fff;
    background: #3178ff;
  }
  .goal_input span {
    font-size: 10px;
    color: red;
  }
  span.hidden {
    display: none;
  }
`;
function CalcInputBox() {
  const [inputs, setInputs] = useState({ goal: "", amount: "" });
  const [result, setResult] = useState(false);
  const { goal, amount } = inputs;

  const nextButtonFocus = goal.length > 0 && goal.length < 21 && amount.length > 0 && amount.length < 16;
  console.log(goal, amount);
  const comma = (value) =>
    String(value)
      .replace(/[^0-9]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleChange = (e) => {
    let { value, name } = e.target;
    if (name === "amount") {
      if (value == "0") return (value = " ");
      value = comma(value);
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    let value = 0;

    if (inputs.amount === "") {
      if (id === "plus1") {
        value = 10000;
      } else if (id === "plus5") {
        value = 50000;
      } else {
        value = 100000;
      }
      value = comma(value);
    } else {
      let numberValue = Number(inputs.amount.replaceAll(",", ""));
      if (id === "plus1") {
        numberValue += 10000;
      } else if (id === "plus5") {
        numberValue += 50000;
      } else {
        numberValue += 100000;
      }
      value = comma(numberValue);
    }
    setInputs({
      ...inputs,
      amount: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(true);
  };
  return (
    <form className="box" onSubmit={handleSubmit}>
      {!result ? (
        <>
          <div className="title">
            <h2>저축 목표와 금액을 알려주세요.</h2>
            {goal.length > 0 ? <PiggyBank width="67px" height="52px" /> : <Book width="63px" height="68px " />}
          </div>
          <div className="goal text">
            <p>저의 목표는</p>
            <p className="goal_input">
              <input name="goal" type="text" maxLength={20} placeholder="예) 결혼자금 모으기" onChange={handleChange} value={goal}></input> 입니다
              <span className={goal.length > 20 ? "" : "hidden"}>*최대 글자수는 20자입니다.</span>
            </p>
          </div>
          <div className="goal amount">
            <p>목표 금액은</p>
            <p className="goal_input">
              <input name="amount" type="text" maxLength={16} placeholder="예) 70,000,000" onChange={handleChange} value={amount}></input>원 입니다
              <span className={amount.length > 15 ? "" : "hidden"}>*입력범위를 초과했습니다.</span>
            </p>
            <div className="amount-plus">
              <Plus id="plus1" onClick={handleClick}>
                +1만
              </Plus>
              <Plus id="plus5" onClick={handleClick}>
                +5만
              </Plus>
              <Plus id="plus10" onClick={handleClick}>
                +10만
              </Plus>
            </div>
          </div>
          <button type="submit" className={nextButtonFocus && "next"}>
            결과보기
          </button>
        </>
      ) : (
        <>
          <div className="title result">
            <h2>
              <span>{goal}</span>위해
              {goal.length < 15 && <br />} <span className="result-amount">{amount}원</span>을 적금한다면?
            </h2>
          </div>
        </>
      )}
      <style jsx>{style}</style>
      <style jsx>{`
        .title h2::before {
          display: ${result ? "none" : "block"};
        }
        .title.result h2 span::before {
          width: calc(${goal.length} * 15px);
        }
        .title.result h2 span.result-amount::before {
          width: calc(${amount.length} * 12px);
        }
      `}</style>
    </form>
  );
}

function Plus({ id, onClick, children }) {
  return (
    <button id={id} onClick={onClick}>
      {children}
      <style jsx>{`
        button {
          width: 47px;
          height: 20px;
          background: #eceff2;
          border-radius: 120px;
          text-align: center;
          margin-left: 10px;
          border: none;
          font-weight: 500;
          font-size: 10px;
          color: #a0a1a9;
        }
        p {
          margin: 0;
          /* margin: 3.5px 0 0; */
          font-weight: 500;
          font-size: 10px;
          color: #a0a1a9;
        }
      `}</style>
    </button>
  );
}

export default CalcInputBox;
