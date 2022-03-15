import "react-loading-skeleton/dist/skeleton.css";

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { fetchPutGoalLike } from "src/api/goal";

import { useLike } from "@/hooks/index";
import styles from "@/styles/goal/GoalCard.module.scss";
import {
  createMarkup,
  getAgeGeneration,
  LOCALSTORAGE_GOAL_LIKE,
} from "@/utils/index";

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
  const router = useRouter();
  const [like, likeNums, localStorageHandler] = useLike(
    id,
    likes,
    LOCALSTORAGE_GOAL_LIKE,
  );
  const onClickCard = useCallback(
    (id) => {
      router.push({
        pathname: "/goal/[id]",
        query: { id: id },
      });
    },
    [router],
  );

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
    <SkeletonTheme baseColor="#f6f6f6" highlightColor="#f5f5f5" duration={1.5}>
      <li
        className={styles.goalCard}
        key={id}
        onClick={() => {
          onClickCard(id);
        }}
      >
        <div className={styles.goalCardWrapper}>
          <div className={styles.cardUserInfo}>
            <span>
              {id ? (
                `익명의 ${id}님`
              ) : (
                <Skeleton
                  baseColor="#f6f6f6"
                  width={120}
                  height={20}
                  count={1}
                  inline={true}
                />
              )}
            </span>
            <span className={styles.cardUserInfoAge}>
              {age ? (
                getAgeGeneration(age)
              ) : (
                <Skeleton
                  baseColor="#f6f6f6"
                  width={60}
                  height={20}
                  count={1}
                  inline={true}
                />
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
                        baseColor="#f6f9ff"
                        style={{ marginRight: "10px" }}
                        width={40}
                        height={25}
                        count={1}
                      />
                    </span>
                  </li>
                ))}
          </ul>
          {text ? (
            <div
              className={styles.cardText}
              dangerouslySetInnerHTML={createMarkup(text)}
            />
          ) : (
            <div className={styles.cardText}>
              <Skeleton baseColor="lightgray" height={20} count={4} />
            </div>
          )}

          <div className={styles.cardSide}>
            <div className={styles.cardLike}>
              <GoalLike like={like} onClick={onClickLike} />
              <span>
                {likes || likes === 0 ? (
                  likeNums
                ) : (
                  <Skeleton baseColor="lightgray" width={20} count={1} />
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
                {comments ? (
                  comments.length
                ) : (
                  <Skeleton baseColor="lightgray" width={20} count={1} />
                )}
              </span>
            </div>
            <div className={styles.cardMore}>
              <span>더보기 &gt;</span>
            </div>
          </div>
        </div>
      </li>
    </SkeletonTheme>
  );
}
