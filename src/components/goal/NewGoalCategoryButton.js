import styles from "@/styles/goal/NewGoalCategoryButton.module.scss";

export default function CategoryButton({ id, text, value, onClick, clicked }) {
  return (
    <li key={id}>
      <button
        className={`${styles.categoryButton} ${
          clicked?.id === id && styles.clicked
        }`}
        onClick={(event) => {
          event.preventDefault();
          onClick({ id, text, value });
        }}
      >
        <div>{text}</div>
      </button>
    </li>
  );
}
