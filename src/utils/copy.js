export const copy = () => {
  const element = document.createElement("input");
  element.value = window.location.href;
  document.body.append(element);
  element.select();
  document.execCommand("copy");
  element.remove();
};
