import { useCallback, useState } from "react";

export function useGoalInput(data) {
  const [goal, setGoal] = useState("");
  const [inputs, setInputs, state, setState] = data;

  const nextButtonFocus = goal.length > 0 && goal.length < 21;

  const handleChange = useCallback((event) => {
    setGoal(event.target.value);
  }, []);

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

  return [goal, nextButtonFocus, handleChange, handleSubmit];
}
