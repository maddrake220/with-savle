import Image from "next/image";
import React from "react";

import styles from "@/styles/goal/NewGoalForm.module.scss";
export default function NewGoalHeader({ matchQuery }) {
  return (
    <>
      <h1>목표 작성하기</h1>
      <div className={styles.modalTop}>
        <div
          className={styles.newGoalChar}
          style={{ display: matchQuery?.sm ? "none" : "block" }}
        >
          <Image
            width={101}
            height={51}
            src="/img/newgoalchar.svg"
            alt="newgoal"
          />
        </div>
      </div>
    </>
  );
}
