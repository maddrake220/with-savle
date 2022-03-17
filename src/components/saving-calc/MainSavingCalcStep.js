import Arrow from "public/layout/ic-arrow-next.svg";
import Check from "public/layout/ic-package-check.svg";
import Three from "public/layout/ic-three-grey.svg";
import Two from "public/layout/ic-two-blue.svg";

import { useBreakpoint } from "@/hooks/index";
import styles from "@/styles/saving-calc/MainSavingCalcStep.module.scss";

function MainSavingCalcStep() {
  const { md: isTablet } = useBreakpoint();
  return (
    <div className={styles.wrap}>
      <div className={styles.number}>
        <Check width={isTablet ? "20px" : "31px"} />
        <Arrow width={isTablet ? "86px" : "131px"} />
        <Two width={isTablet ? "20px" : "31px"} />
        <Arrow width={isTablet ? "86px" : "131px"} />
        <Three width={isTablet ? "20px" : "31px"} />
      </div>
      <div className={styles.text}>
        <div>목표 입력하기</div>
        <div>금액 입력하기</div>
        <div>결과 확인하기</div>
      </div>
    </div>
  );
}

export default MainSavingCalcStep;
