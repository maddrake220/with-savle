import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import Favorite from "public/img/Favorite.svg";
import server from "@/config/server";
import Link from "next/link";
import { useRouter } from "next/router";
import Comment from "@/components/Comment";

function VoteById({ data }) {
  console.log(data);

  const { id, title, text, likes, voteSelect, voteComments } = data.results;
  // 좋아요 상태관리
  const [like, setLike] = useState(false);
  // 선택한 투표 항목 값 상태관리
  const [selItemValue, setSelItemValue] = useState();
  // 투표하기 버튼 활성화 상태관리
  const [btnColor, setBtnColor] = useState({
    voteBtnBg: "#d5d8dc",
    voteBtntextColor: "#B2B2B2",
  });
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  // 투표 항목 클릭시 상태변화
  const [clickedItem, setClickedItem] = useState(Array(voteSelect.length).fill(false));
  // 전체 투표수 관리
  const [totalVotes, setTotalVotes] = useState(0);
  // 투표했으면 다시 투표 못하게
  const [voted, setVoted] = useState(false);

  //* 좋아요 함수
  const handleLikeToggle = useCallback(() => setLike((prev) => !prev), []);
  //* 선택된 투표 항목 값 관리
  const onChange = (e) => {
    setSelItemValue(e.currentTarget.value);
    setBtnColor(() => ({
      voteBtnBg: "#3178FF",
      voteBtntextColor: "#fff",
    }));
  };
  // * 투표 항목 하나 클릭했을 때!
  const handleClick = (idx) => {
    const newArr = Array(voteSelect.length).fill(false);
    newArr[idx] = true;
    setClickedItem(newArr);
  };
  //* 폼 제출 실행함수
  function onSubmit(e) {
    e.preventDefault();
    if (selItemValue === undefined) {
      return false;
    }
    localStorage.setItem("selectedVote", JSON.stringify(selItemValue));
    setBtnColor((prevState) => ({
      voteBtnBg: "#3178FF",
      voteBtntextColor: "rgba(256, 256, 256, 0.5)",
    }));
  }
  //* 복사하기 실행함수
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("복사는되지만 모달은 아직 구현 X");
  }

  return (
    <div className="body_container">
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1>{title}</h1>
          <p>{text}</p>
          {voteSelect.map((selectItem, index) => (
            <li key={selectItem.item} className={`vote_box ${clickedItem[index] ? "click_color" : "false"}`} onClick={() => handleClick(index)}>
              <input type="radio" id={selectItem.item} name="vote" value={selectItem.item} onChange={onChange} />
              <label htmlFor={selectItem.item}>{selectItem.item}</label>
            </li>
          ))}

          <button type="submit" style={{ backgroundColor: btnColor.voteBtnBg, color: btnColor.voteBtntextColor }} className="vote_btn">
            투표하기
          </button>
        </form>
        <div className="favorite_comment_share">
          <div className="favorite_comment">
            <Favorite fill={like ? "#FF2222" : "#fff"} onClick={handleLikeToggle} />
            <span className="favorite">{likes}</span>
            <Image src="/img/comment.svg" alt="Comment" width={20} height={20} />
            <span>{voteComments.length}</span>
          </div>
          <Image src="/img/share.svg" alt="Share" width={20} height={20} onClick={copy} />
        </div>
        <Comment Comments={voteComments} id={id} value="vote" />
        <Link href={`/vote`}>
          <a className="back_btn">
            <button>목록보기</button>
          </a>
        </Link>
        <style jsx>{`
          .container {
            height: 100vh;
            box-sizing: border-box;
            padding: 0 20px;
          }
          h1 {
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            margin: 0 0 4px;
          }
          p {
            font-size: 13px;
            font-weight: 400;
            line-height: 20px;
            margin: 0 0 20px;
            padding-bottom: 21px;
            color: #5e5e5e;
            border-bottom: 1px solid #e3e7ed;
          }
          .vote_box {
            background-color: #f6f6f6;
            border-radius: 4px;
            height: 36px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            box-sizing: border-box;
          }
          .click_color {
            background-color: #e8f3ff;
          }
          label {
            display: flex;
            align-items: center;
            width: 100%;
            font-size: 13px;
            line-height: 20px;
            font-weight: 400;
            color: #36332e;
            margin-left: 5px;
            padding: 5px 0;
          }
          .vote_btn {
            margin-top: 34px;
            border: none;
            width: 100%;
            height: 36px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 700;
          }
          .favorite_comment_share {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
            padding-bottom: 8px;
            border-bottom: 1px solid #e3e7ed;
          }
          .favorite_comment {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .favorite_comment span {
            margin-left: 4px;
            font-size: 13px;
            font-weight: 700;
          }
          .favorite {
            margin-right: 8px;
          }
          .back_btn {
            display: block;
            text-align: center;
          }
          .back_btn button {
            margin: 52px auto 0;
            border: none;
            width: 105px;
            height: 37px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 700;
            background-color: #d5d8dc;
          }

          /* Tablet */
          @media (min-width: 576px) {
            .container {
              padding: 32px 0px;
            }
          }

          /* Desktop */
          @media (min-width: 1200px) {
            /* #e5e5e5 */
            .body_container {
              background-color: #e5e5e5;
            }

            .container {
              /* border: 1px solid red; */
              padding: 68px 103px;
              background-color: #fff;
              box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
            }
            h1 {
              font-size: 22px;
              font-weight: 700;
              line-height: 24px;
              margin: 0 0 4px;
            }
            p {
              font-size: 13px;
              font-weight: 400;
              line-height: 20px;
              margin: 0 0 20px;
              padding-bottom: 21px;
              color: #5e5e5e;
              border-bottom: 1px solid #e3e7ed;
            }
            .vote_box {
              background-color: #f6f6f6;
              border-radius: 4px;
              height: 36px;
              margin-top: 10px;
              display: flex;
              align-items: center;
              padding: 0 8px;
              box-sizing: border-box;
            }
            label {
              display: flex;
              align-items: center;
              width: 100%;
              font-size: 13px;
              line-height: 20px;
              font-weight: 400;
              color: #36332e;
              margin-left: 5px;
              padding: 5px 0;
            }
            .vote_btn {
              margin-top: 34px;
              border: none;
              width: 100%;
              height: 36px;
              border-radius: 8px;
              font-size: 12px;
              font-weight: 700;
            }
            .favorite_comment_share {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 20px;
              padding-bottom: 8px;
              border-bottom: 1px solid #e3e7ed;
            }
            .favorite_comment {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .favorite_comment span {
              margin-left: 4px;
              font-size: 13px;
              font-weight: 700;
            }
            .favorite {
              margin-right: 8px;
            }
            .back_btn {
              display: block;
              text-align: center;
            }
            .back_btn button {
              margin: 52px auto 0;
              border: none;
              width: 105px;
              height: 37px;
              border-radius: 8px;
              font-size: 12px;
              font-weight: 700;
              background-color: #d5d8dc;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const { data } = await axios.get(`${server}/api/vote/${id}`);
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

export const getStaticPaths = async () => {
  const { data } = await axios.get(`${server}/api/vote`);
  const ids = data.results.map((data) => data.id);
  const paths = ids.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default VoteById;
