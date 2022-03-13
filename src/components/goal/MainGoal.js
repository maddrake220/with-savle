import MainGoalButton from "@/components/Goal/MainGoalButton";
import MainGoalPostItem from "@/components/Goal/MainGoalPostItem";
import MainGoalSlider from "@/components/Goal/MainGoalSlider";
import MainGoalTitle from "@/components/Goal/MainGoalTitle";

import style from "./MainGoal.module.scss";

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
