import React from "react";
import style from "styles/goal/category-button.module.scss";
const getBackgroundColor = (backgroundColor) => {
  switch (backgroundColor) {
    case "blue": {
      return style.blue;
    }
    case "yellow": {
      return style.yellow;
    }
    case "green": {
      return style.green;
    }
    case "sky": {
      return style.sky;
    }
    default: {
      return style.blue;
    }
  }
};
export default function CategoryButton({
  id,
  text,
  backgroundColor,
  onClick,
  clicked,
}) {
  return (
    <>
      <button
        className={`${style.categoryButton} ${
          id === clicked && getBackgroundColor(backgroundColor)
        }`}
        onClick={() => {
          onClick(id);
        }}
      >
        <div>{text}</div>
      </button>
    </>
  );
}
