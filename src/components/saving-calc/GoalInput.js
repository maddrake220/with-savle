import Book from "public/layout/book.svg";
import css from "styled-jsx/css";
const style = css`
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    height: 63px;
  }
  .title h2 {
    width: 143px;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    position: relative;
  }
  .title h2::before {
    content: "";
    width: 127px;
    height: 8px;
    background: rgba(143, 201, 255, 0.7);
    opacity: 0.4;
    position: absolute;
    top: 17px;
    left: -2px;
  }
`;
const GoalInput = () => {
  return (
    <>
      <div className="title">
        <h2>저축 목표을 알려주세요.</h2>
        <Book width="63px" height="68px " />
      </div>
    </>
  );
};

export default GoalInput;
