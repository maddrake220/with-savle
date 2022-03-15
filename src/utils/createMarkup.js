export function createMarkup(text) {
  return { __html: text?.replace(/\n/g, "<br />") };
}
