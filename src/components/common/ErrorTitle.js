import style from "@/styles/common/Error.module.scss";

function ErrorTitle({ children }) {
  return <h1 className={style.title}>{children}</h1>;
}

export default ErrorTitle;
