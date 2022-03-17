import style from "@/styles/common/Error.module.scss";

export function SubTitle({ type, children }) {
  return (
    <span className={`${style.sub_title} ${style[type.toString()]}`}>
      {children}
    </span>
  );
}
