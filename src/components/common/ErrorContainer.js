import style from "@/styles/common/Error.module.scss";

function ErrorContainer({ children }) {
  return (
    <div className={style.container}>
      <div className={style.inner_container}>{children}</div>
    </div>
  );
}

export default ErrorContainer;
