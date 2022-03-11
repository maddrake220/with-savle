import MainGoalButton from "@/components/Goal/MainGoalButton";
import MainGoalPostItem from "@/components/Goal/MainGoalPostItem";
import MainGoalSlider from "@/components/Goal/MainGoalSlider";
import MainGoalTitle from "@/components/Goal/MainGoalTitle";

export default function MainGoal() {
  return (
    <div className="wrapper">
      <div className="container">
        <MainGoalTitle />
        <div className="respon">
          <MainGoalPostItem />
          <MainGoalSlider />
        </div>
        <MainGoalButton />
      </div>
      <style jsx>
        {`
          .wrapper {
            background: #f0f6fb;
          }
          .container {
            padding-top: 12px;
            padding-bottom: 27px;
          }
          @media (min-width: 575px) {
            .container {
              width: 576px;
            }
          }
          @media (min-width: 1200px) {
            .container {
              width: 1200px;
              padding-top: 86px;

              padding-bottom: 106px;
            }
            .respon {
              display: flex;
              padding-bottom: 100px;
            }
          }
        `}
      </style>
    </div>
  );
}
