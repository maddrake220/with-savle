import PiggyBank from "public/layout/piggy-bank.svg";
import { useRef } from "react";

import { useAmountInput, useSavingAmountSubmit, useWidth } from "@/hooks/index";
import styles from "@/styles/saving-calc/SavingClacCommon.module.scss";

import Button from "./Button";
import SavingAmountGoalInput from "./SavingAmountGoalInput";
import SavingAmountinput from "./SavingAmountinput";

function SavingAmount({ data }) {
  const saving_amount_reference = useRef();
  const { amount, setAmount, campareValue, resultButtonFocus, handleChange } =
    useAmountInput();
  const handleSubmit = useSavingAmountSubmit(data, amount);
  const { goal_amount, saving_amount } = amount;

  const handelKeypress = (event) => {
    if (event.key === "Enter") {
      if (goal_amount.length === 0) return;
      if (saving_amount.length === 0)
        return saving_amount_reference.current.focus();
      if (resultButtonFocus) return handleSubmit(event);
    }
  };

  return (
    <>
      <div className={`${styles.title} ${styles.amount}`}>
        <h2>목표 금액과 저축 금액을 알려주세요.</h2>
        <PiggyBank width={useWidth(67, 80, 146, "px")} />
      </div>
      <div className={styles.amount}>
        <SavingAmountGoalInput
          amount={amount}
          setAmount={setAmount}
          handleChange={handleChange}
          handelKeypress={handelKeypress}
        />
        <SavingAmountinput
          amount={amount}
          setAmount={setAmount}
          handleChange={handleChange}
          campareValue={campareValue}
          handelKeypress={handelKeypress}
          saving_amount_reference={saving_amount_reference}
        />
      </div>
      <Button
        focus={resultButtonFocus}
        handleSubmit={handleSubmit}
        name="result"
      />
    </>
  );
}

export default SavingAmount;
