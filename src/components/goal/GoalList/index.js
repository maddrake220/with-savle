import { fetcher } from "src/api";
import useSWR from "swr";

import { useBreakpoint } from "@/hooks/index";
import styles from "@/styles/goal/GoalList.module.scss";
import { GOAL_ADDRESS } from "@/utils/index";

import GoalListHeader from "./GoalListHeader";
import GoalListMain from "./GoalListMain";
import GoalListModal from "./GoalListModal";

export default function GoalList() {
  const { data, error } = useSWR(GOAL_ADDRESS, fetcher(true), {
    revalidateOnFocus: false,
  });
  const queryMatch = useBreakpoint();

  if (error) {
    return;
  }
  return (
    <section className={styles.goalListContainer}>
      <GoalListHeader queryMatch={queryMatch} />
      <GoalListMain queryMatch={queryMatch} data={data} />
      <GoalListModal queryMatch={queryMatch} />
    </section>
  );
}
