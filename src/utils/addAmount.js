import { comma } from "./comma";

export const addAmount = (id, amount) => {
  const value = amount === "" ? 0 : Number(amount.replaceAll(",", ""));

  if (id.includes("plus1/")) return comma(value + 10_000);
  if (id.includes("plus5")) return comma(value + 50_000);
  return comma(value + 100_000);
};
