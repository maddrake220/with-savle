import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import Favorite from "public/img/Favorite.svg";
import server from "@/config/server";
import Link from "next/link";
import Comment from "@/components/Comment";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export async function getStaticProps(context) {
  const { id } = context.params;
  const { data } = await axios.get(`${server}/api/vote/${id}`);
  return {
    props: {
      data,
    },
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

function VoteById({ data }) {
  const breakpoint = useBreakpoint();
  const gaugeBox = useRef();

  const { title, text, likes, voteSelect, voteComments, id } = data.results;
  const [buttonColor, setButtonColor] = useState({
    voteBtnBg: "#d5d8dc",
    voteBtntextColor: "#B2B2B2",
    borderColor: "1px solid #3178FF",
    itemBackground: "#fff",
    itemGaugeColor: "#e8f3ff",
  });
  const [copySuccess, setCopySuccess] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const [itemValue, setItemValue] = useState("");
  const [like, setLike] = useState(false);
  const [likeNums, setLikeNums] = useState(likes);
  const [clickedItem, setClickedItem] = useState(Array.from({ length: voteSelect.length }).fill(false));
  const [voteList, setVoteList] = useState([{ id: id, value: "" }]);
  const [disabled, setDisabled] = useState(false);

  const totalVotes = voteSelect.map((item) => item.count);
  const clickedItemIndex = (ele) => ele === true;
  const itemIndex = clickedItem.findIndex(clickedItemIndex);

  const itemCount = totalVotes[itemIndex];
  const totalCount = totalVotes.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);

  useEffect(() => {
    const likesId = localStorage.getItem("votebox-like-list");
    likesId !== null ? setLike(likesId.includes(id)) : setLike(false);
  }, [id]);

  // 값이 없다면 투표할수 있는 페이지로! 값이 있다면 투표할 수 없도록!
  useEffect(() => {
    const voteItemId = JSON.parse(localStorage.getItem("vote-list"));
    voteItemId;
  }, []);
  const handleLikeToggle = useCallback(
    (e) => {
      e.preventDefault();
      const putLike = async (id, like) => {
        await axios.put(`${server}/api/vote/like`, { params: { id, like } });
      };
      const likesId = localStorage.getItem("votebox-like-list");
      console.log(likesId);
      let arrlikes = [];
      let newLikes = [];
      arrlikes = likesId !== null ? likesId.split(",") : [""];
      !like ? (newLikes = [...arrlikes, id]) : (newLikes = arrlikes.filter((v) => v.toString() !== id.toString()));
      localStorage.setItem("votebox-like-list", newLikes);
      putLike(id, !like);
      !like ? setLikeNums((like) => (like = like + 1)) : setLikeNums((like) => (like = like - 1));
      setLike((previous) => !previous);
      console.log(newLikes);
    },
    [id, like],
  );

  const onChange = (e) => {
    setItemValue(e.currentTarget.value);
    setButtonColor(() => ({
      voteBtnBg: "#3178FF",
      voteBtntextColor: "#fff",
    }));
  };

  const handleClick = (index) => {
    const newArray = Array.from({ length: voteSelect.length }).fill(false);
    newArray[index] = true;
    setClickedItem(newArray);
  };

  // //* 폼 제출 실행함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (itemCount === undefined) {
        return false;
      }
      const itemId = voteSelect[itemIndex].id;
      const putVoteCount = async () => {
        await axios.put(`${server}/api/vote`, {
          params: {
            id: itemId,
          },
        });
      };

      if (itemIndex === 0) {
        itemCount = itemCount + 1;
        putVoteCount();
      } else if (itemIndex === 1) {
        itemCount = itemCount + 1;
        putVoteCount();
      } else if (itemIndex === 2) {
        itemCount = itemCount + 1;
        putVoteCount();
      } else {
        itemCount = itemCount + 1;
        putVoteCount();
      }

      console.log("항목카운트 더한값", itemCount);

      // #localstorage에 데이터 전달!
      setVoteList([...voteList, { id: id, value: voteSelect[itemIndex].id }]);
      let newVoteList = [...voteList, { id: id, value: voteSelect[itemIndex].id }];
      localStorage.setItem("vote-list", JSON.stringify(newVoteList));

      // #제출되면 색깔변화
      setBtnColor(() => ({
        voteBtnBg: "#3178FF",
        voteBtntextColor: "rgba(256, 256, 256, 0.5)",
        borderColor: itemIndex ? "1px solid #3178FF" : "1px solid #3178FF",
        itemBackground: itemIndex ? "#fff" : "#fff",
        itemGaugeColor: itemIndex ? "#e8f3ff" : "#e8f3ff",
      }));

      // # 각각 맞는 게이지 보여주기
      const gaugeWitdh = Math.floor((itemCount / totalCount) * 100);
      console.log(gaugeWitdh);
      //자바스크립트 자체에서 width 스타일 변경하기
      gaugeBox.current.style.width = `${gaugeWitdh}px`;

      // #마지막으로 다시 투표 못하도록 비활성화하기
      setDisabled(true);
    },
    [id, itemValue, totalVotes, voteSelect, voteList, clickedItem],
  );

  function copy() {
    setCopySuccess(() => {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    });
  }
  function onClickModalOn() {
    setModalActive((prev) => !prev);
    setTimeout(() => {
      setModalActive((prev) => !prev);
    }, 1000);
  }

  return (
    <div className="body_container" style={breakpoint.sm ? { backgroundColor: "#fff" } : { backgroundColor: "#E5E5E5" }}>
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className={`${disabled ? "block" : "false"}`}>
            {voteSelect.map((selectItem, index) => (
              <li
                style={
                  clickedItem[index]
                    ? { border: btnColor.borderColor, backgroundColor: btnColor.itemBackground }
                    : { border: "0px", backgroundColor: "#f6f6f6" }
                }
                key={selectItem.item}
                className={`vote_box ${disabled ? "showGauge" : "false"} ${clickedItem[index] ? "click_color" : "false"} `}
                onClick={() => handleClick(index)}
              >
                <div
                  ref={gaugeBox}
                  style={clickedItem[index] ? { backgroundColor: btnColor.itemGaugeColor } : { backgroundColor: "#e4e4e4" }}
                  className={`${disabled ? "currentGauge" : "false"}`}
                ></div>

                <input type="radio" id={selectItem.item} name="vote" value={selectItem.item} onChange={onChange} />
                <label htmlFor={selectItem.item}>{selectItem.item}</label>
              </li>
            ))}
          </div>
          <button type="submit" disabled={disabled} style={{ backgroundColor: btnColor.voteBtnBg, color: btnColor.voteBtntextColor }} className="vote_btn">
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
          <div className={`copy_btn active" ${modalActive ? "active" : ""}`} onClick={onClickModalOn}>
            <Image src="/img/share.svg" alt="Share" width={20} height={20} onClick={copy} />
          </div>
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
            background-color: #fff;
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
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            box-sizing: border-box;
            position: relative;
          }
          .vote_box:last-child {
            margin-bottom: 0;
          }
          .vote_box .showGauge {
            background-color: red;
            border-radius: 4px;
            height: 36px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            box-sizing: border-box;
            pointer-events: none;
          }
          .block {
            pointer-events: none;
          }
          .click_color {
            background-color: #e8f3ff;
          }
          .currentGauge {
            position: absolute;
            left: 0;
            background-color: #e4e4e4;
            height: 100%;
          }
          input[type="radio"] {
            display: none;
          }
          label {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            height: 95%;
            font-size: 13px;
            line-height: 20px;
            font-weight: 400;
            color: #36332e;
            padding: 0 18px;
          }
          label:before {
            position: absolute;
            content: "";
            height: 8px;
            width: 8px;
            border: 2px solid #b2b2b2;
            border-radius: 50%;
            margin-right: 10px;
            left: 0;
            background-color: #fff;
          }
          input[type="radio"]:checked + label:before {
            height: 5px;
            width: 5px;
            border: 4px solid #3178ff;
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
            position: relative;
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
          .copy_btn.active:before {
            content: "URL이 복사되었습니다.";
            font-size: 12px;
            position: absolute;
            right: 0;
            bottom: -27px;
            width: 130px;
            padding: 4px;
            text-align: center;
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
          }

          /* Tablet */
          @media (min-width: 576px) {
            .container {
              padding: 32px 100px;
              width: 90%;
              box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
            }
          }
          /* Desktop */
          @media (min-width: 1200px) {
            .container {
              padding: 68px 103px;
              background-color: #fff;
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

export default VoteById;
