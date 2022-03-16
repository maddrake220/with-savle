import style from "@/styles/common/Error.module.scss";

export function Title({ children }) {
  return <h1 className={style.title}>{children}</h1>;
}
