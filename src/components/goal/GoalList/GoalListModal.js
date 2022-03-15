import Image from "next/image";
import React from "react";
import styles from "styles/goal/GoalList.module.scss";

import NewGoal from "@/components/goal/NewGoal";
import { useModal } from "@/hooks/index";

export default function GoalListModal({ queryMatch }) {
  const [isToggleModal, toggleModal] = useModal();
  return (
    <div>
      <div
        className={!isToggleModal ? styles.newGoal : styles.displayNone}
        onClick={toggleModal}
      >
        <Image
          src="/img/newgoal.svg"
          alt=""
          width={queryMatch?.sm ? 59 : 110}
          height={queryMatch?.sm ? 59 : 110}
        />
      </div>
      <div
        className={isToggleModal ? styles.newGoalModalBack : styles.displayNone}
        onClick={toggleModal}
      >
        <NewGoal toggleModal={toggleModal} />
      </div>
    </div>
  );
}
