import React from "react";

export default function CategoryButton({ id, text, onClick, clicked }) {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick(id);
        }}
      >
        <div>{text}</div>
      </button>
      <style jsx>
        {`
          button {
            cursor: pointer;
            background-color: ${clicked === id ? "#73bcff" : "transparent"};
            color: ${clicked === id ? "white" : "#73bcff"};
            font-weight: bold;
            font-size: 0.813rem;
            line-height: 1.25rem;
            width: 4.5rem;
            border: 0.094rem solid #73bcff;
            box-sizing: border-box;
            border-radius: 1.545rem;
          }
          @media (max-width: 575px) {
            button {
              height: 1.875rem;
              font-size: 0.813rem;
              line-height: 1.25rem;
            }
          }
        `}
      </style>
    </>
  );
}
