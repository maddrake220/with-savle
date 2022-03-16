import { addAmount } from "@/utils/index";

export const usePlusButtonClick = (setAmount, amount) => {
  const { goal_amount, saving_amount } = amount;
  return (event) => {
    event.preventDefault();
    const { id } = event.target;
    if (id.includes("goal")) {
      const value = addAmount(id, goal_amount);
      setAmount({
        ...amount,
        goal_amount: value,
      });
    }
    if (id.includes("saving")) {
      const value = addAmount(id, saving_amount);
      setAmount({
        ...amount,
        saving_amount: value,
      });
    }
  };
};
