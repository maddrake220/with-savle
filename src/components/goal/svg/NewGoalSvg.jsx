import React from "react";

export default function NewGoalSvg({ onClick, width, height }) {
  return (
    <svg onClick={onClick} style={{ cursor: "pointer" }} width={width} height={height} viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1099_77007)">
        <rect x="2" width="55" height="55" rx="27.5" fill="#232323" />
        <rect x="2.25" y="0.25" width="54.5" height="54.5" rx="27.25" stroke="black" strokeOpacity="0.05" strokeWidth="0.5" />
        <path d="M28.0436 38.6487H41.5001" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M17.5372 30.0134L15.5805 37.8402C15.489 38.2064 15.8207 38.5381 16.1869 38.4465L24.0137 36.4898M17.5372 30.0134L29.0509 18.4997M17.5372 30.0134C19.9359 30.0134 24.0137 33.6252 24.0137 36.4898M24.0137 36.4898L35.5273 24.4279M29.0509 18.4997L31.9934 15.5573C32.3951 15.1555 32.9894 15.0152 33.5284 15.1949L35.3947 15.817C36.4011 16.1525 37.233 16.874 37.7075 17.8229L38.6536 19.7151C38.9366 20.2811 38.8339 20.9638 38.397 21.4216L35.5273 24.4279M29.0509 18.4997C31.2097 18.614 35.5273 19.9595 35.5273 24.4279"
          stroke="white"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <filter id="filter0_d_1099_77007" x="0" y="0" width="59" height="59" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1099_77007" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1099_77007" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}
