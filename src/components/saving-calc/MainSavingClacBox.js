import PiggyBank from "public/layout/piggy-bank.svg";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import styles from "../../../styles/saving-calc/MainSavingCalcBox.module.scss";

const MainSavingClacBox = () => {
  const { md: isTablet } = useBreakpoint();
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <h2>
          <span>목표 금액과 저축 금액</span>을 알려주세요.
        </h2>
        <PiggyBank width={isTablet ? "76px" : "115px"} />
      </div>
      <div className={styles.amount}>
        <div>
          <p>목표 금액은</p>
          <p className={styles.amount_input}>
            <span>예) 70,000,000</span> 원 입니다
          </p>
          <div className={styles.button_plus}>
            <div>+1만</div>
            <div>+5만</div>
            <div>+10만</div>
          </div>
        </div>
        <div>
          <p>저축 금액은</p>
          <p className={styles.amount_input}>
            <span>예) 500,000</span> 원 입니다
          </p>
        </div>
        <div className={styles.button_plus}>
          <div>+1만</div>
          <div>+5만</div>
          <div>+10만</div>
        </div>
      </div>
      <div className={styles.button}>결과보기</div>
    </div>
  );
};

export default MainSavingClacBox;
