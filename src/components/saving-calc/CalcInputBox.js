import Link from "next/link";

import PiggyBank from "public/layout/piggy-bank.svg";
import { useState } from "react";
import css from "styled-jsx/css";
import PlusButton from "./PlusButton";
import Result from "./Result";
import ResultFoldBox from "./ResultFoldBox";

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
  .goal {
    margin-bottom: 53px;
  }
  .goal_input {
    margin-top: 18px;
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
  button.reset {
    margin-top: 75px;
  }
  .goal_input span {
    font-size: 10px;
    color: red;
  }
  span.hidden {
    display: none;
  }
`;
const CalcInputBox = () => {
  const [inputs, setInputs] = useState({ goal: "", amount: "" });
  const [result, setResult] = useState(false);
  const { goal, amount } = inputs;

  const nextButtonFocus = goal.length > 0 && goal.length < 21 && amount.length > 0 && amount.length < 16;

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
  const handleReset = (e) => {
    e.preventDefault();
    setResult(false);
    setInputs({ goal: "", amount: "" });
  };
  return (
    <div className="box">
      {!result ? (
        <>
          <div className="title">
            <h2>목표 금액과 저축 금액을 알려주세요.</h2>
            <PiggyBank width="67px" height="52px" />
          </div>

          <div className="goal amount">
            <p>목표 금액은</p>
            <p className="goal_input">
              <input name="amount" type="text" maxLength={16} placeholder="예) 70,000,000" onChange={handleChange} value={amount}></input>원 입니다
              <span className={amount.length > 15 ? "" : "hidden"}>*입력범위를 초과했습니다.</span>
            </p>
            <div className="amount-plus">
              <PlusButton id="plus1" onClick={handleClick}>
                +1만
              </PlusButton>
              <PlusButton id="plus5" onClick={handleClick}>
                +5만
              </PlusButton>
              <PlusButton id="plus10" onClick={handleClick}>
                +10만
              </PlusButton>
            </div>
          </div>
          <button onClick={handleSubmit} className={nextButtonFocus && "next"}>
            결과보기
          </button>
        </>
      ) : (
        <>
          <Result goal={goal} amount={amount} setInputs={setInputs} />
          <button onClick={handleReset} className="reset next">
            다시하기
          </button>
        </>
      )}
      <style jsx>{style}</style>
    </div>
  );
};

export default CalcInputBox;
