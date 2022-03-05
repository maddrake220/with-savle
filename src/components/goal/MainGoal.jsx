import MainGoalTitle from "./MainGoalTitle";
import MainGoalSlider from "@/components/goal/MainGoalSlider";
import MainGoalButton from "./MainGoalButton";

export default function MainGoal() {
  return (
    <div className="wrapper">
      <div className="container">
        <MainGoalTitle />
        <div>{/* 목표 작성 기능 */}</div>
        <MainGoalSlider />
        <MainGoalButton />
      </div>
      <style jsx>
        {`
          .wrapper {
            width: 100%;
            height: 590px;
            background: #f0f6fb;
          }
        `}
      </style>
    </div>
  );
}
