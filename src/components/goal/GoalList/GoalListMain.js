import React, { useState } from "react";

import GoalCard from "@/components/goal/GoalCard";
import GoalDropdown from "@/components/goal/GoalDropdown";
import styles from "@/styles/goal/GoalList.module.scss";
import {
  ageRange,
  dataDisplayHandler,
  dropdownOptions,
  NEWEST,
} from "@/utils/index";

import GoalListMainCategory from "./GoalListMainCategory";

export default function GoalListMain({ queryMatch, data }) {
  const skeletonView = Array.from({ length: 9 }).fill(0);
  const [selectedDropdown, setSelectedDropdown] = useState(NEWEST);
  const [selectedAge, setSelectedAge] = useState(ageRange);

  const handleMenuChange = (event) => {
    setSelectedDropdown(event.target.value);
  };

  return (
    <main>
      <GoalListMainCategory
        queryMatch={queryMatch}
        setFiltered={setSelectedAge}
      />
      <div className={`${styles.goalListWrapper} container`}>
        <div className={styles.goalDropdown}>
          <GoalDropdown
            label=""
            options={dropdownOptions}
            value={selectedDropdown}
            onChange={handleMenuChange}
          />
        </div>
        <ul className={styles.goalList}>
          {!data
            ? skeletonView.map((v, index) => <GoalCard key={index} />)
            : dataDisplayHandler(data, selectedAge, selectedDropdown).map(
                (value, index) => (
                  <GoalCard
                    key={index}
                    id={value.id}
                    age={value.age}
                    categories={value.categories}
                    comments={value.comments}
                    likes={value.likes}
                    text={value.text}
                  />
                ),
              )}
        </ul>
      </div>
    </main>
  );
}
