import MainGoalPostForm from "@/components/goal/MainGoalPostForm";
import { useModal } from "@/hooks/index";
import styles from "@/styles/goal/MainGoalPostItem.module.scss";

import NewGoalComplete from "./NewGoalComplete";

export default function MainGoalPostItem() {
  const [isToggleModal, toggleModal] = useModal();

  return (
    <div className={styles.MainGoalPostItem}>
      <MainGoalPostForm toggleModal={toggleModal} />
      <div
        className={`${
          isToggleModal ? styles.newGoalModalBack : styles.displayNone
        }`}
        onClick={toggleModal}
      >
        <NewGoalComplete toggleModal={toggleModal} />
      </div>
    </div>
  );
}
