import React, { useCallback, useEffect, useRef, useState } from "react";
import NewGoalCategoryButton from "./NewGoalCategoryButton";
const categories = [
  { id: 0, text: "10대" },
  { id: 1, text: "20대" },
  { id: 2, text: "30대" },
  { id: 3, text: "40대 이상" },
];
export default function NewGoalForm({ toggleNewGoal, onClickCloseModal }) {
  const [clicked, setClicked] = useState(null);
  const inputRef = useRef(null);
  const onClickSelectCategory = useCallback((id) => {
    setClicked(id);
  }, []);
  useEffect(() => {
    inputRef.current.focus();
  }, [toggleNewGoal]);
  return (
    <section onClick={(e) => e.stopPropagation()}>
      <h1>목표 작성하기</h1>
      <div className="modal-top">
        <svg onClick={onClickCloseModal} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.25 4.75L4.75 14.25" stroke="#CCD2E3" strokeWidth="1.09524" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.75 4.75L14.25 14.25" stroke="#CCD2E3" strokeWidth="1.09524" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <main>
        <form>
          <div className="age-list-container">
            <label>
              <span>연령대</span>
            </label>
            <ul className="age-list">
              {categories.map((category) => (
                <NewGoalCategoryButton
                  className="age-button"
                  key={category.id}
                  id={category.id}
                  onClick={onClickSelectCategory}
                  clicked={clicked}
                  text={category.text}
                />
              ))}
            </ul>
          </div>
          <textarea ref={inputRef} className="text" type="text" placeholder="gogo" />
        </form>
      </main>
      <style jsx>
        {`
          section {
            position: fixed;
            top: 0;
            bottom: 0;
            left: calc(50% - 8.625rem);
            margin: auto 0;
            width: 17.25rem;
            height: 16.938rem;
            border-radius: 0.5rem;
            background: #fff;
            display: ${toggleNewGoal ? "block" : "none"};
            overflow: hidden;
          }
          section h1 {
            font-size: 0;
          }
          section .modal-top {
            background: #73bcff;
            height: 1.375rem;
          }

          section .modal-top svg {
            position: absolute;
            right: 0.813rem;
          }
          form {
            margin: 0 1rem;
          }
          .age-list-container {
            display: flex;
            justify-content: center;
            white-space: pre;
          }
          .age-list-container label {
            margin-top: 0.875rem;
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
            resize: none;
            background: #f7f8fa;
            border-radius: 4px;
            border: none;
            width: 12.625rem;
            height: 4.813rem;
            padding: 0.5rem 1rem;
          }
        `}
      </style>
    </section>
  );
}
