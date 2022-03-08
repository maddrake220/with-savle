import { useBreakpoint } from "@/hooks/useBreakpoint";
import Book from "public/layout/book.svg";
import { useCallback, useState } from "react";
import css from "styled-jsx/css";
const style = css`
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 27px;
    align-items: center;
  }
  h2 {
    width: 92px;
  }
  h2::before {
    width: 92px;
  }
  .goal {
    margin-bottom: 200px;
  }
  .goal_input {
    position: relative;
  }
  input {
    width: 188px;
  }
  span {
    position: absolute;
    top: 45px;
    left: 0;
  }
  @media (min-width: 576px) {
    .title {
      margin-bottom: 17px;
    }
    h2 {
      width: 113px;
    }
    h2::before {
      width: 105px;
    }
    .goal {
      margin-bottom: 151px;
    }
    input {
      width: 267px;
    }
    span {
      position: absolute;
      top: 42px;
      left: 0;
    }
  }
  @media (min-width: 1200px) {
    .title {
      margin-bottom: 31px;
    }
    h2 {
      width: 206px;
    }
    h2::before {
      width: 160px;
    }
    .goal {
      margin-bottom: 297px;
    }
    input {
      width: 516px;
    }
    span {
      position: absolute;
      top: 25px;
      left: 0;
    }
  }
`;

const GoalInput = ({ inputs, setInputs, state, setState }) => {
  const [goal, setGoal] = useState("");
  const nextButtonFocus = goal.length > 0 && goal.length < 21;
  const { sm: isMobile, md: isTablet } = useBreakpoint();
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
        <Book width={isMobile ? "63px" : isTablet ? "71px" : "137px"} style={{ marginRight: "7px" }} />
      </div>
      <div className="goal">
        <p>저의 목표는</p>
        <p className="goal_input">
          <input name="goal" type="text" maxLength={20} placeholder="예) 결혼자금 모으기" onChange={handleChange} value={goal}></input> 입니다
          <span className={goal.length > 20 ? "" : "hidden"}>*최대 글자수는 20자입니다.</span>
        </p>
      </div>
      <button id="next" onClick={handleSubmit} className={nextButtonFocus && "next"} disabled={!nextButtonFocus && "disabled"}>
        다음
      </button>
      <style jsx>{style}</style>
    </>
  );
};

export default GoalInput;
