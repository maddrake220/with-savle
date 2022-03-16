import style from "@/styles/common/Error.module.scss";

function ErrorContent({ children }) {
  return <span className={style.content}>{children}</span>;
}

export default ErrorContent;
