import React from "react";

import { useBreakpoint } from "@/hooks/index";
import styles from "@/styles/goal/NewGoalForm.module.scss";

import NewGoalForm from "./NewGoal/NewGoalForm";
import NewGoalHeader from "./NewGoal/NewGoalHeader";

export default function MainGoalPostForm({ toggleModal }) {
  const matchQuery = useBreakpoint();
  return (
    <section
      className={styles.newGoal}
      style={{
        position: "relative",
        width: "483px",
        margin: "18px",
        marginBottom: matchQuery.md ? "100px" : "9.125rem",
        top: matchQuery.md ? "1.5rem" : "3rem",
        left: matchQuery.md ? "3rem" : "0",
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={styles.newGoalInner}>
        <NewGoalHeader matchQuery={matchQuery} />
        <NewGoalForm
          toggleModal={toggleModal}
          matchQuery={matchQuery}
          isToggleModal={true}
        />
      </div>
    </section>
  );
}
