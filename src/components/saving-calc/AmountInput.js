import PiggyBank from "public/layout/piggy-bank.svg";
import PlusButton from "./PlusButton";
import css from "styled-jsx/css";
import { useCallback, useState } from "react";
import comma from "@/utils/comma";
import addAmount from "@/utils/addAmount";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const style = css`
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
  }
  h2 {
    width: 178px;
  }
  h2::before {
    width: 160px;
  }
  .amount {
    margin-bottom: 59px;
  }
  .goal_amount {
    margin-bottom: 29px;
    position: relative;
  }
  .saving_amount {
    position: relative;
  }
  input {
    width: 175px;
  }
  span {
    position: absolute;
    top: 20px;
    left: 0;
  }
  @media (min-width: 576px) {
    .title {
      margin-bottom: 16px;
    }
    h2 {
      width: 192px;
    }
    h2::before {
      width: 192px;
    }
    .amount {
      margin-bottom: 28px;
    }
    .goal_amount {
      margin-bottom: 15px;
    }
    input {
      width: 248px;
      margin: 18px 10px 2px 0;
    }
    span {
      top: 23px;
    }
  }
  @media (min-width: 1200px) {
    .title {
      margin-bottom: 45px;
    }
    h2 {
      width: 365px;
    }
    h2::before {
      width: 365px;
    }
    .amount {
      margin-bottom: 58px;
    }
    .goal_amount {
      margin-bottom: 20px;
    }
    input {
      width: 488px;
      margin: 35px 15px 5px 0;
    }
    span {
      top: 50px;
    }
  }
`;

const AmountInput = (props) => {
  const [amount, setAmount] = useState({ goal_amount: "", saving_amount: "" });
  const { sm: isMobile, md: isTablet } = useBreakpoint();
  const { goal_amount, saving_amount } = amount;
  const { inputs, setInputs, state, setState } = props;
  const campareValue = Number(saving_amount.replaceAll(",", "")) < Number(goal_amount.replaceAll(",", ""));
  const resultButtonFocus = goal_amount.length > 0 && goal_amount.length < 16 && saving_amount.length > 0 && campareValue;

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
        <PiggyBank width={isMobile ? "67px" : isTablet ? "80px" : "146px"} />
      </div>
      <div className="amount">
        <div className="goal_amount">
          <p>목표 금액은</p>
          <span className={goal_amount.length > 15 ? "" : "hidden"}>*입력범위를 초과했습니다.</span>
          <p className="goal_amount_input">
            <input name="goal_amount" type="text" maxLength={16} placeholder="예) 70,000,000" onChange={handleChange} value={goal_amount}></input>원 입니다
          </p>
          <PlusButton mode="goal" handleClick={handleClick} />
        </div>
        <div className="saving_amount">
          <p>저축 금액은</p>
          <span className={saving_amount !== "" && !campareValue ? "" : "hidden"}>*저축금액은 목표금액을 같거나 클 수 없습니다</span>
          <p className="saving_amount_input">
            <input
              name="saving_amount"
              type="text"
              maxLength={goal_amount.length + 1}
              placeholder="예) 500,000"
              onChange={handleChange}
              value={saving_amount}
            ></input>
            원 입니다
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
