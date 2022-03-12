/* eslint-disable prettier/prettier */
import Image from "next/image"
export default function MainGoalTitle() {
  return (
    <div className="main-title">
          <Image
            src="/img/receipt.svg"
            alt="배경이미지"
            width={40}
            height={40}
          />
      <h1>
        세이블에서 목표달성,
        <br /> 함께해요!
      </h1>
      <span>다른 사람들과 목표를 공유해 보아요.</span>
      <style jsx>{`
        .main-title {
          margin-left: 22px;
        }
        .main-title h1 {
          margin: 3px 0 6px;
          font-size: 22px;
          line-height: 28px;
        }
        .main-title span {
          color: #888888;
          font-size: 13px;
          line-height: 20px;
        }

        @media (min-width: 576px) {
          .main-title h1 {
            font-size: 28px;
            line-height: 36px;
          }
          .main-title span {
            font-size: 18px;
            line-height: 28px;
          }
        }

        @media (min-width: 1200px) {
          .main-title h1 {
            font-size: 40px;
            line-height: 60px;
          }
          .main-title span {
            font-size: 28px;
            line-height: 36px;
          }
        }
      `}</style>
    </div>
  );
}
