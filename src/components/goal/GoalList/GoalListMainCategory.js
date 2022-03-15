import React, { useCallback, useEffect, useState } from "react";
import styles from "styles/goal/GoalList.module.scss";

import CategoryButton from "@/components/goal/CategoryButton";
import { ageList } from "@/utils/ageList";
import { checkRangeAge } from "@/utils/checkRangeAge";
export default function GoalListMainCategory({ queryMatch, setFiltered }) {
  const [clickedAge, setClickedAge] = useState(0);
  const onClick = useCallback((id) => {
    setClickedAge(id);
  }, []);
  useEffect(() => {
    setFiltered(checkRangeAge(clickedAge));
  }, [clickedAge, setFiltered]);
  return (
    <div className={`${queryMatch?.sm ? styles.ageListSmall : "container"}`}>
      <ul className={styles.ageList}>
        {ageList.map((age) => (
          <li key={age.id}>
            <CategoryButton
              id={age.id}
              text={age.text}
              backgroundColor={age.backgroundColor}
              onClick={onClick}
              clicked={clickedAge}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
