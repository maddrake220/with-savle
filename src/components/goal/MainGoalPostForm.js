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
        height: "33.563rem",
        width: "483px",
        margin: "18px",
        marginBottom: matchQuery.md ? "100px" : "9.125rem",
        top: "3rem",
        left: "0rem",
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <NewGoalHeader matchQuery={matchQuery} />
      <NewGoalForm
        toggleModal={toggleModal}
        matchQuery={matchQuery}
        isToggleModal={true}
      />
    </section>
  );
}
