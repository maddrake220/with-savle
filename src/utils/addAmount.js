import comma from "./comma";

function addAmount(id, amount) {
  const numberValue = Number(amount.replaceAll(",", ""));
  const data = { value: 0, amount: numberValue };
  if (amount === "") {
    if (id.includes("plus1/")) {
      data.value = 10_000;
    } else if (id.includes("plus5")) {
      data.value = 50_000;
    } else {
      data.value = 100_000;
    }
    data.value = comma(data.value);
  } else {
    if (id.includes("plus1/")) {
      data.amount += 10_000;
    } else if (id.includes("plus5")) {
      data.amount += 50_000;
    } else {
      data.amount += 100_000;
    }
    data.value = comma(data.amount);
  }

  return data.value;
}

export default addAmount;
