import styles from "@/styles/saving-calc/SavingClacCommon.module.scss";

import PlusButton from "./PlusButton";

function SavingAmountGoalInput({
  amount,
  setAmount,
  handleChange,
  handelKeypress,
}) {
  const { goal_amount } = amount;
  return (
    <div className={styles.goal_amount}>
      <p>목표 금액은</p>
      <span className={goal_amount.length <= 15 ? styles.hidden : ""}>
        *입력범위를 초과했습니다.
      </span>
      <p className={styles.goal_amount_input}>
        <input
          id="goal_amount"
          className={styles.input}
          name="goal_amount"
          type="text"
          value={goal_amount}
          maxLength={16}
          placeholder="예) 70,000,000"
          onChange={handleChange}
          onKeyDown={handelKeypress}
        ></input>
        원 입니다
      </p>
      <PlusButton mode="goal" amount={amount} setAmount={setAmount} />
    </div>
  );
}

export default SavingAmountGoalInput;
