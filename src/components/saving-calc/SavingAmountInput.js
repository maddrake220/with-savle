import styles from "@/styles/saving-calc/SavingAmount.module.scss";

import PlusButton from "./PlusButton";

function SavingAmountInput({
  amount,
  campareValue,
  setAmount,
  handleChange,
  handelKeypress,
  saving_amount_reference,
}) {
  const { saving_amount, goal_amount } = amount;

  return (
    <div className={styles.saving_amount}>
      <p>저축 금액은</p>
      <span
        className={saving_amount == "" || campareValue ? styles.hidden : ""}
      >
        *저축금액은 목표금액을 같거나 클 수 없습니다
      </span>
      <p className={styles.saving_amount_input}>
        <input
          id="saving_amount"
          name="result"
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
      <PlusButton mode="saving" amount={amount} setAmount={setAmount} />
    </div>
  );
}

export default SavingAmountInput;
