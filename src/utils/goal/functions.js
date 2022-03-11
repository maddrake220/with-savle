export function checkRangeAge(category) {
  let start;
  let end;
  switch (category) {
    case 1:
      start = 10;
      end = 19;
      break;
    case 2:
      start = 20;
      end = 29;
      break;
    case 3:
      start = 30;
      end = 39;
      break;
    case 4:
      start = 40;
      end = 1000;
      break;
    default:
      start = 0;
      end = 1000;
      break;
  }
  return { start, end };
}

export const getAgeGeneration = (age) => {
  return age >= 10 && age < 20 ? "10대" : age >= 20 && age < 30 ? "20대" : age >= 30 && age < 40 ? "30대" : age >= 40 ? "40대 이상" : "어린이";
};
