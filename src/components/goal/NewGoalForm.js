import Image from "next/image";
import React, { useRef } from "react";
import styles from "styles/goal/NewGoalForm.module.scss";

import { useForm } from "@/hooks/index";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { newGoalAgeList } from "@/utils/goal/data";

import NewGoalCategoryButton from "./NewGoalCategoryButton";

export default function NewGoalForm({ toggleModal }) {
  const matchQuery = useBreakpoint();

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
  );

  return (
    <section
      style={{ paddingBottom: `${validationCheck.text ? "1rem" : "0rem"}` }}
      className={styles.newGoal}
      onClick={(event) => event.stopPropagation()}
    >
      <h1>목표 작성하기</h1>
      <div className={styles.modalTop}>
        <div
          className={styles.newGoalChar}
          style={{ display: matchQuery.sm ? "none" : "block" }}
        >
          <Image
            width={101}
            height={51}
            src="/img/newgoalchar.svg"
            alt="newgoal"
          />
        </div>
      </div>
      <form className={styles.newGoalForm} onSubmit={onSubmit}>
        <div className={styles.ageListWrapper}>
          <label>
            <span>연령대</span>
          </label>
          <ul className={styles.ageList}>
            {newGoalAgeList?.map((age) => (
              <NewGoalCategoryButton
                key={age.id}
                id={age.id}
                onClick={onClickselectedAge}
                clicked={selectedAge}
                text={age.text}
                value={age.value}
              />
            ))}
          </ul>
        </div>
        <div style={{ width: "100%" }}>
          {validationCheck.age && (
            <div className={styles.validationFail}>연령대를 선택 해주세요!</div>
          )}
        </div>
        <div className={styles.textareaWrapper}>
          <textarea
            ref={textareaReference}
            className={styles.text}
            type="text"
            placeholder="내용을 입력해주세요!"
            onChange={onChangeText}
            value={text}
          />
        </div>
        <div style={{ width: "100%" }}>
          {validationCheck.text && (
            <div className={styles.validationFail}>내용을 입력해주세요!</div>
          )}
        </div>
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
            <ul
              className={styles.selectedGoalCategories}
              ref={selectedReference}
            >
              {seletedGoalCategories?.map((seletedGoalCategory, index) => (
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
            <ul
              className={
                isFocusedCategoryInput
                  ? styles.goalCategoryList
                  : styles.displayNone
              }
            >
              {searchCategory !== "" &&
                !categoryByAge?.some(
                  (value) => value.keyword === searchCategory,
                ) && (
                  <li
                    className={styles.searchingCategory}
                    onMouseDown={(event) =>
                      onMouseDownGoalCategory(event, searchCategory)
                    }
                  >
                    <span>{searchCategory}</span>
                  </li>
                )}
              {searchCategory === ""
                ? categoryByAge
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 3)
                    .map((goalCategory, index) => (
                      <li
                        onMouseDown={(event) =>
                          onMouseDownGoalCategory(event, goalCategory)
                        }
                        key={index}
                      >
                        <span>{goalCategory.keyword}</span>
                      </li>
                    ))
                : searchingCategoryByAge
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 3)
                    // eslint-disable-next-line sonarjs/no-identical-functions
                    .map((goalCategory, index) => (
                      <li
                        onMouseDown={(event) =>
                          onMouseDownGoalCategory(event, goalCategory)
                        }
                        key={index}
                      >
                        <span>{goalCategory.keyword}</span>
                      </li>
                    ))}
            </ul>
          </div>
          <button type="submit" className={styles.submitButton}>
            <Image
              src="/img/newGoalSubmit.svg"
              alt="submit"
              width={matchQuery.sm ? 17 : 28}
              height={matchQuery.sm ? 17 : 28}
            />
          </button>
          {validationCheck.category && (
            <div className={styles.validationFail}>
              목표 카테고리를 선택해주세요!
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
