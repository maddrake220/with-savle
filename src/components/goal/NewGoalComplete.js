import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function NewGoalComplete({
  isToggleModal,
  toggleModal,
  from = "main",
}) {
  const matchQuery = useBreakpoint();
  return (
    <div onClick={(event) => event.stopPropagation()} className="newgoal-comp">
      <div className="newgoal-comp-top">
        <div className="newgoal-char">
          <Image
            src="/img/goalcompchar.svg"
            alt="savle-char"
            width={matchQuery.sm ? 85 : 197}
            height={matchQuery.sm ? 65 : 80}
          />
        </div>
        <div className="close-button" onClick={toggleModal}>
          <Image
            src="/img/goal-close.svg"
            alt="close"
            width={matchQuery.sm ? 19 : 45}
            height={matchQuery.sm ? 19 : 45}
          />
        </div>
      </div>
      <div className="newgoal-comp-text">
        <div>세이러님의</div>
        <div>목표가 입력 되었습니다!</div>
      </div>
      <div className="button" onClick={toggleModal}>
        {from === "goal" ? (
          <div>확인</div>
        ) : (
          <Link href={"/goal"}>
            <a>
              <div>더 많은 목표 보러가기</div>
            </a>
          </Link>
        )}
      </div>

      <style jsx>
        {`
          .newgoal-comp {
            display: ${isToggleModal ? "block" : "none"};
            width: 86%;
            height: 35%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto auto;
            background: #f7f8fa;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
            border-radius: 16.6452px;
            overflow: hidden;
            display: flex;
            justify-content: center;
          }
          .newgoal-comp-top {
            position: absolute;
            width: 100%;
            height: 2.438rem;
            left: 0px;
            top: 0px;
            background: #2557ff;
            overflow: hidden;
          }
          .newgoal-char {
            position: absolute;
            right: 1.875rem;
            top: -9px;
          }
          .close-button {
            cursor: pointer;
            position: absolute;
            top: 0.734rem;
            right: 15px;
          }
          .newgoal-comp-text {
            position: absolute;
            top: 4.832rem;
            text-align: center;
            font-family: "Noto Sans KR";
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5rem;
            color: #888888;
          }
          .newgoal-comp-text {
            display: block;
          }
          .button {
            cursor: pointer;
            position: absolute;
            bottom: 2.8rem;
            width: 10.875rem;
            height: 2.875rem;
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
          a {
            color: #fff;
            text-decoration: none; /* no underline */
          }
          .button:hover a div {
            color: #3178ff;
          }
          @media (min-width: 576px) {
            .newgoal-comp {
              min-width: 490px;
              max-width: 53%;
              height: 25.938rem;
            }
            .newgoal-comp-top {
              height: 5rem;
            }
            .newgoal-char {
              right: 1.875rem;
              top: 0;
            }
            .newgoal-comp-text {
              top: 7rem;
              font-size: 2.5rem;
              line-height: 3.438rem;
            }
            .button {
              width: 13.625rem;
              height: 3.625rem;
            }
            .close-button {
              top: 18px;
            }
          }
          @media (min-width: 1200px) {
            .newgoal-comp {
              min-width: 490px;
              max-width: 53%;
            }
            .newgoal-comp-text {
              font-size: 2.5rem;
              line-height: 3.438rem;
            }
          }
        `}
      </style>
    </div>
  );
}
