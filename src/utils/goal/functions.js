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
  if (age >= 10 && age < 20) return "10대";
  if (age >= 20 && age < 30) return "20대";
  if (age >= 30 && age < 40) return "30대";
  if (age >= 40) return "40대 이상";
  return "어린이";
};

export const getSize = (queryMatch, isWidth) => {
  if (queryMatch.sm) {
    if (isWidth) return 71;
    return 70;
  } else if (queryMatch.md) {
    if (isWidth) return 141;
    return 138;
  } else {
    if (isWidth) return 185;
    return 181;
  }
};
