import React from "react";

export default function CategoryButton({ id, text, backgroundColor = "#fff", onClick, clicked }) {
  return (
    <>
      <button
        onClick={() => {
          onClick(id);
        }}
      >
        <div>{text}</div>
      </button>
      <style jsx>
        {`
          button {
            cursor: pointer;
            border: 0.094rem solid #3178ff;
<<<<<<< HEAD
<<<<<<< HEAD
            background-color: ${clicked === id ? backgroundColor : "transparent"};
            color: ${clicked === id ? (backgroundColor === "#3178FF" ? "#EEF7FF" : "#3178ff") : "#3178ff"};
=======
            background-color: ${clicked === id ? backgroundColor : "#fff"};
            color: ${clicked === id ? (backgroundColor === "#3178FF" ? "#fff" : "#3178ff") : "#3178ff"};
>>>>>>> d7bf6df (feat: goal header)
=======
            background-color: ${clicked === id ? backgroundColor : "transparent"};
            color: ${clicked === id ? (backgroundColor === "#3178FF" ? "#EEF7FF" : "#3178ff") : "#3178ff"};
>>>>>>> b652483 (feat: goal styling)
            border-radius: 6.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: none;
            order: 0;
            flex-grow: 0;
            padding: 0 1.25rem;
            height: 2.25rem;
            white-space: pre;
          }
<<<<<<< HEAD
          @media (max-width: 575px) {
            button {
              height: 1.875rem;
              font-size: 0.813rem;
              line-height: 1.25rem;
            }
          }
=======
>>>>>>> d7bf6df (feat: goal header)
        `}
      </style>
    </>
  );
}
