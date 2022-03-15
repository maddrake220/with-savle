import React from "react";
import styles from "styles/goal/NewGoalForm.module.scss";

import NewGoalCategoryButton from "@/components/goal/NewGoalCategoryButton";
export default function NewGoalAgeSection({
  newGoalAgeList,
  onClickselectedAge,
  selectedAge,
  validationCheck,
}) {
  return (
    <>
      <div className={styles.ageListWrapper}>
        <label>
          <span>연령대</span>
        </label>
        <ul className={styles.ageList}>
          {newGoalAgeList?.map((age) => (
            <NewGoalCategoryButton
              key={age.id}
              id={age.id}
              onClick={onClickselectedAge}
              clicked={selectedAge}
              text={age.text}
              value={age.value}
            />
          ))}
        </ul>
      </div>
      <div style={{ width: "100%" }}>
        {validationCheck && (
          <div className={styles.validationFail}>연령대를 선택 해주세요!</div>
        )}
      </div>
    </>
  );
}
