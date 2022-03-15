import { useState } from "react";

import Arrow from "/public/layout/ic_arrow_expand.svg";
import { useWidth } from "@/hooks/index";
import styles from "@/styles/saving-calc/ResultFoldBox.module.scss";

function ResultFoldBox({ period, date, rule, setState }) {
  const [hidden, setHidden] = useState(true);

  const hadleClick = () => {
    setState({ next: true, result: true, done: true });
    setHidden(!hidden);
  };

  return (
    <div className={styles.box}>
      <div className={`${styles.title} ${!hidden ? styles.border : ""}`}>
        <h3>
          <div>
            <strong>{period}</strong> 적금하면
          </div>
          <div>
            <strong>{date}</strong> 뒤에 달성할 수 있어요
          </div>
        </h3>
        <Arrow
          width={useWidth(19, 26, 52, "px")}
          onClick={hadleClick}
          style={{ transform: !hidden && "rotate(180deg)", cursor: "pointer" }}
        />
      </div>
      <div className={`${styles.text} ${hidden ? styles.hidden : ""}`}>
        <div>
          <p>세이블에서 슬금슬금 규칙, {rule}으로 저축할 수 있습니다.</p>
        </div>
        <div>
          <strong>슬금슬금규칙(일/주/월)</strong>
          <p>매월 일정한 금액을 저축합니다</p>
        </div>
        {rule === "월급날 규칙" && (
          <div className={styles.rule}>
            <strong>{rule}</strong>
            <p>월급의 일정 비율을 저축합니다.</p>
          </div>
        )}
        {rule === "52주 규칙" && (
          <div className={styles.rule}>
            <strong>{rule}</strong>
            <p>지정한 기간동안, 지정한 금액만큼을 매주 증액하여 저축합니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultFoldBox;
