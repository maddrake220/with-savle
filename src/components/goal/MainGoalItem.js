import Image from "next/image";
import Link from "next/link";
import style from "@/styles/goal/MainGoal.module.scss";

MainGoalItem.defaultProps = {
  id: 0,
  age: 999,
  text: "",
  likes: 0,
  comments: 0,
};

export default function MainGoalItem({
  id,
  age,
  categories,
  text,
  likes,
  comments,
}) {
  return (
    <Link href={`/goal`}>
      <a>
        <li className={style.main_goal_item}>
          <div className={style.item}>
            <div className={style.info}>
              익명의 {id}님 | {Number.parseInt(age / 10) * 10}대
            </div>
            <div className={style.categories}>
              <ul>
                <li>
                  <span>#여행</span>
                </li>
                {categories.map((item) => {
                  return (
                    <li key={item}>
                      #{item.length > 3 ? item.slice(0, 3) + ".." : item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={style.text}>
              {text.length > 95 ? text.slice(0, 95) + " ..." : text}
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
                <Image
                  src="/img/comment.svg"
                  alt="댓글"
                  width={24}
                  height={24}
                />
                <span>{comments}</span>
              </div>
            </div>
          </div>
        </li>
      </a>
    </Link>
  );
}
