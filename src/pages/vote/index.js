import "react-loading-skeleton/dist/skeleton.css";

import axios from "axios";
import Link from "next/link";
import { fetchGetVote } from "src/api/vote";
import useSWR, { SWRConfig } from "swr";

import Seo from "@/components/common/Seo";
import SkeletonBox from "@/components/vote/SkeletonBox";
import VoteBanner from "@/components/vote/VoteBanner";
import VoteBox from "@/components/vote/VoteBox";
import style from "@/styles/vote/VoteIndex.module.scss";

const fetcher = (server) => axios.get(server).then((r) => r.data);

export const vote_address = "/api/vote";

export default function Vote({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Votelist />
    </SWRConfig>
  );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps() {
  const response = await fetchGetVote();
  return {
    props: {
      fallback: {
        "/api/vote": response.data.results,
      },
    },
  };
}
function Votelist() {
  const {
    data: { results: data },
  } = useSWR(vote_address, fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <>
      <Seo
        title={"고민해결소 | 쉽고 FUN한 저축, 세이블"}
        keyword={("고민해결소", "고민투표")}
        desc={
          "저축러의 고민해결소. 저축에 관한 고민을 나누고 투표하며 함께 고민을 해결해요."
        }
        ogUrl={`https://savle.net/vote`}
        ogTitle={"저축러의 고민해결소"}
        ogDesc={"저축에 관한 고민을 나누고 투표하며 함께 고민을 해결해요."}
      />
      <VoteBanner />
      <section className={style.vote_box_list}>
        <ul className={style.vote_box_list_container}>
          {data &&
            data.map((voteBoxData) => (
              <li key={voteBoxData.id}>
                <Link href={`/vote/${voteBoxData.id}`}>
                  <a className={style.link}>
                    <VoteBox voteBoxData={voteBoxData} />
                  </a>
                </Link>
              </li>
            ))}
        </ul>
        <div className={style.loading_page}>
          {!data &&
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <SkeletonBox key={index} />
            ))}
        </div>
      </section>
    </>
  );
}
