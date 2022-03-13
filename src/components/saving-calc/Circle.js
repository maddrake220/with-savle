function Circle({ width, type, children }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 40 40"
      style={{ display: "block" }}
    >
      <circle
        cx="20"
        cy="20"
        r="19.25"
        fill={type ? "#3178FF" : "none"}
        stroke={type ? "#3178FF" : "#B3B3B3"}
        strokeWidth="1.5"
      />
      {children}
    </svg>
  );
}

export default Circle;
