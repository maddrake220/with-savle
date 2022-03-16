import { fetcher } from "src/api";
import { getGoalUrl } from "src/api/goal";
import useSWR from "swr";

import { useBreakpoint } from "@/hooks/index";
import styles from "@/styles/goal/GoalList.module.scss";

import GoalListHeader from "./GoalListHeader";
import GoalListMain from "./GoalListMain";
import GoalListModal from "./GoalListModal";

export default function GoalList() {
  const { data, error } = useSWR(getGoalUrl, fetcher(true), {
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
