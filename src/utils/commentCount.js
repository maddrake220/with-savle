export const commentCount = (comment) => {
  const blank = /(^\s*)|(\s*$)/gi;
  return comment.replace(blank, "").length;
};
