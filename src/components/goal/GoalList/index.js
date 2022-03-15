import styles from "styles/goal/GoalList.module.scss";
import useSWR from "swr";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { fetcher, goal_address } from "@/utils/swr";

import GoalListHeader from "./GoalListHeader";
import GoalListMain from "./GoalListMain";
import GoalListModal from "./GoalListModal";

export default function GoalList() {
  const {
    data: { results: data },
    error,
  } = useSWR(goal_address, fetcher, {
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
