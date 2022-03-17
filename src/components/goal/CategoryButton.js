import React from "react";

import styles from "@/styles/goal/CategoryButton.module.scss";
const getBackgroundColor = (backgroundColor) => {
  switch (backgroundColor) {
    case "blue": {
      return styles.blue;
    }
    case "yellow": {
      return styles.yellow;
    }
    case "green": {
      return styles.green;
    }
    case "sky": {
      return styles.sky;
    }
    case "pink": {
      return styles.pink;
    }
    default: {
      return styles.blue;
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
        className={`${styles.categoryButton} ${
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
