import CalcInputBox from "./CalcInputBox";
import SavingCalcStep from "./SavingCalcStep";
import css from "styled-jsx/css";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Main from "public/layout/main-saving-calc.svg";
import MainSavingCalcStep from "./MainSavingCalcStep";
import MainSavingClacBox from "./MainSavingClacBox";
import Link from "next/link";

const style = css`
  .container {
    height: 481px;
    padding-top: 49px;
    box-sizing: border-box;
  }
  .title {
    width: 279px;
    position: relative;
    margin: 0 auto 32px;
  }
  h1 {
    position: absolute;
    top: 24px;
    left: 17px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4;
    margin: 0 0 6px;
  }
  p {
    position: absolute;
    top: 86px;
    left: 17px;
    margin: 0;
    width: 200px;
    font-size: 13px;
    line-height: 1.5;
    color: #888888;
  }
  a {
    width: 174px;
    height: 46px;
    background: #3178ff;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
    border: none;
    display: block;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    padding-top: 13px;
    box-sizing: border-box;
  }
  @media (min-width: 576px) {
    .container {
      height: 960px;
      padding-top: 109px;
      box-sizing: border-box;
    }
    .title {
      width: 327px;
      margin: 0;
      position: static;
    }
    h1 {
      position: static;
      font-size: 28px;
      margin: 0 0 8px;
    }
    p {
      position: static;
      width: 260px;
      font-size: 16px;
      margin: 0 0 55px;
    }
    a {
      width: 137px;
      height: 36px;
      background: #fff;
      border-radius: 6px;
      border: 1px solid #3178ff;
      font-weight: 400;
      color: #3178ff;
      margin: 0 0 70px;
      padding-top: 8px;
    }
  }
  .box_tablet {
    float: right;
  }
  @media (min-width: 1200px) {
    .container {
      height: 875px;
      padding-top: 93px;
      display: flex;
      box-sizing: border-box;
    }
    .box_web {
      margin-right: 93px;
    }
    .title {
      width: 457px;
      margin: 210px 0 0;
      position: static;
    }
    h1 {
      position: static;
      font-size: 40px;
      margin: 0 0 16px;
    }
    p {
      position: static;
      width: 324px;
      font-size: 22px;
      margin: 0 0 51px;
    }
    a {
      display: block;
      width: 218px;
      height: 59px;
      background: #fff;
      border-radius: 10px;
      font-weight: 700;
      font-size: 22px;
      border: 1px solid #3178ff;
      color: #3178ff;
      margin: 0;
      padding-top: 14px;
    }
  }
`;
const MainSavingCalc = () => {
  const { sm: isMobile, md: isTablet } = useBreakpoint();
  return (
    <>
      {isMobile && (
        <div className="container">
          <div className="title">
            <h1>
              저축 계산기로
              <br />
              미래목표를 잡을 수 있어요!
            </h1>
            <p>가상 저축 계산으로 미래를 설계해서 사람들과 목표를 공유해보아요.</p>
            <Main />
          </div>
          <Link href={`/saving-calc`}>
            <a>계산하러 가기</a>
          </Link>
        </div>
      )}
      {!isMobile && isTablet && (
        <div className="container">
          <div className="title">
            <h1>
              저축 계산기로
              <br />
              미래목표를 잡을 수 있어요!
            </h1>
            <p>가상 저축 계산으로 미래를 설계해서 사람들과 목표를 공유해보아요.</p>
            <Link href={`/saving-calc`}>
              <a>계산하러 가기</a>
            </Link>
          </div>
          <div className="box_tablet">
            <MainSavingCalcStep />
            <MainSavingClacBox />
          </div>
        </div>
      )}
      {!isMobile && !isTablet && (
        <div className="container">
          <div className="box_web">
            <MainSavingCalcStep />
            <MainSavingClacBox />
          </div>
          <div className="title">
            <h1>
              저축 계산기로
              <br />
              미래목표를 잡을 수 있어요!
            </h1>
            <p>가상 저축 계산으로 미래를 설계해서 사람들과 목표를 공유해보아요.</p>
            <Link href={`/saving-calc`}>
              <a>계산하러 가기</a>
            </Link>
          </div>
        </div>
      )}
      <style jsx>{style}</style>
    </>
  );
};

export default MainSavingCalc;
