import React from "react";

import styles from "@/styles/goal/GoalDropdown.module.scss";
export default function GoalDropdown({ label, value, options, onChange }) {
  return (
    <div className={styles.GoalDropdown}>
      {label}
      <select
        className={styles.GoalDropdownSelect}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
