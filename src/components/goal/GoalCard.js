import "react-loading-skeleton/dist/skeleton.css";

import Image from "next/image";
import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import { fetchPutGoalLike } from "src/api/goal";
import styles from "styles/goal/goal-card.module.scss";

import { useLike } from "@/hooks/index";
import { localstorageGoalLike } from "@/utils/goal/constants";
import { getAgeGeneration } from "@/utils/goal/functions";

import GoalLike from "./GoalLike";

export default function GoalCard({
  id,
  age,
  categories,
  comments,
  likes,
  text,
}) {
  const skeletonView = Array.from({ length: 3 }).fill(0);
  const [like, likeNums, localStorageHandler] = useLike(
    id,
    likes,
    localstorageGoalLike,
  );

  const onClickCard = useCallback(() => {
    alert("상세페이지로 이동 구현X");
  }, []);

  const onClickLike = useCallback(
    (event) => {
      event.stopPropagation();
      localStorageHandler();
      const parameter = { id: id, like: !like };
      fetchPutGoalLike(parameter);
    },
    [id, like, localStorageHandler],
  );

  return (
    <li className={styles.goalCard} key={id} onClick={onClickCard}>
      <div className={styles.goalCardWrapper}>
        <div className={styles.cardUserInfo}>
          <span>
            {id ? (
              `익명의 ${id}님`
            ) : (
              <Skeleton width={120} height={20} count={1} inline={true} />
            )}
          </span>
          <span className={styles.cardUserInfoAge}>
            {age ? (
              getAgeGeneration(age)
            ) : (
              <Skeleton width={60} height={20} count={1} inline={true} />
            )}
          </span>
        </div>
        <ul className={styles.cardCategories}>
          {categories
            ? categories.map((category, index) => (
                <li key={index} className={styles.cardCategory}>
                  <span>{category}</span>
                </li>
              ))
            : skeletonView.map((v, index) => (
                <li key={index}>
                  <span>
                    <Skeleton
                      style={{ marginRight: "10px" }}
                      width={40}
                      height={25}
                      count={1}
                    />
                  </span>
                </li>
              ))}
        </ul>
        <div className={styles.cardText}>
          {text || <Skeleton height={20} count={4} />}
        </div>
        <div className={styles.cardSide}>
          <div className={styles.cardLike}>
            <GoalLike like={like} onClick={onClickLike} />
            <span>
              {likes || likes === 0 ? (
                likeNums
              ) : (
                <Skeleton width={20} count={1} />
              )}
            </span>
          </div>
          <div className={styles.cardComments}>
            <Image
              src="/img/goal-comments.svg"
              alt="comments"
              width={24}
              height={24}
            />
            <span>
              {comments ? comments.length : <Skeleton width={20} count={1} />}
            </span>
          </div>
          <div className={styles.cardMore}>
            <span>더보기 &gt;</span>
          </div>
        </div>
      </div>
    </li>
  );
}
