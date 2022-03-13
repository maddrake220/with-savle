function periodCalc(value, goal, saving) {
  const numberGoalValue = Number(goal.replaceAll(",", ""));
  const numberSavingValue = Number(saving.replaceAll(",", ""));
  const count = Math.ceil(numberGoalValue / numberSavingValue);

  const data = { year: 0, month: 0, count: count };

  switch (value) {
    case "month": {
      return month(data);
    }
    case "week": {
      return week(data);
    }
    case "day": {
      return day(data);
    }
    // No default
  }
}

export default periodCalc;

function month(data) {
  while (data.count > 12) {
    data.count = data.count - 12;
    data.year++;
  }
  return data.count === 0
    ? `${data.year}년`
    : `${data.year}년 ${data.count}개월`;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
function week(data) {
  if (data.count >= 52) {
    while (data.count >= 52) {
      data.count = data.count - 52;
      data.year++;
    }
    if (data.count === 0) `${data.year}년`;
    else if (data.count < 4) `${data.year}년 ${data.count}주`;
    else {
      while (data.count >= 4) {
        data.count = data.count - 4;
        data.month++;
      }
      return data.count === 0
        ? `${data.year}년 ${data.month}개월`
        : `${data.year}년 ${data.month}개월 ${data.count}주`;
    }
  } else if (data.count >= 4) {
    while (data.count >= 4) {
      data.count = data.count - 4;
      data.month++;
    }
    return data.count === 0
      ? `${data.month}개월`
      : `${data.month}개월 ${data.count}주`;
  } else {
    return `${data.count}주`;
  }
}

// eslint-disable-next-line sonarjs/cognitive-complexity
function day(data) {
  if (data.count >= 365) {
    while (data.count >= 365) {
      data.count = data.count - 365;
      data.year++;
    }
    if (data.count === 0) `${data.year}년`;
    else if (data.count < 30) `${data.year}년 ${data.count}일`;
    else {
      while (data.count >= 30) {
        data.count = data.count - 30;
        data.month++;
      }
      return data.count === 0
        ? `${data.year}년 ${data.month}개월`
        : `${data.year}년 ${data.month}개월 ${data.count}일`;
    }
  } else if (data.count <= 365 && data.count > 30) {
    while (data.count >= 30) {
      data.count = data.count - 30;
      data.month++;
    }
    return data.count === 0
      ? `${data.month}개월`
      : `${data.month}개월 ${data.count}일`;
  } else {
    return `${data.count}일`;
  }
}
