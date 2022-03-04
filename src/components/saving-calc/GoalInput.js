import Book from "public/layout/book.svg";
import css from "styled-jsx/css";
const style = css`
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    height: 63px;
  }
  h2 {
    width: 143px;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    position: relative;
  }
  h2::before {
    content: "";
    width: 127px;
    height: 8px;
    background: rgba(143, 201, 255, 0.7);
    opacity: 0.4;
    position: absolute;
    top: 17px;
    left: -2px;
  }
  .goal {
    margin-bottom: 53px;
  }
  .goal_input {
    margin-top: 18px;
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
`;
const GoalInput = ({ goal, handleChange }) => {
  return (
    <>
      <div className="title">
        <h2>저축 목표을 알려주세요.</h2>
        <Book width="63px" height="68px " />
      </div>
      <div className="goal">
        <p>저의 목표는</p>
        <p className="goal_input">
          <input name="goal" type="text" maxLength={20} placeholder="예) 결혼자금 모으기" onChange={handleChange} value={goal}></input> 입니다
          <span className={goal.length > 20 ? "" : "hidden"}>*최대 글자수는 20자입니다.</span>
        </p>
      </div>
    </>
  );
};

export default GoalInput;
