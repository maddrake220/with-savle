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
    background: #eceff2;
    border-radius: 120px;
    text-align: center;
    margin-left: 10px;
    border: none;
    font-size: 10px;
    color: #a0a1a9;
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
