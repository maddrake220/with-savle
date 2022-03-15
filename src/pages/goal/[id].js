/* eslint-disable no-console */
/* eslint-disable unicorn/prevent-abbreviations */
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import style from "styles/goal/GoalId.module.scss";

import Comment from "@/components/comment/Comment";
import server from "@/config/server";

export async function getStaticProps(context) {
  const { id } = context.params;
  const { data } = await axios.get(`${server}/api/goal/${id}`);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await axios.get(`${server}/api/goal`);
  const ids = data.results.map((item) => item.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

function GoalById({ data }) {
  const { id, age, categories, text, likes, comments } = data.results;
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
        <div className={style.Icons}>
          <div className={style.likes}>
            <Image
              src="/img/goallike.svg"
              alt="좋아요"
              width={20}
              height={20}
            />
            <span>{likes}</span>
          </div>
          <div className={style.comments}>
            <Image src="/img/comment.svg" alt="댓글" width={24} height={24} />
            <span>{comments.length}</span>
          </div>
          <div className={style.share}>
            <Image src="/img/share.svg" alt="공유" width={24} height={24} />
          </div>
        </div>
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
