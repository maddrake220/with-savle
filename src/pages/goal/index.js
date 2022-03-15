import { fetchGetGoal } from "src/api/goal";
import { SWRConfig } from "swr";

import GoalList from "@/components/goal/GoalList";
import { ONE_WEEK } from "@/utils/constants";

export default function Goal({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <GoalList />
    </SWRConfig>
  );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps = async () => {
  const response = await fetchGetGoal();
  return {
    props: {
      fallback: {
        "/api/goal": response.data.results,
      },
    },
    revalidate: ONE_WEEK,
  };
};
