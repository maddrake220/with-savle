const development = process.env.NODE_ENV !== "production";

export default development
  ? "http://localhost:3000/"
  : "https://with-savle.herokuapp.com/";
