import React from "react";
import styles from "@/styles/goal/NewGoalForm.module.scss";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import NewGoalForm from "./NewGoal/NewGoalForm";
import NewGoalHeader from "./NewGoal/NewGoalHeader";

export default function MainGoalPostForm({ toggleModal }) {
  const matchQuery = useBreakpoint();
  return (
    <section
      className={styles.newGoal}
      style={{
        position: "relative",
        height: "33.563rem",
        width: "483px",
        marginLeft: "18px",
        marginBottom: "10rem",
        top: "3rem",
        left: "0rem",
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <NewGoalHeader matchQuery={matchQuery} />
      <NewGoalForm toggleModal={toggleModal} matchQuery={matchQuery} />
    </section>
  );
}
