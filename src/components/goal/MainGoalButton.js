/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import style from "styles/MainGoal.module.scss";

export default function MainGoalButton() {
  return (
    <div className={style.main_goal_btns}>
      <a href="https://savle.net/" alt="">
        <div className={`${style.btn} ${style.blog}`}>추천 목표 보러가기</div>
      </a>

      <Link href={`/goal`}>
        <div className={`${style.btn} ${style.more}`}>더 많은 목표 보기</div>
      </Link>
    </div>
  );
}
