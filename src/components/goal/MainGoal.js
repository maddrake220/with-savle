import style from "styles/goal/MainGoal.module.scss";

import MainGoalButton from "@/components/Goal/MainGoalButton";
import MainGoalPostItem from "@/components/Goal/MainGoalPostItem";
import MainGoalSlider from "@/components/Goal/MainGoalSlider";
import MainGoalTitle from "@/components/Goal/MainGoalTitle";

export default function MainGoal() {
  return (
    <div className={style.main_goal}>
      <div className={`${style.container} container`}>
        <MainGoalTitle />
        <div className={style.respon}>
          <MainGoalPostItem />
          <MainGoalSlider />
        </div>
        <MainGoalButton />
      </div>
    </div>
  );
}
