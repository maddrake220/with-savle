import { useCallback, useState } from "react";

import { comma, removeComma } from "@/utils/index";

export const useAmountInput = () => {
  const [amount, setAmount] = useState({ goal_amount: "", saving_amount: "" });
  const { goal_amount, saving_amount } = amount;

  const campareValue = removeComma(saving_amount) < removeComma(goal_amount);

  const resultButtonFocus =
    goal_amount.length > 0 &&
    goal_amount.length < 16 &&
    saving_amount.length > 0 &&
    campareValue;

  const handleChange = useCallback(
    (event) => {
      const { value, id } = event.target;
      if (value == "0") return;
      const commaValue = comma(value);
      setAmount({
        ...amount,
        [id]: commaValue,
      });
    },
    [amount],
  );

  return { amount, setAmount, campareValue, resultButtonFocus, handleChange };
};
