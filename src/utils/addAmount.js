import comma from "./comma";

const addAmount = (id, amount) => {
  let value = 0;
  if (amount === "") {
    if (id.includes("plus1/")) {
      value = 10000;
    } else if (id.includes("plus5")) {
      value = 50000;
    } else {
      value = 100000;
    }
    value = comma(value);
  } else {
    let numberValue = Number(amount.replaceAll(",", ""));
    if (id.includes("plus1/")) {
      numberValue += 10000;
    } else if (id.includes("plus5")) {
      numberValue += 50000;
    } else {
      numberValue += 100000;
    }
    value = comma(numberValue);
  }

  return value;
};

export default addAmount;
