import css from "styled-jsx/css";

const style = css`
  div {
    margin-top: 10px;
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
    font-weight: 500;
    font-size: 10px;
    color: #a0a1a9;
  }
  p {
    margin: 0;
    font-weight: 500;
    font-size: 10px;
    color: #a0a1a9;
  }
`;
const PlusButton = ({ handleClick }) => {
  return (
    <>
      <div>
        <button id="plus1" onClick={handleClick}>
          +1만
        </button>
        <button id="plus5" onClick={handleClick}>
          +5만
        </button>
        <button id="plus10" onClick={handleClick}>
          +10만
        </button>
        <style jsx>{style}</style>
      </div>
    </>
  );
};
export default PlusButton;
