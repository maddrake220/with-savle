import { useCallback, useState } from "react";

import { addAmount, comma } from "@/utils/index";

export const useAmountInput = (data, saving_amount_reference) => {
  const [amount, setAmount] = useState({ goal_amount: "", saving_amount: "" });
  const { goal_amount, saving_amount } = amount;
  const [inputs, setInputs, state, setState] = data;

  const campareValue =
    Number(saving_amount.replaceAll(",", "")) <
    Number(goal_amount.replaceAll(",", ""));

  const resultButtonFocus =
    goal_amount.length > 0 &&
    goal_amount.length < 16 &&
    saving_amount.length > 0 &&
    campareValue;

  const handleChange = useCallback(
    (event) => {
      let { value, name } = event.target;
      if (value == "0") return (value = " ");
      value = comma(value);
      setAmount({
        ...amount,
        [name]: value,
      });
    },
    [amount],
  );

  const handleClick = (event) => {
    event.preventDefault();
    const { id } = event.target;
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

  const handelKeypress = (event) => {
    if (event.key === "Enter") {
      if (saving_amount.length === 0)
        return saving_amount_reference.current.focus();
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { id } = event.target;
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

  return [
    amount,
    campareValue,
    resultButtonFocus,
    handleChange,
    handleClick,
    handelKeypress,
    handleSubmit,
  ];
};
