const periodCalc = (value, goal, saving) => {
  let numberGoalValue = Number(goal.replaceAll(",", ""));
  let numberSavingValue = Number(saving.replaceAll(",", ""));
  let count = numberGoalValue / numberSavingValue;
  let date = 0;
  if (value === "month") {
    while (count > 12) {
      count = count - 12;
      date++;
    }
    if (count === 12) {
      date++;
      count = 0;
    }
    return `${date}년 ${Math.ceil(count)}개월`;
  } else if (value === "week") {
    while (count > 4) {
      count = count - 4;
      date++;
    }
    if (count === 4) {
      date++;
      count = 0;
    }
    return `${date}개월 ${Math.ceil(count)}주`;
  } else if (value === "day") {
    return `${Math.ceil(count)}일`;
  }
};

export default periodCalc;
