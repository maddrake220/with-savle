/* eslint-disable no-console */
/* eslint-disable unicorn/prevent-abbreviations */
import Link from "next/link";
import { useCallback, useState } from "react";
import { fetchGetGoal, fetchGetGoalById, fetchPutGoalLike } from "src/api/goal";

import Comment from "@/components/comment/Comment";
import FavoriteCommentShare from "@/components/common/FavoriteCommentShare";
import Seo from "@/components/common/Seo";
import { useLike, useTimeoutToggle } from "@/hooks/index";
import style from "@/styles/goal/GoalId.module.scss";
import { LOCALSTORAGE_GOAL_LIKE } from "@/utils/index";

export async function getStaticProps(context) {
  const { id } = context.params;
  const { data } = await fetchGetGoalById(id);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await fetchGetGoal();
  const ids = data.results.map((item) => item.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

function GoalById({ data }) {
  const { id, age, categories, text, likes, comments } = data.results;

  const [timeoutToggle, timeoutModal] = useTimeoutToggle();
  const [commentCount, setCommentCount] = useState(comments.length);

  const [like, likeNums, localStorageHandler] = useLike(
    id,
    likes,
    LOCALSTORAGE_GOAL_LIKE,
  );

  const handleLikeToggle = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      localStorageHandler();
      const parameter = { id: id, like: !like };
      fetchPutGoalLike(parameter);
    },
    [id, like, localStorageHandler],
  );

  return (
    <section className={style.goal_detail}>
      <Seo
        title="목표공유 | 쉽고 FUN한 저축, 세이블"
        desc="세이블에서 목표 달성, 함께해요!"
        ogUrl={`https://with-savle.herokuapp.com/${id}`}
        ogTitle="목표 공유"
        ogDesc="세이블에서 목표 달성, 함께해요! 다른 사람들과 목표를 공유해보아요."
      />
      <div className={style.goal_detail_container}>
        <div className={style.info}>
          익명의 {id}님 | {age}대
        </div>
        <div className={style.text}>{text}</div>
        <div className={style.categories}>
          <ul>
            {categories.map((item, index) => {
              return (
                <li key={index}>
                  <span>#{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <FavoriteCommentShare
          commentCount={commentCount}
          timeoutToggle={timeoutToggle}
          timeoutModal={timeoutModal}
          like={like}
          likeNums={likeNums}
          handleLikeToggle={handleLikeToggle}
        />
        <Comment id={id} value="goal" setCount={setCommentCount} />
        <div className={style.back_btn_container}>
          <Link href={`/goal`}>
            <a className={style.link}>
              <button className={style.back_btn}>목록보기</button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GoalById;
