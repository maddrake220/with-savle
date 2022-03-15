import React from "react";

import styles from "@/styles/goal/NewGoalForm.module.scss";
export default function NewGoalSelectedCategoryList({
  selectedReference,
  selectedGoalCategories,
  onMouseDownUndoGoalCategory,
}) {
  return (
    <ul className={styles.selectedGoalCategories} ref={selectedReference}>
      {selectedGoalCategories?.map((seletedGoalCategory, index) => (
        <li
          onMouseDown={(event) =>
            onMouseDownUndoGoalCategory(event, seletedGoalCategory)
          }
          key={index}
        >
          {seletedGoalCategory.keyword}
        </li>
      ))}
    </ul>
  );
}
