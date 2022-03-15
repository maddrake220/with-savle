import Character from "public/layout/character.svg";

import Seo from "@/components/common/Seo";
import ShortCutBar from "@/components/common/ShortcutBar";
import CalcInputBox from "@/components/saving-calc/CalcInputBox";
import SavingCalcStep from "@/components/saving-calc/SavingCalcStep";
import { useSavingCalc, useWidth } from "@/hooks/index";

function SavingCalc() {
  const data = useSavingCalc();
  return (
    <div style={{ background: "#f7f8fa" }}>
      <Seo
        title="저축계산기"
        desc="가상 저축 계산으로 미래를 설계해서 사람들과 목표를 공유해보아요"
        ogUrl="https://with-savle.herokuapp.com/saving-calc"
        ogTitle="저축계산기"
        ogDesc="가상 저축 계산으로 미래를 설계해서 사람들과 목표를 공유해보아요"
      />
      <div className="container">
        <SavingCalcStep data={data} />
        <CalcInputBox data={data} />
        <Character
          width={useWidth(141, 214, 311, "px")}
          style={{ display: "block", margin: "0 auto" }}
        />
      </div>
      <ShortCutBar />
    </div>
  );
}

export default SavingCalc;
