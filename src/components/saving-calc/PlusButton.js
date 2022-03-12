import React from "react";

import styles from "../../../styles/saving-calc/PlusButton.module.scss";

const PlusButton = ({ mode, handleClick }) => {
  return (
    <>
      <div className={styles.wrap}>
        <button id={`${mode}_plus1/`} onClick={handleClick}>
          +1만
        </button>
        <button id={`${mode}_plus5`} onClick={handleClick} mode={mode}>
          +5만
        </button>
        <button id={`${mode}_plus10`} onClick={handleClick} mode={mode}>
          +10만
        </button>
      </div>
    </>
  );
};
export default React.memo(PlusButton);
