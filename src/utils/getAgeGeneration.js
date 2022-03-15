export const getAgeGeneration = (age) => {
  if (age >= 10 && age < 20) return "10대";
  if (age >= 20 && age < 30) return "20대";
  if (age >= 30 && age < 40) return "30대";
  if (age >= 40) return "40대 이상";
  return "어린이";
};
