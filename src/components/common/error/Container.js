import style from "@/styles/common/Error.module.scss";

export function Container({ children }) {
  return (
    <div className={style.container}>
      <div className={style.inner_container}>{children}</div>
    </div>
  );
}
