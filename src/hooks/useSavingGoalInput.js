import { useCallback, useState } from "react";

export const useSavingGoalInput = () => {
  const [goal, setGoal] = useState("");
  const nextButtonFocus = goal.length > 0 && goal.length < 21;

  const handleChange = useCallback((event) => {
    if (event.target.value === " ") return;
    setGoal(event.target.value);
  }, []);

  return { goal, nextButtonFocus, handleChange };
};
