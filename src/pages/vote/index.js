import Image from "next/image";
import voteBoxDatas from "./voteData";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import server from "@/config/server";
import axios from "axios";

function Vote() {
  const router = useRouter();

  //서버에서 데이터 가져오기
  const voteDatas = async () => {
    try {
      return await axios.get(`${server}/api/vote`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(voteDatas.data);

  return (
    <>
      <Head>
        <title>Vote</title>
      </Head>
      <main>
        {/* Banner */}
        <div className="vote_banner_box_container">
          <div className="vote_banner_box">
            <div>
              <h1 className="banner_box_title">저축러의 고민해결소</h1>
              <p className="banner_box_sub">
                저축에 관한 고민을 나누고
                <br />
                투표하며 함께 고민을 해결해요.
              </p>
            </div>
            <div className="img_character_money" width={82} height={67}>
              <Image className="character_money" layout="responsive" src="/img/char.svg" alt="character" width={82} height={67} />
            </div>
          </div>
        </div>
        {/* VoteBox */}
        <section className="vote_box_list">
          <div className="vote_box_list_container">
            {/* 동적 라우팅 : 여기서 목데이터를 사용했는데, id를 사용해 아니라면 어떤 파람 */}
            {voteBoxDatas.results.map((voteBoxData) => (
              <Link href={`/vote/${voteBoxData.title}`} key={voteBoxData.title}>
                <a>
                  <div className="vote_box">
                    <div className="subject_box">
                      <p>{voteBoxData.title}</p>
                      <span>{voteBoxData.text}</span>
                    </div>
                    {voteBoxData.voteSelect.map((selectItem) => (
                      <div key={selectItem.item} className="vote_select-items">
                        <input type="radio" id={selectItem.item} name="vote" value={selectItem.item} disabled />
                        <label htmlFor={selectItem.item}>{selectItem.item}</label>
                      </div>
                    ))}
                    <div className="favorite_comment">
                      <div className="favorite">
                        <Image src="/img/Favorite.png" alt="Favorite" width={18} height={16} />
                        <span>{voteBoxData.likes}</span>
                      </div>
                      <div>
                        <Image src="/img/comment.svg" alt="Comment" width={19} height={19} />
                        <span>{voteBoxData.voteComments.length}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
        <style jsx>{`
          /* Mobile */
          .vote_banner_box_container {
            background-color: #5791ff;
            height: 128px;
          }
          .vote_banner_box {
            /* border: 1px solid red; */
            margin: 0 auto;
            padding: 23px 10px 0 20px;
            width: 320px;
            box-sizing: border-box;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          .banner_box_title {
            font-size: 22px;
            line-height: 28px;
            font-weight: 700;
            margin: 0 0 8px 0;
          }
          .banner_box_sub {
            font-size: 13px;
            line-height: 20px;
            font-weight: 400;
          }
          .img_character_money {
            width: 82px;
            height: 67px;
            padding-bottom: 5px;
          }
          .vote_box_list {
            background-color: #eef7ff;
            box-sizing: border-box;
            padding: 0;
          }
          .vote_box_list_container {
            padding: 20px 0;
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
          .vote_box {
            position: relative;
            margin: 0 auto;
            /* border: 1px solid red; */
            background-color: #fff;
            width: 276px;
            height: 340px;
            box-sizing: border-box;
            box-shadow: 0px 4px 10px 4px #e3e9f0;
            border-radius: 8px;
            padding: 20px 21px 20px 20px;
            margin-bottom: 16px;
          }
          .subject_box {
            /* border: 1px solid red; */
            /* margin-right: 12px; */
            padding-bottom: 12px;
            margin-bottom: 10px;
            border-bottom: 1px solid #e3e7ed;
          }
          .subject_box p {
            /* border: 1px solid red; */
            /* height: 48px;
          box-sizing: border-box; */
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            margin: 0;
            margin-bottom: 8px;
          }
          .subject_box span {
            font-size: 13px;
            font-weight: 400;
            line-height: 20px;
            margin: 0;
          }
          .vote_select-items {
            display: flex;
            align-items: center;
            background-color: #f6f6f6;
            height: 38px;
            border-radius: 8px;
            margin-bottom: 8px;
            padding-left: 12px;
          }
          .vote_select-items label {
            font-size: 13px;
            font-weight: 400;
            margin-left: 7.46px;
          }
          input[type="radio"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            border: 1px solid #b2b2b2;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background-color: #fff;
          }
          .favorite_comment {
            position: absolute;
            bottom: 15px;
            height: 18px;
            font-size: 13px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .favorite_comment div {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .favorite_comment span {
            margin-left: 4px;
          }
          .favorite {
            border: 1px solid red;
            margin-right: 11px;
          }

          /* Tablet  */
          @media (min-width: 576px) {
            .vote_banner_box_container {
              background-color: #5791ff;
              height: 196px;
            }
            .vote_banner_box {
              /* border: 1px solid green; */
              box-sizing: border-box;
              margin: 0 auto;
              height: 100%;
              width: 700px;

              color: #fff;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .banner_box_title {
              font-size: 28px;
              line-height: 36px;
              font-weight: 700;
              margin: 0 0 18px 0;
            }
            .banner_box_sub {
              font-size: 16px;
              line-height: 24px;
              font-weight: 400;
            }
            .img_character_money {
              width: 176px;
              height: 143px;
              padding-bottom: 5px;
            }
            .vote_box_list {
              background-color: #eef7ff;
              box-sizing: border-box;
              padding: 0;
            }
            .vote_box_list_container {
              /* border: 1px solid green; */
              padding: 28px 0;
              width: 600px;
              display: flex;
              flex-wrap: wrap;
              margin: 0 auto;
            }
          }
          /* Desktop */
          @media (min-width: 1200px) {
            .vote_banner_box_container {
              background-color: #5791ff;
              height: 246px;
            }
            .vote_banner_box {
              width: 880px;
              margin: 0 auto;
              padding: 36px 0 0;
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
            }
            .vote_box_list {
              background-color: #eef7ff;
            }
            .vote_box_list_container {
              /* border: 1px solid green; */
              width: 900px;
              display: flex;
              flex-wrap: wrap;
              margin: 0 auto;
            }
          }
        `}</style>
      </main>
    </>
  );
}

export default Vote;
