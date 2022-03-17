import Arrow from "/public/layout/ic-arrow-next.svg";
import { useWidth } from "@/hooks/index";
import styles from "@/styles/saving-calc/SavingCalcStep.module.scss";

import One from "./One";
import Three from "./Three";
import Two from "./Two";

function SavingCalcStep({ data }) {
  const { state } = data;
  const { next, result, done } = state;
  const Width = useWidth(16, 20, 40, "px");

  return (
    <div className={styles.wrap}>
      <div className={styles.number}>
        <One next={next} Width={Width} />
        <Arrow width={useWidth(68, 86, 172, "px")} />
        <Two next={next} result={result} Width={Width} />
        <Arrow width={useWidth(68, 86, 172, "px")} />
        <Three result={result} done={done} Width={Width} />
      </div>
      <div className={styles.text}>
        <div>목표 입력하기</div>
        <div className={next ? styles.next : ""}>금액 입력하기</div>
        <div className={result ? styles.result : ""}>결과 확인하기</div>
      </div>
    </div>
  );
}

export default SavingCalcStep;
