import Image from "next/image";
import style from "styles/goal/MainGoal.module.scss";

export default function MainGoalTitle() {
  return (
    <div className={style.main_title}>
      <Image src="/img/receipt.svg" alt="배경이미지" width={40} height={40} />
      <h1>
        세이블에서 목표달성,
        <br /> 함께해요!
      </h1>
      <span>다른 사람들과 목표를 공유해 보아요.</span>
    </div>
  );
}
