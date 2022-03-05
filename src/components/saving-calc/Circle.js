import React from "react";

const Circle = ({ width, fill, stroke, children }) => {
  return (
    <svg width={width} height={width} viewBox="0 0 40 40" style={{ display: "block" }}>
      <circle cx="20" cy="20" r="19.25" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {children}
    </svg>
  );
};

export default Circle;
