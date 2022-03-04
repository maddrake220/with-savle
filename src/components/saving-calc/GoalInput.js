import Book from "public/layout/book.svg";
import { useCallback, useState } from "react";
import css from "styled-jsx/css";
const style = css`
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  h2 {
    width: 92px;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    position: relative;
  }
  h2::before {
    content: "";
    width: 92px;
    height: 8px;
    background: rgba(143, 201, 255, 0.7);
    opacity: 0.4;
    position: absolute;
    top: 17px;
    left: -2px;
  }
  .goal {
    margin-bottom: 200px;
  }
  .goal_input {
    margin-top: 18px;
    position: relative;
  }
  input {
    width: 188px;
    border: none;
    border-bottom: 1px solid #e3e7ed;
    margin-right: 4px;
    font-size: 14px;
    text-align: right;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: #b2b2b2;
  }
  span {
    position: absolute;
    top: 25px;
    left: 0;
    font-size: 10px;
    color: red;
  }
  span.hidden {
    display: none;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
  button {
    width: 220px;
    height: 34px;
    display: block;
    margin: 0 auto;
    font-weight: bold;
    font-size: 12px;
    color: #b2b2b2;
    border: none;
    border-radius: 8px;
    background: #d6d8dc;
  }
  button.next {
    color: #fff;
    background: #3178ff;
  }
`;

const GoalInput = ({ inputs, setInputs, state, setState }) => {
  const [goal, setGoal] = useState("");
  const nextButtonFocus = goal.length > 0 && goal.length < 21;
  const handleChange = useCallback((e) => {
    setGoal(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id } = e.target;
    setState({
      ...state,
      [id]: true,
    });
    setInputs({
      ...inputs,
      goal: goal,
    });
  };

  return (
    <>
      <div className="title">
        <h2>저축 목표를 알려주세요.</h2>
        <Book width="63px" height="68px " style={{ marginRight: "7px" }} />
      </div>
      <div className="goal">
        <p>저의 목표는</p>
        <p className="goal_input">
          <input name="goal" type="text" maxLength={20} placeholder="예) 결혼자금 모으기" onChange={handleChange} value={goal}></input> 입니다
          <span className={goal.length > 20 ? "" : "hidden"}>*최대 글자수는 20자입니다.</span>
        </p>
      </div>
      <button id="next" onClick={handleSubmit} className={nextButtonFocus && "next"}>
        다음
      </button>
      <style jsx>{style}</style>
    </>
  );
};

export default GoalInput;
