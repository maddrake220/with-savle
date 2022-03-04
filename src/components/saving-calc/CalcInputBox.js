import addAmount from "@/utils/addAmount";
import comma from "@/utils/comma";
import { useCallback, useState } from "react";
import css from "styled-jsx/css";
import AmountInput from "./AmountInput";
import GoalInput from "./GoalInput";
import Result from "./Result";
import ResultFoldBox from "./ResultFoldBox";
import React from "react";

const style = css`
  .box {
    width: 280px;
    padding: 20px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(71, 72, 75, 0.1);
    border-radius: 12px;
    margin: auto;
  }
`;
const CalcInputBox = () => {
  const [inputs, setInputs] = useState({ goal: "", goal_amount: "", saving_amount: "" });
  const [state, setState] = useState({ next: false, result: false });
  const { next, result } = state;
  const { goal, goal_amount, saving_amount } = inputs;

  return (
    <div className="box">
      <>
        {!next && <GoalInput inputs={inputs} setInputs={setInputs} state={state} setState={setState} />}
        {next && !result && <AmountInput inputs={inputs} setInputs={setInputs} state={state} setState={setState} />}
        {result && <Result inputs={inputs} setInputs={setInputs} setState={setState} />}
      </>
      <style jsx>{style}</style>
    </div>
  );
};

export default CalcInputBox;
