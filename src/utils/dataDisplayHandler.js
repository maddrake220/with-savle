import { COMMENTEST, LIKEST, NEWEST, OLDEST } from "./constants";

const setDatabyScroll = (array, viewPerScroll) => array.slice(0, viewPerScroll);

const sortByDropdown = (array, selectedDropdown) =>
  array.sort((a, b) => {
    const d1 = Date.parse(a.createAt);
    const d2 = Date.parse(b.createAt);
    if (selectedDropdown === OLDEST) {
      return d1 - d2;
    }
    if (selectedDropdown === NEWEST) {
      return d2 - d1;
    }
    if (selectedDropdown === LIKEST) {
      return b.likes - a.likes;
    }
    if (selectedDropdown === COMMENTEST) {
      return b.comments.length - a.comments.length;
    }
  });

const filterByAge = (array, selectedAge) =>
  array.filter((value) => {
    return value.age >= selectedAge.start && value.age <= selectedAge.end;
  });

export const dataDisplayHandler = (
  array,
  selectedAge,
  selectedDropdown,
  viewPerScroll,
) =>
  setDatabyScroll(
    sortByDropdown(filterByAge(array, selectedAge), selectedDropdown),
    viewPerScroll,
  );
