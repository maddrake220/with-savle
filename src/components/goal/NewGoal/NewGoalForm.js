import Image from "next/image";
import React, { useRef } from "react";

import { useForm } from "@/hooks/index";
import styles from "@/styles/goal/NewGoalForm.module.scss";
import { newGoalAgeList } from "@/utils/index";

import NewGoalAgeSection from "./NewGoalAgeSection";
import NewGoalCategorySection from "./NewGoalCategorySection";
import NewGoalTextSection from "./NewGoalTextSection";
export default function NewGoalForm({
  toggleModal,
  matchQuery,
  isToggleModal,
}) {
  const textareaReference = useRef(null);
  const inputReference = useRef(null);
  const selectedReference = useRef(null);

  const [
    selectedAge,
    isFocusedCategoryInput,
    seletedGoalCategories,
    categoryByAge,
    searchingCategoryByAge,
    searchCategory,
    validationCheck,
    text,
    onSubmit,
    onClickselectedAge,
    onClickInputBox,
    onFocus,
    onBlur,
    onMouseDownGoalCategory,
    onMouseDownUndoGoalCategory,
    onChangeSearchCategory,
    onChangeText,
    onKeyDownCategoryInput,
  ] = useForm(
    toggleModal,
    textareaReference,
    selectedReference,
    inputReference,
    isToggleModal,
  );
  return (
    <form className={styles.newGoalForm} onSubmit={onSubmit}>
      <NewGoalAgeSection
        newGoalAgeList={newGoalAgeList}
        onClickselectedAge={onClickselectedAge}
        selectedAge={selectedAge}
        validationCheck={validationCheck?.age}
      />
      <NewGoalTextSection
        textareaReference={textareaReference}
        onChangeText={onChangeText}
        text={text}
        validationCheck={validationCheck?.text}
      />
      <NewGoalCategorySection
        isFocusedCategoryInput={isFocusedCategoryInput}
        seletedGoalCategories={seletedGoalCategories}
        categoryByAge={categoryByAge}
        searchingCategoryByAge={searchingCategoryByAge}
        searchCategory={searchCategory}
        onClickInputBox={onClickInputBox}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseDownGoalCategory={onMouseDownGoalCategory}
        onMouseDownUndoGoalCategory={onMouseDownUndoGoalCategory}
        onChangeSearchCategory={onChangeSearchCategory}
        onKeyDownCategoryInput={onKeyDownCategoryInput}
        inputReference={inputReference}
        selectedReference={selectedReference}
        validationCheck={validationCheck?.category}
      />
      <div className={styles.submitButtonWrapper}>
        <button
          type="submit"
          className={styles.submitButton}
          style={{
            bottom:
              (validationCheck?.text && "1.435rem") ||
              (validationCheck?.age && "1.435rem") ||
              (validationCheck?.category && "2.755rem"),
          }}
        >
          <Image
            src="/img/newGoalSubmit.svg"
            alt="submit"
            width={matchQuery?.sm ? 17 : 28}
            height={matchQuery?.sm ? 17 : 28}
          />
        </button>
      </div>
    </form>
  );
}
