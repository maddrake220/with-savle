import React from "react";

export default function NewGoalCategory({ category, onMouseDownGoalCategory }) {
  return (
    <>
      {category
        ?.sort((a, b) => b.count - a.count)
        .slice(0, 3)
        .map((goalCategory, index) => (
          <li
            onMouseDown={(event) =>
              onMouseDownGoalCategory(event, goalCategory)
            }
            key={index}
          >
            <span>{goalCategory.keyword}</span>
          </li>
        ))}
    </>
  );
}
