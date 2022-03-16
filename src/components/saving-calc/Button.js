import styles from "@/styles/saving-calc/Button.module.scss";

function Button({ handleSubmit, handleReset, focus, name }) {
  return (
    <button
      name={name}
      onClick={name === "done" ? handleReset : handleSubmit}
      className={`${styles.button} ${focus ? styles.next : ""} ${
        name === "done" ? styles.done : ""
      }`}
      disabled={!focus ? "disabled" : ""}
    >
      {name === "next" && "다음"}
      {name === "result" && "결과보기"}
      {name === "done" && "다시하기"}
    </button>
  );
}

export default Button;
