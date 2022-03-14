import Character from "public/layout/character.svg";

import ShortCutBar from "@/components/common/ShortcutBar";
import CalcInputBox from "@/components/Saving-calc/CalcInputBox";
import SavingCalcStep from "@/components/Saving-calc/SavingCalcStep";
import { useSavingCalc, useWidth } from "@/hooks/index";

function SavingCalc() {
  const data = useSavingCalc();
  return (
    <div style={{ background: "#f7f8fa" }}>
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
