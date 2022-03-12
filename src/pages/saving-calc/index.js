import Character from "public/layout/character.svg";

import ShortCutBar from "@/components/Common/ShortcutBar";
import CalcInputBox from "@/components/Saving-calc/CalcInputBox";
import SavingCalcStep from "@/components/Saving-calc/SavingCalcStep";
import useSavingCalc from "@/hooks/useSavingCalc";
import useWidth from "@/hooks/useWidth";

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
