import React, { useCallback, useEffect, useRef, useState } from "react";
import NewGoalCategoryButton from "./NewGoalCategoryButton";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Image from "next/image";
import { postNewGoal, getGoalCategoryByAge } from "@/utils/goal/api";
import { newGoalAgeList } from "@/utils/goal/data";
import { MAX_GOAL_CATEGORY } from "@/utils/goal/constants";

export default function NewGoalForm({ toggleModal }) {
  const matchQuery = useBreakpoint();
  const [selectedAge, setSelectedAge] = useState(null);
  const [isFocusedCategoryInput, setIsFocusedCategoryInput] = useState(false);
  const [seletedGoalCategories, setSelectedGoalCategories] = useState([]);
  const [categoryByAge, setCategoryByAge] = useState([]);
  const [searchingCategoryByAge, setSearchingCategoryByAge] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const textareaRef = useRef(null);
  const inputRef = useRef(null);
  const selectedRef = useRef(null);
  const sectionRef = useRef(null);
  const onSuccessNewGoal = useCallback(() => {
    toggleModal();
    setSearchCategory("");
    textareaRef.current.value = "";
    setSelectedGoalCategories([]);
    setSelectedAge(null);
  }, [setSelectedAge, setSelectedGoalCategories, toggleModal]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const text = textareaRef.current.value;
      if (selectedAge === null) {
        alert("test) 연령대를 선택해 주세요!");
        return;
      }
      if (text === "") {
        alert("test) 내용을 입력해 주세요!");
        return;
      }
      if (seletedGoalCategories.length === 0) {
        alert("test) 목표 카테고리를 골라주세요!");
        return;
      }
      const categories = seletedGoalCategories.map((v) => v.keyword);
      const age = selectedAge.value;
      const data = {
        categories,
        age,
        text,
        likes: 0,
      };
      postNewGoal(data)
        .then((resolve) => {
          if (resolve.status === 200) {
            onSuccessNewGoal();
          }
        })
        .catch((error) => alert(error, "fail to post"));
    },
    [seletedGoalCategories, textareaRef, selectedAge, onSuccessNewGoal],
  );
  const onClickselectedAge = useCallback((value) => {
    setSelectedAge(value);
    setSelectedGoalCategories([]);
    setSearchCategory("");
  }, []);
  const onClickInputBox = useCallback(() => {
    inputRef.current.focus();
  }, []);
  const onFocus = useCallback((e) => {
    setIsFocusedCategoryInput(true);
  }, []);
  const onBlur = useCallback((e) => {
    setIsFocusedCategoryInput(false);
  }, []);
  const onMouseDownGoalCategory = useCallback(
    (e, value) => {
      e.preventDefault();
      setTimeout(() => {
        inputRef.current.blur();
        if (seletedGoalCategories.length === MAX_GOAL_CATEGORY) {
          inputRef.current.disabled = true;
        }
      }, 100);
      setSelectedGoalCategories((values) => [...values, value]);
    },
    [seletedGoalCategories],
  );
  const onMouseDownUndoGoalCategory = useCallback((e, value) => {
    e.preventDefault();
    inputRef.current.disabled = false;
    setSelectedGoalCategories((values) => {
      return values.filter((v) => v.id !== value.id);
    });
  }, []);
  const onChangeSearchCategory = useCallback((e) => {
    setSearchCategory(e.target.value);
  }, []);
  useEffect(() => {
    if (searchCategory !== "") {
      setSearchingCategoryByAge(categoryByAge.filter((v) => v.keyword.includes(searchCategory)));
    }
  }, [searchCategory, categoryByAge]);
  useEffect(() => {
    textareaRef.current.focus();
  }, [toggleModal]);
  useEffect(() => {
    const width = selectedRef.current.offsetWidth;
    inputRef.current.style.left = `${width}px`;
    inputRef.current.style.maxWidth = 160 - width + "px";
  }, [seletedGoalCategories]);
  useEffect(() => {
    if (selectedAge !== null) {
      getGoalCategoryByAge(selectedAge.value)
        .then((resolve) => setCategoryByAge(resolve.data.results))
        .catch((error) => console.log(error, "fail to get category"));
    }
  }, [selectedAge]);
  return (
    <section onClick={(e) => e.stopPropagation()} ref={sectionRef}>
      <h1>목표 작성하기</h1>
      <div className="modal-top">
        {matchQuery.sm ? (
          <svg onClick={toggleModal} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.25 4.75L4.75 14.25" stroke="#CCD2E3" strokeWidth="1.09524" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.75 4.75L14.25 14.25" stroke="#CCD2E3" strokeWidth="1.09524" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <div style={{ marginTop: "7px", position: "absolute", right: "11px" }}>
            <Image width="101px" height="51px" src="/img/newgoalchar.svg" alt="" />
          </div>
        )}
      </div>
      <main>
        <form onSubmit={onSubmit}>
          <div className="age-list-container">
            <label>
              <span>연령대</span>
            </label>
            <ul className="age-list">
              {newGoalAgeList?.map((age) => (
                <NewGoalCategoryButton
                  className="age-button"
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
          <textarea ref={textareaRef} className="text" type="text" placeholder="내용을 입력해주세요!" />
          <div className="goal-category-wrapper">
            <label>
              <span>목표 카테고리</span>
            </label>
            <div className="goal-wrapper">
              <div className="input-box" onClick={onClickInputBox}>
                <input
                  ref={inputRef}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  className="goal-category-search-input"
                  value={searchCategory}
                  onChange={onChangeSearchCategory}
                />
              </div>
              <ul className="selected-goal-categories" ref={selectedRef}>
                {seletedGoalCategories?.map((seletedGoalCategory, index) => (
                  <li onMouseDown={(e) => onMouseDownUndoGoalCategory(e, seletedGoalCategory)} key={index}>
                    {seletedGoalCategory.keyword}
                  </li>
                ))}
              </ul>
              <ul className="goal-category-list">
                {categoryByAge.length === 0 ? (
                  <li style={{ color: "red" }}>연령대를 선택해 주세요!</li>
                ) : searchCategory === "" ? (
                  categoryByAge
                    .sort((a, b) => b.count - a.count)
                    .map((goalCategory, index) => (
                      <li onMouseDown={(e) => onMouseDownGoalCategory(e, goalCategory)} key={index}>
                        {goalCategory.keyword}
                      </li>
                    ))
                ) : (
                  searchingCategoryByAge.map((goalCategory, index) => (
                    <li onMouseDown={(e) => onMouseDownGoalCategory(e, goalCategory)} key={index}>
                      {goalCategory.keyword}
                    </li>
                  ))
                )}
              </ul>
              <button type="submit" className="submit-button">
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
          </div>
        </form>
      </main>
      <style jsx>
        {`
          ol,
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          section {
            position: relative;
            max-width: 30.188rem;
            width: 86%;
            height: 16.938rem;
            box-shadow: 7.18426px 7.18426px 10.7764px rgba(227, 233, 240, 0.5);
            border-radius: 0.5rem;
            background: #fff;
            display: "block";
          }
          section h1 {
            font-size: 0;
          }
          section .modal-top {
            background: #73bcff;
            height: 1.375rem;
            border-radius: 0.5rem 0.5rem 0 0;
          }

          section .modal-top svg {
            position: absolute;
            right: 0.813rem;
          }
          form {
            margin: 0 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .age-list-container {
            margin-top: 0.875rem;
            display: flex;
            white-space: pre;
            gap: 8px 50px;
          }
          .age-list-container label {
            font-weight: bold;
            font-size: 0.813rem;
            line-height: 1.25rem;
            color: #2d2d2d;
          }
          .age-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.25rem 0.5rem;
          }
          .text {
            margin-top: 10px;
            resize: none;
            background: #f7f8fa;
            border-radius: 4px;
            border: none;
            width: 85%;
            height: 4.813rem;
            padding: 0.5rem 1rem;
          }
          .text:focus {
            outline: 0;
          }
          .goal-category-wrapper {
            position: relative;
          }
          .goal-category-wrapper label span {
            font-weight: bold;
            font-size: 0.813rem;
            line-height: 1.25rem;
            color: #2d2d2d;
          }
          .input-box {
            cursor: text;
            width: 10rem;
            height: 1.5rem;
            background: #f7f8fa;
            border-radius: 0.25rem;
            overflow: hidden;
            position: relative;
          }
          .goal-category-search-input {
            position: absolute;
            left: 0;
            background: #f7f8fa;
            max-width: 10rem;
            height: 1.5rem;
            outline: none;
            border: none;
          }
          .goal-category-search-input:focus {
            outline: none;
          }
          .goal-category-list {
            position: absolute;
            top: 50px;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .goal-category-list li {
            display: ${isFocusedCategoryInput ? "flex" : "none"};
            padding: 0px;
            background: #ffffff;
            width: 10.5rem;
            height: 2.25rem;
            font-size: 13px;
            line-height: 20px;
            color: #36332e;
            align-items: center;
            cursor: pointer;
          }
          .goal-category-list li:last-child {
            border-radius: 0 0 8px 8px;
          }
          .goal-category-list li:not(:last-child) {
            box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.1);
          }
          .goal-category-list li::before {
            content: " # ";
            margin-left: 20px;
          }
          .selected-goal-categories {
            position: absolute;
            top: 22px;
            display: flex;
            gap: 0.25rem;
          }
          .selected-goal-categories li {
            border: 0.5px solid #73bcff;
            color: #73bcff;
            height: 1rem;
            padding: 0.12rem 0.12rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 13px;
            line-height: 20px;
          }
          .selected-goal-categories li::before {
            content: " # ";
          }
          .goal-wrapper {
            display: flex;
          }
          .submit-button {
            margin-left: 15px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.875rem;
            height: 1.813rem;
            background: #e8f3ff;
            border-radius: 4px;
            border: none;
          }
          @media (min-width: 576px) {
            section {
              margin: 40px auto 100px;
              height: 32.563rem;
              border-radius: 1rem;
            }
            section .modal-top {
              height: 3.625rem;
            }
            .text {
              width: 94%;
              height: 14.625rem;
            }
            form {
              margin: 0 2rem;
            }
            .age-list-container {
              flex-direction: column;
              transform: translateX(-3rem);
            }
            .goal-category-wrapper {
              margin-top: 1rem;
              transform: translateX(-0.5rem);
            }
            .input-box {
              width: 19.375rem;
              height: 3.375rem;
            }
            .goal-category-search-input {
              max-width: 19.375rem;
              height: 3.375rem;
            }
            .goal-category-list {
              top: 80px;
            }
            .goal-category-list li {
              display: ${isFocusedCategoryInput ? "flex" : "none"};
              padding: 0px;
              background: #ffffff;
              width: 10.5rem;
              height: 2.25rem;
              font-size: 13px;
              line-height: 20px;
              color: #36332e;
              align-items: center;
              cursor: pointer;
            }
            .selected-goal-categories {
              left: 3px;
              top: 34px;
              display: flex;
              gap: 0.25rem;
              font-weight: bold;
            }
            .selected-goal-categories li {
              border: 1px solid #73bcff;
              color: #73bcff;
              height: 1rem;
              padding: 0.2rem 0.6rem;
              font-size: 1rem;
              line-height: 26px;
            }
            .submit-button {
              margin-left: 15px;
              width: 5.125rem;
              height: 3.375rem;
              border-radius: 4px;
            }
          }

          @media (min-width: 1200px) {
            section {
              max-height: 32.563rem;

              width: 483px;
              margin-left: 18px;
            }
          }
        `}
      </style>
    </section>
  );
}
