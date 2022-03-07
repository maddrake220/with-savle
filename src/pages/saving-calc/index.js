import CalcInputBox from "@/components/saving-calc/CalcInputBox";
import SavingCalcStep from "@/components/saving-calc/SavingCalcStep";
import ShortCutBar from "@/components/ShortcutBar";
import { useState } from "react";
import Character from "public/layout/character.svg";
import { useBreakpoint } from "@/hooks/useBreakpoint";

function SavingCalc() {
  const [inputs, setInputs] = useState({ goal: "", goal_amount: "", saving_amount: "" });
  const [state, setState] = useState({ next: false, result: false, done: false });
  const data = { inputs, setInputs, state, setState };
  const { sm: isMobile } = useBreakpoint();

  return (
    <div style={{ background: "#f7f8fa" }}>
      <div className="container">
        <SavingCalcStep state={state} />
        <CalcInputBox data={data} />
        <Character width={isMobile ? "141px " : "311px"} style={{ display: "block", margin: "0 auto" }} />
      </div>
      <ShortCutBar />
    </div>
  );
}

export default SavingCalc;
