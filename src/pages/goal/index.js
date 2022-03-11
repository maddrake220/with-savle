import axios from "axios";
import { SWRConfig } from "swr";

import GoalList from "@/components/goal/GoalList";
import server from "@/config/server";

export default function Goal({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <GoalList />
    </SWRConfig>
  );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps = async () => {
  const res = await axios.get(`${server}/api/goal`);
  return {
    props: {
      fallback: {
        "/api/goal": res.data.results,
      },
    },
    revalidate: 604_800,
  };
};
