import { localstorageGoalLike } from "@/utils/goal/constants";
import { putLike } from "@/utils/goal/api";
import { getAgeGeneration } from "@/utils/goal/functions";
import Image from "next/image";
import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import GoalLike from "./GoalLike";
import { useLike } from "@/hooks/index";

export default function GoalCard({ id, age, categories, comments, likes, text }) {
  const [like, likeNums, localStorageHandler] = useLike(id, likes, localstorageGoalLike);

  const onClickCard = useCallback(() => {
    alert("상세페이지로 이동 구현X");
  }, []);

  const onClickLike = useCallback(
    (e) => {
      e.stopPropagation();
      localStorageHandler();
      putLike(id, !like);
    },
    [id, like, localStorageHandler],
  );

  return (
    <li className="goal-card" key={id} onClick={onClickCard}>
      <div className="goal-card-wrapper">
        <div className="card-user-info">
          <span>{id ? `익명의 ${id}님` : <Skeleton width={120} height={20} count={1} inline={true} />}</span>
          <span className="card-info-user-age">{age ? getAgeGeneration(age) : <Skeleton width={60} height={20} count={1} inline={true} />}</span>
        </div>
        <ul className="card-categories">
          {categories
            ? categories.map((category, index) => (
                <li key={index} className="card-category">
                  <span>{category}</span>
                </li>
              ))
            : [1, 2, 3].map((v, i) => (
                <li key={i}>
                  <span>
                    <Skeleton style={{ marginRight: "10px" }} width={40} height={25} count={1} />
                  </span>
                </li>
              ))}
        </ul>
        <div className="card-text">{text || <Skeleton height={20} count={4} />}</div>
        <div className="card-side">
          <div className="card-likes">
            <GoalLike like={like} onClick={onClickLike} />
            <span>{likes || likes === 0 ? likeNums : <Skeleton width={20} count={1} />}</span>
          </div>
          <div className="card-comments">
            <Image src="/img/goal-comments.svg" alt="comments" width={24} height={24} />
            <span>{comments ? comments.length : <Skeleton width={20} count={1} />}</span>
          </div>
          <div className="card-more">
            <span>더보기 &gt;</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        ol,
        ul {
          list-style: none;
          margin: 0px;
          padding: 0px;
        }
        .goal-card {
          cursor: pointer;
          width: 17.25rem;
          height: 16.938rem;
          background: #ffffff;
          box-shadow: 0px 0.25rem 0.625rem 0.25rem #e3e9f0;
          border-radius: 0.5rem;
          flex: none;
          order: 0;
          flex-grow: 0;
          position: relative;
        }
        .goal-card-wrapper {
          margin: 1.25rem;
        }
        .goal-card .card-user-info {
          font-size: 13px;
          line-height: 20px;
          color: #b2b2b2;
        }
        .goal-card .card-user-info .card-info-user-age::before {
          content: " I ";
        }
        .goal-card .card-categories {
          margin-top: 0.337rem;
          display: flex;
          flex-wrap: wrap;
        }
        .goal-card .card-category {
          color: #73bcff;
          border: 0.085rem solid #73bcff;
          box-sizing: border-box;
          border-radius: 1.394rem;
          font-size: 0.813rem;
          line-height: 1.25rem;
          padding: 0.063rem 0.75rem;
          margin-bottom: 0.2rem;
          font-weight: bold;
        }
        .goal-card .card-category:not(:first-child) {
          margin-left: 6px;
        }
        .goal-card .card-category span::before {
          content: "# ";
        }
        .goal-card .card-text {
          margin-top: 0.445rem;
          height: 7.85rem;
          overflow: hidden;
          font-size: 1rem;
          line-height: 1.5rem;
          color: #2d2d2d;
        }
        .goal-card .card-side {
          position: absolute;
          width: 82%;
          bottom: 1.25rem;
          display: flex;
          font-weight: bold;
          font-size: 1rem;
          line-height: 1.5rem;
          color: #000;
        }
        .goal-card .card-side .card-likes {
          display: flex;
          align-items: center;
        }
        .goal-card .card-side .card-likes span {
          margin-left: 0.313rem;
        }
        .goal-card .card-side .card-comments {
          margin-left: 0.5rem;
          display: flex;
          align-items: center;
        }

        .goal-card .card-side .card-comments span {
          margin-left: 0.313rem;
        }
        .card-more {
          display: none;
        }
        @media (min-width: 1200px) {
          .goal-card {
            width: 23.625rem;
            height: 21.688rem;
          }
          .goal-card-wrapper {
            margin: 1.875rem 2.5rem;
          }
          .goal-card .card-user-info {
            font-weight: bold;
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .goal-card .card-categories {
            margin-top: 0.5rem;
          }
          .goal-card .card-text {
            margin-top: 1rem;
            height: 11.125rem;
          }
          .card-more {
            cursor: pointer;
            position: absolute;
            right: 0;
            font-weight: bold;
            font-size: 0.813rem;
            line-height: 1.25rem;
            color: #888;
            display: block;
          }
        }
      `}</style>
    </li>
  );
}
