import React from "react";

const Calc = (value, goal, saving) => {
  let numberGoalValue = Number(goal.replaceAll(",", ""));
  let numberSavingValue = Number(saving.replaceAll(",", ""));
  let count = Math.ceil(numberGoalValue / numberSavingValue);

  let year = 0;
  let month = 0;

  if (value === "month") {
    if (count >= 12) {
      year = count / 12;
      if (count % 12 === 0) {
        return `${year}년`;
      } else {
        count = count - 12 * year;
        return `${year}년 ${count}개월`;
      }
    }
    return `${count}개월`;
  } else if (value === "week") {
    if (count >= 52) {
      year = count / 52;
      if (count % 52 === 0) {
        return `${year}년`;
      } else {
        count = count - 52 * year;
        if (count >= 4) {
          month = count / 4;
          if (count % 4 === 0) {
            return `${month}개월`;
          } else {
            count = count - 4 * month;
            return `${month}개월 ${count}주`;
          }
        }
        return `${year}년``${count}개월`;
      }
    } else if (count >= 4) {
      month = count / 4;
      if (count % 4 === 0) {
        return `${month}개월`;
      } else {
        count = count - 4 * month;
        return `${month}개월 ${count}주`;
      }
    } else {
      return `${count}주`;
    }
  } else if (value === "day") {
    if (count >= 365) {
      year = count / 365;
      if (count % 365 === 0) {
        return `${year}년`;
      } else {
        count = count - 365 * year;
        if (count >= 30) {
          month = count / 30;
          if (count % 30 === 0) {
            return `${year}년 ${month}개월`;
          } else {
            count = count - 30 * month;
            return `${year}년 ${month}개월 ${count}일`;
          }
        }
      }
    } else if (count >= 30) {
      month = count / 30;
      if (count % 30 === 0) {
        return `${month}개월`;
      } else {
        count = count - 30 * month;
        return `${month}개월 ${count}일`;
      }
    } else {
      return `${count}일`;
    }
  }
};

export default Calc;
