import React from "react";

export default function GoalDropdown({ label, value, options, onChange }) {
  return (
    <label>
      {label}
      <select
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: "transparent",
          border: "none",
          position: "absolute",
          right: "18px",
          fontSize: "0.813rem",
          lineHeight: "1.25rem",
          color: "#111",
          outline: "none",
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
