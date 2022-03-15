import styles from "@/styles/goal/NewGoalForm.module.scss";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import NewGoalForm from "./NewGoalForm";
import NewGoalHeader from "./NewGoalHeader";

export default function NewGoal({ toggleModal }) {
  const matchQuery = useBreakpoint();

  return (
    <section
      className={styles.newGoal}
      onClick={(event) => event.stopPropagation()}
    >
      <NewGoalHeader matchQuery={matchQuery} />
      <NewGoalForm toggleModal={toggleModal} matchQuery={matchQuery} />
    </section>
  );
}
