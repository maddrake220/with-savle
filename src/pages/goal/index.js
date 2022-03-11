import { SWRConfig } from "swr";
import GoalList from "@/components/goal/GoalList";
import axios from "axios";
import server from "@/config/server";
import { revalidate } from "@/utils/goal/constants";

export default function Goal({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <GoalList />
    </SWRConfig>
  );
}

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
