import React from "react";
import styles from "styles/goal/NewGoalForm.module.scss";

import NewGoalCategory from "./NewGoalCategory";

export default function NewGoalCategoryList({
  isFocusedCategoryInput,
  searchCategory,
  categoryByAge,
  searchingCategoryByAge,
  onMouseDownGoalCategory,
}) {
  return (
    <ul
      className={
        isFocusedCategoryInput ? styles.goalCategoryList : styles.displayNone
      }
    >
      {searchCategory !== "" &&
        !categoryByAge?.some((value) => value.keyword === searchCategory) && (
          <li
            className={styles.searchingCategory}
            onMouseDown={(event) =>
              onMouseDownGoalCategory(event, searchCategory)
            }
          >
            <span>{searchCategory}</span>
          </li>
        )}
      {searchCategory === "" ? (
        <NewGoalCategory
          category={categoryByAge}
          onMouseDownGoalCategory={onMouseDownGoalCategory}
        />
      ) : (
        <NewGoalCategory
          category={searchingCategoryByAge}
          onMouseDownGoalCategory={onMouseDownGoalCategory}
        />
      )}
    </ul>
  );
}
