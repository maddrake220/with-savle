import style from "@/styles/common/Error.module.scss";

export function Content({ children }) {
  return <span className={style.content}>{children}</span>;
}
