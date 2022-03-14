import axios from "axios";
import { SWRConfig } from "swr";

import GoalList from "@/components/goal/GoalList";
import server from "@/config/server";
import { revalidate } from "@/utils/goal/constants";

export default function Goal({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <GoalList />
    </SWRConfig>
  );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps = async () => {
  const response = await axios.get(`${server}/api/goal`);
  return {
    props: {
      fallback: {
        "/api/goal": response.data.results,
      },
    },
    revalidate,
  };
};
