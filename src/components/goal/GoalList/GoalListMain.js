import React, { useState } from "react";
import styles from "styles/goal/GoalList.module.scss";

import GoalCard from "@/components/goal/GoalCard";
import GoalDropdown from "@/components/goal/GoalDropdown";
import { ageRange } from "@/utils/goal/data";

import GoalListMainCategory from "./GoalListMainCategory";

const dropdownOptions = [
  { label: "최신순", value: "newest" },
  { label: "오래된순", value: "oldest" },
];

export default function GoalListMain({ queryMatch, data }) {
  const skeletonView = Array.from({ length: 9 }).fill(0);
  const [selectedDropdown, setSelectedDropdown] = useState("newest");
  const [filtered, setFiltered] = useState(ageRange);

  const handleMenuChange = (event) => {
    setSelectedDropdown(event.target.value);
  };

  return (
    <main>
      <GoalListMainCategory queryMatch={queryMatch} setFiltered={setFiltered} />
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
            : data
                ?.filter((value) => {
                  return (
                    value.age >= filtered.start && value.age <= filtered.end
                  );
                })
                .sort((a, b) => {
                  const d1 = Date.parse(a.createAt);
                  const d2 = Date.parse(b.createAt);
                  return selectedDropdown === "oldest" ? d1 - d2 : d2 - d1;
                })
                .map((value, index) => (
                  <GoalCard
                    key={index}
                    id={value.id}
                    age={value.age}
                    categories={value.categories}
                    comments={value.comments}
                    likes={value.likes}
                    text={value.text}
                  />
                ))}
        </ul>
      </div>
    </main>
  );
}
