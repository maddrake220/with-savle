export const keywordDuplicationCheck = (array, keyword) =>
  array.some((value) => value.keyword === keyword);
