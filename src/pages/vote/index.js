import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSWR, { SWRConfig } from "swr";

import SkeletonBox from "@/components/Vote/SkeletonBox";
import VoteBox from "@/components/Vote/VoteBox";
import server from "@/config/server";
const fetcher = (server) => axios.get(server).then((r) => r.data);

export const vote_address = "/api/vote";
function Votelist() {
  const {
    data: { results: data },
  } = useSWR(vote_address, fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <>
      <Head>
        <title>Vote</title>
      </Head>
      <>
        <section className="banner_box_container">
          <h1 className="banner_box_title">저축러의 고민해결소</h1>
          <p className="banner_box_sub">
            저축에 관한 고민을 나누고
            <br />
            투표하며 함께 고민을 해결해요.
          </p>
          <div className="img_character_money" width={82} height={67}>
            <Image
              className="character_money"
              layout="responsive"
              src="/img/char.svg"
              alt="character"
              width={82}
              height={67}
              priority={true}
            />
          </div>
        </section>
        <section className="vote_box_list">
          <ul className="vote_box_list_container">
            {data &&
              data.map((voteBoxData) => (
                <li key={voteBoxData.id}>
                  <Link href={`/vote/${voteBoxData.id}`}>
                    <a>
                      <VoteBox voteBoxData={voteBoxData} />
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
          <div className="loading_page">
            {!data &&
              [1, 2, 3, 4, 5, 6].map((item, index) => (
                <SkeletonBox key={index} />
              ))}
          </div>
        </section>
        <style jsx>{`
          /* Mobile */
          .loading_page {
            margin: 0 auto;
            width: 276px;
          }
          .banner_box_container {
            position: relative;
            background-color: #5791ff;
            height: 128px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 20px;
            box-sizing: border-box;
            color: #fff;
          }
          .banner_box_title {
            font-size: 22px;
            line-height: 28px;
            font-weight: 700;
            margin: 0 0 8px 0;
            padding: 0;
          }
          .banner_box_sub {
            font-size: 13px;
            line-height: 20px;
            font-weight: 400;
            margin: 0;
          }
          .img_character_money {
            position: absolute;
            bottom: 15px;
            right: 13px;
            width: 82px;
            height: 67px;
          }
          .vote_box_list {
            background-color: #eef7ff;
            box-sizing: border-box;
            padding: 20px 0;
          }
          .vote_box_list_container {
            list-style: none;
            margin: 0px;
            padding: 0px;
            width: fit-content;
            margin: 0 auto;
          }
          a {
            color: #000;
            text-decoration: none;
            outline: none;
          }
          a:hover,
          a:active {
            text-decoration: none;
          }

          /* Tablet  */
          @media (min-width: 576px) {
            .loading_page {
              margin: 0 auto;
              width: 590px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .banner_box_container {
              height: 196px;
              padding: 0 80px;
            }
            .banner_box_title {
              font-size: 28px;
              line-height: 36px;
              margin-bottom: 18px;
            }
            .banner_box_sub {
              font-size: 16px;
              line-height: 24px;
            }
            .img_character_money {
              bottom: 20px;
              right: 70px;
              width: 176px;
              height: 143px;
            }
            .vote_box_list {
              padding: 28px 0;
            }
            .vote_box_list_container {
              width: 590px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
          }
          /* Desktop */
          @media (min-width: 1200px) {
            .loading_page {
              margin: 0 auto;
              width: 1200px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .banner_box_container {
              height: 246px;
              padding: 0 160px;
            }
            .banner_box_title {
              font-size: 40px;
              line-height: 55px;
              margin: 0 0 20px 0;
            }
            .banner_box_sub {
              font-size: 28px;
              line-height: 38px;
              font-weight: 400;
            }
            .img_character_money {
              width: 241px;
              height: 197px;
              bottom: 15px;
              right: 160px;
            }
            .vote_box_list {
              padding: 40px 0;
            }
            .vote_box_list_container {
              width: 1200px;
              display: flex;
              flex-wrap: wrap;
              margin: 0 auto;
            }
          }
        `}</style>
      </>
    </>
  );
}

export default function Vote({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Votelist />
    </SWRConfig>
  );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps() {
  const response = await axios.get(`${server}/api/vote`);
  return {
    props: {
      fallback: {
        "/api/vote": response.data.results,
      },
    },
  };
}
