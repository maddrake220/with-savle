import React, { useCallback, useEffect, useState } from "react";

import Loader from "@/components/common/Loader";
import GoalCard from "@/components/goal/GoalCard";
import GoalDropdown from "@/components/goal/GoalDropdown";
import { useIntersectionObserver } from "@/hooks/index";
import styles from "@/styles/goal/GoalList.module.scss";
import { NEWEST } from "@/utils/constants";
import { ageRange, dataDisplayHandler, dropdownOptions } from "@/utils/index";

import GoalListMainCategory from "./GoalListMainCategory";

export default function GoalListMain({ queryMatch, data }) {
  const skeletonView = Array.from({ length: 9 }).fill(0);
  const [selectedDropdown, setSelectedDropdown] = useState(NEWEST);
  const [selectedAge, setSelectedAge] = useState(ageRange);
  const [currentDataLength, setCurrentDataLength] = useState(10);
  const [target, setTarget] = useState(0);
  const [viewPerScroll, setViewPerScroll] = useState(10);
  const changeView = () => {
    if (data.length > viewPerScroll) {
      setViewPerScroll((count) => count + 10);
    }
  };
  const [isLoaded] = useIntersectionObserver(
    changeView,
    target,
    currentDataLength <= viewPerScroll,
  );

  const handleMenuChange = useCallback((event) => {
    setSelectedDropdown(event.target.value);
  }, []);

  useEffect(() => {
    setViewPerScroll(10);
  }, [selectedDropdown, selectedAge]);

  useEffect(() => {
    if (data !== undefined) {
      setCurrentDataLength(
        dataDisplayHandler(data, selectedAge, selectedDropdown).getLength,
      );
    }
  }, [data, selectedAge, selectedDropdown]);
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
            : dataDisplayHandler(
                data,
                selectedAge,
                selectedDropdown,
                viewPerScroll,
              ).sorted.map((value, index) => (
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
        <div ref={setTarget} style={{ position: "relative" }}>
          {isLoaded && <Loader />}
        </div>
      </div>
    </main>
  );
}
