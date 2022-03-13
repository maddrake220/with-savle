export const sumCount = (countArray) =>
  countArray
    .map((item) => item.count)
    .reduce((sum, currentValue) => sum + currentValue, 0);
