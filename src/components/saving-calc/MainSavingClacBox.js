import PiggyBank from "public/layout/piggy-bank.svg";
import PlusButton from "./PlusButton";
import css from "styled-jsx/css";
import { useBreakpoint } from "@/hooks/useBreakpoint";
const style = css`
  .box {
    width: 408px;
    padding: 29px 37px 22px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0px 6.94125px 34.7063px rgba(71, 72, 75, 0.15);
    border-radius: 16px;
    margin: 0 auto;
  }
  .title {
    display: flex;
    justify-content: space-between;
    margin: 0 0 21px;
  }
  .title h2 {
    width: 192px;
    font-weight: 700;
    font-size: 21px;
    line-height: 1.5;
    margin: 0;
  }
  .amount p {
    font-size: 18px;
    margin: 0;
  }
  .amount .amount_input {
    margin: 17px 0 14px;
    text-align: right;
  }
  .amount .amount_input span {
    font-size: 16px;
    width: 252px;
    display: inline-block;
    color: #b2b2b2;
    border-bottom: 1px solid #e3e7ed;
  }
  .button_plus {
    display: flex;
    justify-content: flex-end;
  }
  .button_plus div {
    background: #eceff2;
    width: 53px;
    height: 22px;
    font-size: 10px;
    color: #a0a1a9;
    border-radius: 139px;
    margin-left: 5px;
    text-align: center;
    padding-top: 4px;
    box-sizing: border-box;
  }
  .button {
    width: 333px;
    height: 37px;
    background: #d9dde3;
    opacity: 0.7;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #989c9e;
    padding-top: 8px;
    box-sizing: border-box;
    margin-top: 30px;
  }
  @media (min-width: 1200px) {
    .box {
      width: 620px;
      padding: 43px 57px 31px;
      border-radius: 24px;
      box-shadow: 0px 10.5367px 52.6835px rgba(71, 72, 75, 0.15);
      margin: 0 auto;
    }
    .title {
      margin: 0 0 34px;
    }
    .title h2 {
      width: 285px;
      font-size: 31px;
    }
    .amount p {
      font-size: 27px;
    }
    .amount .amount_input {
      margin: 26px 0 24px;
    }
    .amount .amount_input span {
      font-size: 24px;
      width: 383px;
    }
    .button_plus div {
      width: 81px;
      height: 34px;
      font-size: 14px;
      border-radius: 211px;
      margin-left: 7px;
      padding-top: 7px;
    }
    .button {
      width: 506px;
      height: 57px;
      border-radius: 8px;
      font-size: 21px;
      padding-top: 14px;
      margin-top: 45px;
    }
  }
`;
const MainSavingClacBox = () => {
  const { md: isTablet } = useBreakpoint();
  return (
    <div className="box">
      <div className="title">
        <h2>목표 금액과 저축 금액을 알려주세요.</h2>
        <PiggyBank width={isTablet ? "76px" : "115px"} />
      </div>
      <div className="amount">
        <div className="goal_amount">
          <p>목표 금액은</p>
          <p className="amount_input">
            <span>예) 70,000,000</span> 원 입니다
          </p>
          <div className="button_plus">
            <div>+1만</div>
            <div>+5만</div>
            <div>+10만</div>
          </div>
        </div>
        <div className="saving_amount">
          <p>저축 금액은</p>
          <p className="amount_input">
            <span>예) 500,000</span> 원 입니다
          </p>
        </div>
        <div className="button_plus">
          <div>+1만</div>
          <div>+5만</div>
          <div>+10만</div>
        </div>
      </div>
      <div className="button">결과보기</div>
      <style jsx>{style}</style>
    </div>
  );
};

export default MainSavingClacBox;
