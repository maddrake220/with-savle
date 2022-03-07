const comma = (value) => {
  const result = String(value)
    .replace(/[^0-9]/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return result;
};

export default comma;
