/* eslint-disable no-console */
/* eslint-disable unicorn/prevent-abbreviations */
import Link from "next/link";
import { useCallback } from "react";
import { fetchGetGoal, fetchGetGoalById, fetchPutGoalLike } from "src/api/goal";
import style from "styles/goal/GoalId.module.scss";

import Comment from "@/components/comment/Comment";
import FavoriteCommentShare from "@/components/vote/FavoriteCommentShare";
import { useLike, useTimeoutToggle } from "@/hooks/index";
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
      <div className={`${style.container} container `}>
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
          commentCount={comments.length}
          timeoutToggle={timeoutToggle}
          timeoutModal={timeoutModal}
          like={like}
          likeNums={likeNums}
          handleLikeToggle={handleLikeToggle}
        />
        <Comment id={id} value="goal" setCount={comments.length} />
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
