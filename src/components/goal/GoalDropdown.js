import React from "react";

export default function GoalDropdown({
  label,
  value,
  options,
  onChange,
  style,
}) {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange} style={style}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
