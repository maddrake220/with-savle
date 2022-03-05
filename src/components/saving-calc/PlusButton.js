import css from "styled-jsx/css";
import React from "react";
const style = css`
  div {
    margin-top: 13px;
    display: flex;
    justify-content: flex-end;
    color: #a0a1a9;
  }
  button {
    width: 47px;
    height: 20px;
    color: #a0a1a9;
    background: #eceff2;
    border-radius: 120px;
    margin: 0 0 0 10px;
    font-size: 10px;
  }
  @media (min-width: 1200px) {
    div {
      margin-top: 21px;
    }
    button {
      width: 102px;
      height: 43px;
      border-radius: 268px;
      font-size: 18px;
    }
  }
`;
const PlusButton = ({ mode, handleClick }) => {
  return (
    <>
      <div>
        <button id={`${mode}_plus1/`} onClick={handleClick}>
          +1만
        </button>
        <button id={`${mode}_plus5`} onClick={handleClick} mode={mode}>
          +5만
        </button>
        <button id={`${mode}_plus10`} onClick={handleClick} mode={mode}>
          +10만
        </button>
        <style jsx>{style}</style>
      </div>
    </>
  );
};
export default React.memo(PlusButton);
