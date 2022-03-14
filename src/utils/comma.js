export const comma = (value) => {
  const string = /\D/g;
  const threeDigitNumber = /\B(?=(\d{3})+(?!\d))/g;

  return String(value).replace(string, "").replace(threeDigitNumber, ",");
};
