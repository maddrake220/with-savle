import style from "@/styles/common/Error.module.scss";

function ErrorSubTitle({ type, children }) {
  return (
    <span className={`${style.sub_title} ${style[type.toString()]}`}>
      {children}
    </span>
  );
}

export default ErrorSubTitle;
