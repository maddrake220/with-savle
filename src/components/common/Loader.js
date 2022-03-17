import styles from "@/styles/common/Loader.module.scss";
function Loader() {
  return (
    <div className={styles.Spinner}>
      <span className={styles.SpinnerInner1}></span>
      <span className={styles.SpinnerInner2}></span>
      <span className={styles.SpinnerInner3}></span>
    </div>
  );
}

export default Loader;
