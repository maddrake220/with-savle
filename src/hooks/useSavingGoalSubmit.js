export const useSavingGoalSubmit = (data, goal) => {
  const { inputs, setInputs, state, setState } = data;
  return (event) => {
    event.preventDefault();
    const { name } = event.target;

    setState({
      ...state,
      [name]: true,
    });
    setInputs({
      ...inputs,
      goal: goal,
    });
  };
};
