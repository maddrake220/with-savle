import Link from "next/link";
import Main from "public/layout/main-saving-calc.svg";
import styles from "styles/saving-calc/MainSavingCalc.module.scss";

import { useBreakpoint } from "@/hooks/index";

import MainSavingCalcStep from "./MainSavingCalcStep";
import MainSavingClacBox from "./MainSavingClacBox";

function MainSavingCalc() {
  const { sm: isMobile, md: isTablet } = useBreakpoint();
  return (
    <>
      {isMobile && (
        <div className={`container ${styles.container}`}>
          <div className={styles.title}>
            <h1>
              저축 계산기로
              <br />
              미래목표를 잡을 수 있어요!
            </h1>
            <p>
              가상 저축 계산으로 미래를 설계해서 사람들과 목표를 공유해보아요.
            </p>
            <Main />
          </div>
          <Link href={`/saving-calc`}>
            <a>계산하러 가기</a>
          </Link>
        </div>
      )}
      {!isMobile && isTablet && (
        <div className={`container ${styles.container}`}>
          <div className={styles.title}>
            <h1>
              저축 계산기로
              <br />
              미래목표를 잡을 수 있어요!
            </h1>
            <p>
              가상 저축 계산으로 미래를 설계해서 사람들과 목표를 공유해보아요.
            </p>
            <Link href={`/saving-calc`}>
              <a>계산하러 가기</a>
            </Link>
          </div>
          <div className={styles.box_tablet}>
            <MainSavingCalcStep />
            <MainSavingClacBox />
          </div>
        </div>
      )}
      {!isMobile && !isTablet && (
        <div className={`container ${styles.container}`}>
          <div className={styles.box_web}>
            <MainSavingCalcStep />
            <MainSavingClacBox />
          </div>
          <div className={styles.title}>
            <h1>
              저축 계산기로
              <br />
              미래목표를 잡을 수 있어요!
            </h1>
            <p>
              가상 저축 계산으로 미래를 설계해서 사람들과 목표를 공유해보아요.
            </p>
            <Link href={`/saving-calc`}>
              <a>계산하러 가기</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MainSavingCalc;
