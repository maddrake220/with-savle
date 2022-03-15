import MainGoalButton from "@/components/goal/MainGoalButton";
import MainGoalPostItem from "@/components/goal/MainGoalPostItem";
import MainGoalSlider from "@/components/goal/MainGoalSlider";
import MainGoalTitle from "@/components/goal/MainGoalTitle";
import style from "@/styles/goal/MainGoal.module.scss";

export default function MainGoal() {
  return (
    <div className={style.main_goal}>
      <div className={`${style.container}`}>
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
