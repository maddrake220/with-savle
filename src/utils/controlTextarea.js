export const controlTextarea = (textReference, value) => {
  if (value === "change") {
    textReference.current.style.height = "20px";
    textReference.current.style.height =
      textReference.current.scrollHeight + "px";
  }
  if (value === "reset") {
    textReference.current.blur();
    textReference.current.style.height = "20px";
  }
};
