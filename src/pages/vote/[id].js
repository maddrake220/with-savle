import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Favorite from "public/img/Favorite.svg";
import server from "@/config/server";
import Link from "next/link";
import Comment from "@/components/Comment";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const putLike = async (id, like) => {
  await axios.put(`${server}/api/vote/like`, { params: { id, like } });
};

function VoteById({ data }) {
  const breakpoint = useBreakpoint();
  console.log(data.results);
  const { title, text, likes, voteSelect, voteComments, id } = data.results;
  const [btnColor, setBtnColor] = useState({
    voteBtnBg: "#d5d8dc",
    voteBtntextColor: "#B2B2B2",
    borderColor: "1px solid #3178FF",
  });
  const [copySuccess, setCopySuccess] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const [itemValue, setItemValue] = useState("");
  const [like, setLike] = useState(false);
  const [likeNums, setLikeNums] = useState(likes);
  const [clickedItem, setClickedItem] = useState(Array(voteSelect.length).fill(false));
  const [voteList, setVoteList] = useState([{ id: id, value: "" }]);
  //# 전체 투표수 관리
  const [totalVotes1, setTotalVotes1] = useState(voteSelect[0].count);
  const [totalVotes2, setTotalVotes2] = useState(voteSelect[1].count);
  const [totalVotes3, setTotalVotes3] = useState(voteSelect[2].count);
  const [totalVotes4, setTotalVotes4] = useState(voteSelect[3]?.count);
  //# 투표했으면 다시 투표 못하게
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    const likesId = localStorage.getItem("votebox-like-list");
    likesId !== null ? setLike(likesId.includes(id)) : setLike(false);
  }, [id]);

  // 값이 없다면 투표할수 있는 페이지로! 값이 있다면 투표할 수 없도록!
  useEffect(() => {
    const voteItemId = JSON.parse(localStorage.getItem("vote-list"));
    console.log(voteItemId);
    voteItemId;
  }, []);
  const handleLikeToggle = useCallback(
    (e) => {
      e.preventDefault();
      const likesId = localStorage.getItem("votebox-like-list");
      console.log(likesId);
      let arrlikes = [];
      let newLikes = [];
      arrlikes = likesId !== null ? likesId.split(",") : [""];
      !like ? (newLikes = [...arrlikes, id]) : (newLikes = arrlikes.filter((v) => v.toString() !== id.toString()));
      localStorage.setItem("votebox-like-list", newLikes);
      putLike(id, !like);
      !like ? setLikeNums((like) => (like = like + 1)) : setLikeNums((like) => (like = like - 1));
      setLike((prev) => !prev);
      console.log(newLikes);
    },
    [id, like],
  );

  const onChange = (e) => {
    setItemValue(e.currentTarget.value);
    setBtnColor(() => ({
      voteBtnBg: "#3178FF",
      voteBtntextColor: "#fff",
    }));
  };

  const handleClick = (idx) => {
    const newArr = Array(voteSelect.length).fill(false);
    newArr[idx] = true;
    setClickedItem(newArr);
  };

  // //* 폼 제출 실행함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // 아이템 선택 안했을 시 제출버튼 클릭 방지
      if (itemValue === "") {
        return false;
      }
      const clickedItemIndex = (ele) => ele === true;
      const itemId = clickedItem.findIndex(clickedItemIndex);
      console.log(itemId);
      // #put 통신으로 투표 count 집계
      const itemCount = voteSelect[itemId].count;

      const putVoteCount = async () => {
        await axios.put(`${server}/api/vote`, {
          params: {
            itemCount,
          },
        });
      };
      if (itemId == 0) {
        setTotalVotes1((totalVotes1 = totalVotes1 + 1));
        // putVoteCount(itemCount);
      } else if (itemId == 1) {
        setTotalVotes2((totalVotes2 = totalVotes2 + 1));
      } else if (itemId == 2) {
        setTotalVotes3((totalVotes3 = totalVotes3 + 1));
      } else {
        setTotalVotes3((totalVotes4 = totalVotes4 + 1));
      }
      // console.log(totalVotes1);
      // console.log(totalVotes2);
      // console.log(totalVotes3);

      // #localstorage에 데이터 전달!
      setVoteList([...voteList, { id: id, value: voteSelect[itemId].id }]);
      let newVoteList = [...voteList, { id: id, value: voteSelect[itemId].id }];
      localStorage.setItem("vote-list", JSON.stringify(newVoteList));
      // #버튼 제출되면 색깔변화 | 데이터 수치 보여주기**
      setBtnColor(() => ({
        voteBtnBg: "#3178FF",
        voteBtntextColor: "rgba(256, 256, 256, 0.5)",
        borderColor: itemId ? "1px solid #3178FF" : "1px solid #3178FF",
      }));
      // #마지막으로 다시 투표 못하도록 비활성화하기
    },
    [clickedItem],
  );

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
            <li
              style={clickedItem[index] ? { border: btnColor.borderColor } : { border: "0px" }}
              key={selectItem.item}
              className={`vote_box ${clickedItem[index] ? "click_color" : "false"} `}
              onClick={() => handleClick(index)}
            >
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
            <span className="favorite">{likeNums}</span>
            <Image src="/img/comment.svg" alt="Comment" width={20} height={20} />
            <span>{voteComments.length}</span>
          </div>
          <Image src="/img/share.svg" alt="Share" width={20} height={20} onClick={copy} />
        </div>
        <Comment Comments={voteComments} value="vote" />
        <div className="back_btn_container">
          <Link href={`/vote`}>
            <a>
              <button className="back_btn">목록보기</button>
            </a>
          </Link>
        </div>
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
          input[type="radio"] {
            border: 8px solid #b2b2b2;
            height: 16px;
            width: 16px;
            border-radius: 50%;
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
          .back_btn_container {
            display: flex;
            justify-content: center;
          }
          .back_btn {
            margin: 52px auto 0;
            border: none;
            width: 105px;
            height: 37px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 700;
            background-color: #d5d8dc;
            cursor: pointer;
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
