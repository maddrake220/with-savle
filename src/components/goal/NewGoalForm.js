import Image from "next/image";
import React, { useRef } from "react";
import styles from "styles/goal/new-goal-form.module.scss";

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
  ] = useForm(
    toggleModal,
    textareaReference,
    selectedReference,
    inputReference,
  );

  return (
    <section
      className={styles.newGoal}
      onClick={(event) => event.stopPropagation()}
    >
      <h1>목표 작성하기</h1>
      <div className={styles.modalTop}>
        {matchQuery.sm ? (
          <svg
            onClick={toggleModal}
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.25 4.75L4.75 14.25"
              stroke="#CCD2E3"
              strokeWidth="1.09524"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.75 4.75L14.25 14.25"
              stroke="#CCD2E3"
              strokeWidth="1.09524"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <div
            style={{ marginTop: "7px", position: "absolute", right: "11px" }}
          >
            <Image
              width="101px"
              height="51px"
              src="/img/newgoalchar.svg"
              alt=""
            />
          </div>
        )}
      </div>
      <main>
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
            <div>
              {validationCheck.age && (
                <div className={styles.validationFail}>
                  연령대를 선택 해주세요!
                </div>
              )}
            </div>
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
                {searchCategory === ""
                  ? categoryByAge
                      .sort((a, b) => b.count - a.count)
                      .map((goalCategory, index) => (
                        <li
                          onMouseDown={(event) =>
                            onMouseDownGoalCategory(event, goalCategory)
                          }
                          key={index}
                        >
                          {goalCategory.keyword}
                        </li>
                      ))
                  : searchingCategoryByAge.map((goalCategory, index) => (
                      <li
                        onMouseDown={(event) =>
                          onMouseDownGoalCategory(event, goalCategory)
                        }
                        key={index}
                      >
                        {goalCategory.keyword}
                      </li>
                    ))}
              </ul>
              <button type="submit" className={styles.submitButton}>
                <svg
                  width={matchQuery.sm ? "17" : "28"}
                  height={matchQuery.sm ? "17" : "28"}
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9617 0.728633C17.0004 0.632095 17.0098 0.526338 16.9889 0.424475C16.968 0.322611 16.9177 0.22912 16.8442 0.155592C16.7706 0.0820638 16.6771 0.0317319 16.5753 0.0108363C16.4734 -0.0100594 16.3677 -0.000599851 16.2711 0.0380421L0.815694 6.22042H0.814631L0.334405 6.41166C0.243449 6.44794 0.164292 6.50866 0.105677 6.58711C0.0470617 6.66555 0.0112702 6.75867 0.00225581 6.85618C-0.00675857 6.95369 0.011355 7.05179 0.0545957 7.13965C0.0978364 7.22751 0.164521 7.30171 0.247284 7.35405L0.682888 7.63029L0.68395 7.63242L5.99088 11.0089L7.68017 13.6629C8.50038 14.8741 8.50038 13.8116 8.50038 13.2804C8.50025 12.6053 8.64309 11.9378 8.91951 11.3219C9.19592 10.706 9.59964 10.1556 10.1041 9.70697C10.6085 9.25833 11.2023 8.9216 11.8462 8.71896C12.4902 8.51631 13.1698 8.45234 13.8402 8.53125L16.9617 0.728633ZM15.0142 2.73666L7.05226 10.6986L6.82383 10.3395C6.78198 10.2736 6.72612 10.2178 6.66022 10.1759L6.30111 9.94749L14.2631 1.98551L15.5147 1.4851L15.0153 2.73666H15.0142Z"
                    fill="#3178FF"
                  />
                  <path
                    d="M16.9999 13.2803C16.9999 14.2666 16.6081 15.2124 15.9108 15.9098C15.2134 16.6071 14.2676 16.9989 13.2813 16.9989C12.2951 16.9989 11.3493 16.6071 10.6519 15.9098C9.95456 15.2124 9.56278 14.2666 9.56278 13.2803C9.56278 12.2941 9.95456 11.3483 10.6519 10.6509C11.3493 9.95354 12.2951 9.56177 13.2813 9.56177C14.2676 9.56177 15.2134 9.95354 15.9108 10.6509C16.6081 11.3483 16.9999 12.2941 16.9999 13.2803ZM14.8825 11.4965C14.8226 11.4606 14.7563 11.4369 14.6873 11.4267C14.6182 11.4164 14.5479 11.4199 14.4802 11.4369C14.4125 11.4538 14.3488 11.484 14.2928 11.5256C14.2368 11.5671 14.1895 11.6194 14.1536 11.6792L12.9106 13.751L12.3294 13.1698C12.2296 13.0701 12.0944 13.0141 11.9533 13.0141C11.8122 13.0141 11.6769 13.0701 11.5772 13.1698C11.4774 13.2696 11.4214 13.4049 11.4214 13.5459C11.4214 13.687 11.4774 13.8223 11.5772 13.9221L12.3995 14.7433C12.4851 14.8291 12.5891 14.8942 12.7037 14.9337C12.8182 14.9732 12.9403 14.9861 13.0605 14.9713C13.1808 14.9566 13.2961 14.9146 13.3977 14.8486C13.4993 14.7826 13.5845 14.6942 13.6468 14.5903L15.0652 12.2253C15.1011 12.1655 15.1248 12.0991 15.135 12.0301C15.1453 11.9611 15.1418 11.8907 15.1248 11.823C15.1078 11.7554 15.0777 11.6917 15.0361 11.6357C14.9945 11.5796 14.9423 11.5323 14.8825 11.4965Z"
                    fill="#3178FF"
                  />
                </svg>
              </button>
            </div>
            {validationCheck.category && (
              <div className={styles.validationFail}>
                목표 카테고리를 선택해주세요!
              </div>
            )}
          </div>
        </form>
      </main>
    </section>
  );
}
