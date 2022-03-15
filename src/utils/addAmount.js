import { comma } from "./comma";
import { removeComma } from "./removeComma";

export const addAmount = (id, amount) => {
  const value = amount === "" ? 0 : removeComma(amount);

  if (id.includes("plus1/")) return comma(value + 10_000);
  if (id.includes("plus5")) return comma(value + 50_000);
  return comma(value + 100_000);
};
