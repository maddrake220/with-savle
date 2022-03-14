import { useState } from "react";

export function useSavingCalc() {
  const [inputs, setInputs] = useState({
    goal: "",
    goal_amount: "",
    saving_amount: "",
  });
  const [state, setState] = useState({
    next: false,
    result: false,
    done: false,
  });

  return [inputs, setInputs, state, setState];
}
