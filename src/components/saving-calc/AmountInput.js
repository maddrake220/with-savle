import PiggyBank from "public/layout/piggy-bank.svg";
import { useRef } from "react";

import { useAmountInput } from "@/hooks/useAmountInput";
import { useWidth } from "@/hooks/useWidth";

import styles from "../../../styles/saving-calc/SavingClacCommon.module.scss";
import PlusButton from "./PlusButton";

const AmountInput = ({ data }) => {
  const saving_amount_reference = useRef();

  const [
    amount,
    campareValue,
    resultButtonFocus,
    handleChange,
    handleClick,
    handelKeypress,
    handleSubmit,
  ] = useAmountInput(data, saving_amount_reference);

  const { goal_amount, saving_amount } = amount;

  return (
    <>
      <div className={`${styles.title} ${styles.amount}`}>
        <h2>목표 금액과 저축 금액을 알려주세요.</h2>
        <PiggyBank width={useWidth(67, 80, 146, "px")} />
      </div>
      <div className={styles.amount}>
        <div className={styles.goal_amount}>
          <p>목표 금액은</p>
          <span className={goal_amount.length <= 15 && styles.hidden}>
            *입력범위를 초과했습니다.
          </span>
          <p className={styles.goal_amount_input}>
            <input
              id="goal"
              className={styles.input}
              name="goal_amount"
              type="text"
              value={goal_amount}
              maxLength={16}
              placeholder="예) 70,000,000"
              onChange={handleChange}
              onKeyDown={handelKeypress}
              autoFocus
            ></input>
            원 입니다
          </p>
          <PlusButton mode="goal" handleClick={handleClick} />
        </div>
        <div className={styles.saving_amount}>
          <p>저축 금액은</p>
          <span
            className={(saving_amount == "" || campareValue) && styles.hidden}
          >
            *저축금액은 목표금액을 같거나 클 수 없습니다
          </span>
          <p className={styles.saving_amount_input}>
            <input
              id="result"
              className={styles.input}
              name="saving_amount"
              type="text"
              value={saving_amount}
              maxLength={goal_amount.length + 1}
              placeholder="예) 500,000"
              onChange={handleChange}
              onKeyDown={handelKeypress}
              ref={saving_amount_reference}
            ></input>
            원 입니다
          </p>
          <PlusButton mode="saving" handleClick={handleClick} />
        </div>
      </div>
      <button
        id="result"
        onClick={handleSubmit}
        className={`${styles.button} ${resultButtonFocus && styles.next}`}
        disabled={!resultButtonFocus && "disabled"}
      >
        결과보기
      </button>
    </>
  );
};

export default AmountInput;
