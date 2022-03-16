export const useSavingAmountSubmit = (data, amount) => {
  const { state, setState, inputs, setInputs } = data;
  const { goal_amount, saving_amount } = amount;
  return (event) => {
    event.preventDefault();
    const { name } = event.target;
    setState({
      ...state,
      [name]: true,
    });
    setInputs({
      ...inputs,
      goal_amount: goal_amount,
      saving_amount: saving_amount,
    });
  };
};
