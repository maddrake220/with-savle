import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewGoalComplete({ toggleNewGoalComp, onCloseCompModal }) {
  return (
    <div onClick={(e) => e.stopPropagation()} className="newgoal-comp">
      <div className="newgoal-comp-top">
        <div className="newgoal-char">
          <Image src="/img/goalcompchar.svg" alt="savle-char" width={197} height={80} />
        </div>
        <div className="close-button" onClick={onCloseCompModal}>
          <Image src="/img/goal-close.svg" alt="close" width={45} height={45} />
        </div>
      </div>
      <div className="newgoal-comp-text">
        <div>세이러님의</div>
        <div>목표가 입력 되었습니다!</div>
      </div>
      <Link href={"/goal"}>
        <a>
          <div className="button" onClick={onCloseCompModal}>
            더 많은 목표 보기
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .newgoal-comp {
            display: ${toggleNewGoalComp ? "block" : "none"};
            width: 64.375rem;
            height: 25.938rem;
            position: absolute;
            left: 23.18%;
            right: 23.18%;
            top: 30.58%;
            bottom: 33.36%;
            background: #f7f8fa;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
            border-radius: 16.6452px;
            overflow: hidden;
          }
          .newgoal-comp-top {
            position: absolute;
            width: 1032px;
            height: 80px;
            left: 0px;
            top: 0px;
            background: #2557ff;
          }
          .newgoal-char {
            position: absolute;
            right: 104px;
          }
          .close-button {
            cursor: pointer;
            position: absolute;
            top: 20px;
            right: 15px;
          }
          .newgoal-comp-text {
            position: absolute;
            width: 609px;
            height: 139px;
            left: calc(50% - 609px / 2 - 0.5px);
            top: calc(50% - 139px / 2 - 5px);
            font-family: "Noto Sans KR";
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 55px;
            text-align: center;
            color: #888888;
            display: flex;
            flex-direction: column;
          }
          .newgoal-comp-text {
            display: block;
          }
          .button {
            cursor: pointer;
            position: absolute;
            width: 218px;
            height: 58px;
            left: calc(50% - 218px / 2);
            top: calc(50% - 58px / 2 + 103.5px);
            background: #3178ff;
            box-sizing: border-box;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Noto Sans KR";
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 28px;
            color: #fff;
          }
          .button:hover {
            border: 1.5px solid #3178ff;
            background: #fff;
            color: #3178ff;
          }
        `}
      </style>
    </div>
  );
}
