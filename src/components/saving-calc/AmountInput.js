import PiggyBank from "public/layout/piggy-bank.svg";
import PlusButton from "./PlusButton";
import css from "styled-jsx/css";
import { useCallback, useState } from "react";
import comma from "@/utils/comma";
import addAmount from "@/utils/addAmount";

const style = css`
  .title {
    display: flex;
    justify-content: space-between;
    margin: 2px 0 34px;
  }
  h2 {
    width: 178px;
    font-weight: bold;
    font-size: 17.3px;
    line-height: 1.5;
    margin: 0;
    position: relative;
  }
  h2::before {
    content: "";
    width: 160px;
    height: 8px;
    background: rgba(143, 201, 255, 0.7);
    opacity: 0.4;
    position: absolute;
    top: 17px;
    left: -2px;
  }
  .amount {
    margin-bottom: 55px;
  }
  .saving_amount {
    margin-top: 28px;
  }

  input {
    width: 175px;
    border: none;
    border-bottom: 1px solid #e3e7ed;
    margin: 22px 4px 0 0;
    font-size: 14px;
    text-align: right;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: #b2b2b2;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
  span {
    font-size: 10px;
    color: red;
  }
  span.hidden {
    display: none;
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
  }
  button.next {
    color: #fff;
    background: #3178ff;
  }
`;

const AmountInput = (props) => {
  const [amount, setAmount] = useState({ goal_amount: "", saving_amount: "" });
  const { goal_amount, saving_amount } = amount;
  const { inputs, setInputs, state, setState } = props;
  const campareValue = Number(saving_amount.replaceAll(",", "")) < Number(goal_amount.replaceAll(",", ""));
  const resultButtonFocus = goal_amount.length > 0 && goal_amount.length < 16 && saving_amount.length > 0 && campareValue;
  console.log(saving_amount !== "" && !campareValue);
  const handleChange = useCallback(
    (e) => {
      let { value, name } = e.target;
      if (value == "0") return (value = " ");
      value = comma(value);
      setAmount({
        ...amount,
        [name]: value,
      });
    },
    [amount],
  );

  const handleClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    if (id.includes("goal")) {
      const value = addAmount(id, goal_amount);
      setAmount({
        ...amount,
        goal_amount: value,
      });
    } else {
      const value = addAmount(id, saving_amount);
      setAmount({
        ...amount,
        saving_amount: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id } = e.target;
    setState({
      ...state,
      [id]: true,
    });
    setInputs({
      ...inputs,
      goal_amount: goal_amount,
      saving_amount: saving_amount,
    });
  };

  return (
    <>
      <div className="title">
        <h2>목표 금액과 저축 금액을 알려주세요.</h2>
        <PiggyBank width="67px" height="52px" />
      </div>
      <div className="amount">
        <div className="goal_amount">
          <p>목표 금액은</p>
          <p className="goal_amount_input">
            <input name="goal_amount" type="text" maxLength={16} placeholder="예) 70,000,000" onChange={handleChange} value={goal_amount}></input>원 입니다
            <span className={goal_amount.length > 15 ? "" : "hidden"}>*입력범위를 초과했습니다.</span>
          </p>
          <PlusButton mode="goal" handleClick={handleClick} />
        </div>
        <div className="saving_amount">
          <p>저축 금액은</p>
          <p className="saving_amount_input">
            <input
              name="saving_amount"
              type="text"
              maxLength={goal_amount.length}
              placeholder="예) 500,000"
              onChange={handleChange}
              value={saving_amount}
            ></input>
            원 입니다
            <span className={saving_amount !== "" && !campareValue ? "" : "hidden"}>*저축금액은 목표금액을 같거나 클 수 없습니다</span>
          </p>
          <PlusButton mode="saving" handleClick={handleClick} />
        </div>
      </div>
      <button id="result" onClick={handleSubmit} className={resultButtonFocus && "next"} disabled={!resultButtonFocus && "disabled"}>
        결과보기
      </button>
      <style jsx>{style}</style>
    </> //
  );
};

export default AmountInput;
