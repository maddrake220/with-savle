import PiggyBank from "public/layout/piggy-bank.svg";
import PlusButton from "./PlusButton";
import css from "styled-jsx/css";

const style = css`
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    height: 63px;
  }
  h2 {
    width: 143px;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    position: relative;
  }
  h2::before {
    content: "";
    width: 127px;
    height: 8px;
    background: rgba(143, 201, 255, 0.7);
    opacity: 0.4;
    position: absolute;
    top: 17px;
    left: -2px;
  }
  .amount {
    margin-bottom: 53px;
  }
  .saving_amount_input {
    margin-top: 18px;
  }
  input {
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
`;

const AmountInput = ({ amount, handleChange, handleClick }) => {
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
            <input name="goal_amount" type="text" maxLength={16} placeholder="예) 70,000,000" onChange={handleChange} value={amount}></input>원 입니다
            <span className={amount.length > 15 ? "" : "hidden"}>*입력범위를 초과했습니다.</span>
          </p>
          <PlusButton handleClick={handleClick} />
        </div>
        <div className="saving_amount">
          <p>저축 금액은</p>
          <p className="saving_amount_input">
            <input name="saving_amount" type="text" maxLength={16} placeholder="예) 70,000,000" onChange={handleChange} value={amount}></input>원 입니다
            <span className={amount.length > 15 ? "" : "hidden"}>*입력범위를 초과했습니다.</span>
          </p>
          <PlusButton handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default AmountInput;
