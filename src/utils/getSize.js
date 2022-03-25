export const getSize = (queryMatch, isWidth) => {
  if (queryMatch.sm) {
    if (isWidth) return 71;
    return 70;
  }
  if (queryMatch.md) {
    if (isWidth) return 141;
    return 138;
  }
  if (isWidth) return 185;
  return 181;
};
