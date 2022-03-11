const periodCalc = (value, goal, saving) => {
  let numberGoalValue = Number(goal.replaceAll(",", ""));
  let numberSavingValue = Number(saving.replaceAll(",", ""));
  let count = Math.ceil(numberGoalValue / numberSavingValue);

  let year = 0;
  let month = 0;

  switch (value) {
    case "month": {
      while (count > 12) {
        count = count - 12;
        year++;
      }
      return count === 0 ? `${year}년` : `${year}년 ${count}개월`;
    }
    case "week": {
      if (count >= 52) {
        while (count >= 52) {
          count = count - 52;
          year++;
        }
        if (count === 0) {
          return `${year}년`;
        } else if (count < 4) {
          return `${year}년 ${count}주`;
        } else {
          while (count >= 4) {
            count = count - 4;
            month++;
          }
          if (count === 0) {
            return `${year}년 ${month}개월`;
          }
          return `${year}년 ${month}개월 ${count}주`;
        }
      } else if (count >= 4) {
        while (count >= 4) {
          count = count - 4;
          month++;
        }
        return count === 0 ? `${month}개월` : `${month}개월 ${count}주`;
      } else {
        return `${count}주`;
      }
    }
    case "day": {
      if (count >= 365) {
        while (count >= 365) {
          count = count - 365;
          year++;
        }
        if (count === 0) {
          return `${year}년`;
        } else if (count < 30) {
          return `${year}년 ${count}일`;
        } else {
          while (count >= 30) {
            count = count - 30;
            month++;
          }
          if (count === 0) {
            return `${year}년 ${month}개월`;
          }
          return `${year}년 ${month}개월 ${count}일`;
        }
      } else if (count <= 365 && count > 30) {
        while (count >= 30) {
          count = count - 30;
          month++;
        }
        return count === 0 ? `${month}개월` : `${month}개월 ${count}일`;
      } else {
        return `${count}일`;
      }
    }
    // No default
  }
};

export default periodCalc;
