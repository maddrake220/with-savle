import Character from "public/layout/character.svg";
import { useState } from "react";

import ShortCutBar from "@/components/Common/ShortcutBar";
import CalcInputBox from "@/components/Saving-calc/CalcInputBox";
import SavingCalcStep from "@/components/Saving-calc/SavingCalcStep";
import { useBreakpoint } from "@/hooks/useBreakpoint";

function SavingCalc() {
  const [inputs, setInputs] = useState({ goal: "", goal_amount: "", saving_amount: "" });
  const [state, setState] = useState({ next: false, result: false, done: false });
  const data = { inputs, setInputs, state, setState };
  const { sm: isMobile, md: isTablet } = useBreakpoint();

  return (
    <div style={{ background: "#f7f8fa" }}>
      <div className="container">
        <SavingCalcStep state={state} />
        <CalcInputBox data={data} />
        <Character width={isMobile ? "141px " : isTablet ? "214px" : "311px"} style={{ display: "block", margin: "0 auto" }} />
      </div>
      <ShortCutBar />
    </div>
  );
}

export default SavingCalc;
