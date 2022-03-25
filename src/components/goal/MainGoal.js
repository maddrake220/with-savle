import MainGoalButton from "@/components/goal/MainGoalButton";
import MainGoalPostItem from "@/components/goal/MainGoalPostItem";
import MainGoalSlider from "@/components/goal/MainGoalSlider";
import MainGoalTitle from "@/components/goal/MainGoalTitle";
import { useBreakpoint } from "@/hooks/index";
import style from "@/styles/goal/MainGoal.module.scss";

export default function MainGoal() {
  const matchQuery = useBreakpoint();
  return (
    <div className={style.main_goal}>
      <div className={`${style.container}`}>
        <MainGoalTitle />
        {matchQuery.md === true && matchQuery.sm === false ? (
          <MainGoalButton />
        ) : (
          <></>
        )}
        <div className={style.respon}>
          <MainGoalPostItem />
          <MainGoalSlider />
        </div>
        {matchQuery.sm === true ? <MainGoalButton /> : <></>}
      </div>
    </div>
  );
}
