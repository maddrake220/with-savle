import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "styles/goal/goal-list.module.scss";
import useSWR from "swr";

import CategoryButton from "@/components/Goal/CategoryButton";
import GoalCard from "@/components/Goal/GoalCard";
import GoalDropdown from "@/components/Goal/GoalDropdown";
import NewGoalForm from "@/components/Goal/NewGoalForm";
import { useModal } from "@/hooks/index";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { ageList, ageRange } from "@/utils/goal/data";
import { checkRangeAge, getSize } from "@/utils/goal/functions";
import { fetcher, goal_address } from "@/utils/swr";

export default function GoalList() {
  const skeletonView = Array.from({ length: 9 }).fill(0);
  const {
    data: { results: data },
    error,
  } = useSWR(goal_address, fetcher, {
    revalidateOnFocus: false,
  });
  const queryMatch = useBreakpoint();
  const [clickedAge, setClickedAge] = useState(0);
  const [filtered, setFiltered] = useState(ageRange);
  const [selectedDropdown, setSelectedDropdown] = useState("newest");
  const [isToggleModal, toggleModal] = useModal();
  const handleMenuChange = (event) => {
    setSelectedDropdown(event.target.value);
  };
  const onClick = useCallback((id) => {
    setClickedAge(id);
  }, []);
  useEffect(() => {
    setFiltered(checkRangeAge(clickedAge));
  }, [clickedAge]);

  if (error) {
    return;
  }
  return (
    <section className={styles.goalListContainer}>
      <Head>
        <title>savle 목표달성</title>
        <meta keyword="" />
        <meta contents="" />
      </Head>
      <header>
        <div className={`${styles.headerInfo} container`}>
          <h1>세이블에서 목표달성, 함께해요!</h1>
          <p>다른 사람들과 목표를 공유해보아요.</p>
        </div>
        <div className={styles.goalHeaderImage}>
          <Image
            src="/img/goalchar.svg"
            width={getSize(queryMatch, true)}
            height={getSize(queryMatch, false)}
            alt=""
          />
        </div>
      </header>
      <main>
        <div
          className={`${queryMatch?.sm ? styles.ageListSmall : "container"}`}
        >
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
        <div className={`${styles.goalListWrapper} container`}>
          <div className={styles.goalDropdown}>
            <GoalDropdown
              label=""
              options={[
                { label: "최신순", value: "newest" },
                { label: "오래된순", value: "oldest" },
              ]}
              value={selectedDropdown}
              onChange={handleMenuChange}
              style={{
                backgroundColor: "transparent",
                border: "none",
                position: "absolute",
                right: "0",
                fontSize: "0.813rem",
                lineHeight: "1.25rem",
                color: "#111",
                outline: "none",
              }}
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
        <NewGoalForm toggleModal={toggleModal} />
      </div>
    </section>
  );
}
