import React, { useCallback, useState } from "react";

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
  const [posts, setPosts] = useState({
    data: data.slice(0, 10),
    viewByScroll: 10,
  });
  const setDatabyScroll = () => {
    setPosts((posts) => {
      return {
        data: [...data.slice(0, posts.viewByScroll)],
        viewByScroll: posts.viewByScroll + 10,
      };
    });
  };
  const [target, setTarget] = useState(0);
  const [isLoaded] = useIntersectionObserver(setDatabyScroll, target);

  const handleMenuChange = useCallback((event) => {
    setSelectedDropdown(event.target.value);
  }, []);

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
          {!posts.data
            ? skeletonView.map((v, index) => <GoalCard key={index} />)
            : dataDisplayHandler(posts.data, selectedAge, selectedDropdown).map(
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
        <div ref={setTarget} style={{ position: "relative" }}>
          {isLoaded && <Loader />}
        </div>
      </div>
    </main>
  );
}
