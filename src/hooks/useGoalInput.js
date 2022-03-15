import { useCallback, useState } from "react";

export const useGoalInput = (data) => {
  const [goal, setGoal] = useState("");
  const [inputs, setInputs, state, setState] = data;

  const nextButtonFocus = goal.length > 0 && goal.length < 21;

  const handleChange = useCallback((event) => {
    if (event.target.value === " ") return;
    setGoal(event.target.value);
  }, []);

  const handelKeypress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { id } = event.target;
    setState({
      ...state,
      [id]: true,
    });
    setInputs({
      ...inputs,
      goal: goal,
    });
  };

  return [goal, nextButtonFocus, handleChange, handelKeypress, handleSubmit];
};
