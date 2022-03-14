import styles from "@/styles/comment/Toggle.module.scss";

function Toggle({ onClick, hidden }) {
  return (
    <div
      className={`${styles.toggle} ${!hidden && styles.hidden}`}
      onClick={onClick}
    ></div>
  );
}

export default Toggle;
