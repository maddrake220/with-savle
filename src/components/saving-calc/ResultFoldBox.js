import Arrow from "/public/layout/ic_arrow_expand.svg";
import css from "styled-jsx/css";
import { useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { getRouteMatcher } from "next/dist/shared/lib/router/utils";
const style = css`
  .box {
    width: 240px;
    background: #e8f3ff;
    border-radius: 7px;
    margin: 0 auto 8px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    padding: 12px 10px 14px;
    box-sizing: border-box;
  }
  .title h3 {
    font-size: 12px;
    font-weight: normal;
    margin: 0;
  }
  .title h3 div:first-child {
    font-size: 11px;
    margin-bottom: 6px;
  }

  .text {
    padding: 10px;
    box-sizing: border-box;
  }
  .text p {
    font-size: 12px;
    line-height: 1.5;
    font-weight: normal;
  }
  .text strong {
    font-size: 12px;
    line-height: 1.5;
  }
  .text.hidden {
    display: none;
  }
  .text div {
    margin-bottom: 24px;
  }
  .text div:last-child {
    margin: 0;
  }
  @media (min-width: 576px) {
    .box {
      width: 318px;
      border-radius: 8px;
    }
    .title {
      padding: 15px 24px;
    }
    .title h3 div:first-child {
      margin-bottom: 4px;
    }
    .text {
      padding: 15px 25px;
    }
  }
  @media (min-width: 1200px) {
    .box {
      width: 645px;
      border-radius: 16px;
      margin-bottom: 16px;
    }
    .title {
      padding: 30px 48px;
    }
    .title h3 {
      font-size: 22px;
    }
    .title h3 div:first-child {
      font-size: 16px;
      margin-bottom: 5px;
    }
    .text {
      font-size: 16px;
      padding: 30px 48px;
    }
    .text p {
      font-size: 16px;
    }
    .text strong {
      font-size: 16px;
    }
  }
`;

const ResultFoldBox = ({ period, date, rule, setState }) => {
  const [hidden, setHidden] = useState(true);
  const { sm: isMobile, md: isTablet } = useBreakpoint();
  const hadleClick = () => {
    setState({ next: true, result: true, done: true });
    setHidden(!hidden);
  };

  return (
    <div className="box">
      <div className="title primary">
        <h3>
          <div>
            <strong>{period}</strong> 적금하면
          </div>
          <div>
            <strong>{date}</strong> 뒤에 달성할 수 있어요
          </div>
        </h3>
        <Arrow width={isMobile ? "19px" : isTablet ? "26px" : "52px"} onClick={hadleClick} style={{ transform: !hidden && "rotate(180deg)" }} />
      </div>
      <div className={`text primary ${hidden && "hidden"}`}>
        <div>
          <p>세이블에서 슬금슬금 규칙, {rule}으로 저축할 수 있습니다.</p>
        </div>
        <div>
          <strong>슬금슬금규칙(일/주/월)</strong>
          <p>매월 일정한 금액을 저축합니다</p>
        </div>
        {rule === "월급날 규칙" && (
          <div className="rule">
            <strong>{rule}</strong>
            <p>월급의 일정 비율을 저축합니다.</p>
          </div>
        )}
        {rule === "52주 규칙" && (
          <div className="rule">
            <strong>{rule}</strong>
            <p>지정한 기간동안, 지정한 금액만큼을 매주 증액하여 저축합니다.</p>
          </div>
        )}
      </div>
      <style jsx>{style}</style>
      <style jsx>{`
        .title {
          border-bottom: ${!hidden && "1px solid #fff"};
        }
        @media (min-width: 1200px) {
          .title {
            border-bottom: ${!hidden && "2px solid #fff"};
          }
        }
      `}</style>
    </div>
  );
};

export default ResultFoldBox;
