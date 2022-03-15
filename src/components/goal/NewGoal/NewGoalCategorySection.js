import React from "react";
import styles from "@/styles/goal/NewGoalForm.module.scss";

import NewGoalCategoryList from "./NewGoalCategoryList";
import NewGoalSelectedCategoryList from "./NewGoalSelectedCategoryList";

export default function NewGoalCategorySection({
  isFocusedCategoryInput,
  seletedGoalCategories,
  categoryByAge,
  searchingCategoryByAge,
  searchCategory,
  onClickInputBox,
  onFocus,
  onBlur,
  onMouseDownGoalCategory,
  onMouseDownUndoGoalCategory,
  onChangeSearchCategory,
  onKeyDownCategoryInput,
  inputReference,
  selectedReference,
  validationCheck,
}) {
  return (
    <div className={styles.goalCategoryWrapper}>
      <label>
        <span>목표 카테고리</span>
      </label>
      <div className={styles.goalWrapper}>
        <div className={styles.inputBox} onClick={onClickInputBox}>
          <input
            onKeyDown={onKeyDownCategoryInput}
            ref={inputReference}
            onFocus={onFocus}
            onBlur={onBlur}
            className={styles.goalCategorySearchInput}
            value={searchCategory}
            onChange={onChangeSearchCategory}
          />
        </div>
        <NewGoalSelectedCategoryList
          selectedReference={selectedReference}
          selectedGoalCategories={seletedGoalCategories}
          onMouseDownUndoGoalCategory={onMouseDownUndoGoalCategory}
        />
        <NewGoalCategoryList
          isFocusedCategoryInput={isFocusedCategoryInput}
          searchCategory={searchCategory}
          categoryByAge={categoryByAge}
          searchingCategoryByAge={searchingCategoryByAge}
          onMouseDownGoalCategory={onMouseDownGoalCategory}
        />
      </div>
      {validationCheck && (
        <div className={styles.validationFail}>
          목표 카테고리를 선택해주세요!
        </div>
      )}
    </div>
  );
}
