import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Favorite from "public/img/Favorite.svg";
import { useCallback, useEffect, useRef, useState } from "react";

// import Comment from "@/components/Comment";
import server from "@/config/server";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { percentage } from "@/utils/index";

import style from "./Id.module.scss";

// eslint-disable-next-line unicorn/prevent-abbreviations
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

const clickedItemIndex = (element) => element === true;

const setCopySuccess = () => {
  const element = document.createElement("input");
  element.value = window.location.href;
  document.body.append(element);
  element.select();
  document.execCommand("copy");
  element.remove();
};
function copy() {
  setCopySuccess();
}

function VoteById({ data }) {
  const breakpoint = useBreakpoint();
  const gaugeBox = useRef();
  const { title, text, likes, voteSelect, voteComments, id } = data.results;
  const [changedButtonColor, setChangdeButtonColor] = useState({
    voteBtnBg: "#3178FF",
    voteBtntextColor: "#fff",
    borderColor: "1px solid #3178FF",
    itemGaugeColor: "#e8f3ff",
    selectItemBackground: "#e8f3ff",
  });
  const {
    voteBtnBg,
    voteBtntextColor,
    borderColor,
    itemGaugeColor,
    selectItemBackground,
  } = changedButtonColor;
  const [modalActive, setModalActive] = useState(false);
  const [like, setLike] = useState(false);
  const [likeNums, setLikeNums] = useState(likes);
  const [clickedItem, setClickedItem] = useState(
    Array.from({ length: voteSelect.length }).fill(false),
  );
  const [clicked, setClicked] = useState(-1);

  const [voteList, setVoteList] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const totalVotes = voteSelect.map((item) => item.count);
  const itemIndex = clickedItem.findIndex((element) =>
    clickedItemIndex(element),
  );
  const itemCount = totalVotes[Number.parseInt(itemIndex)];
  const totalCount = totalVotes.reduce(function add(sum, currentValue) {
    return sum + currentValue;
  }, 0);

  useEffect(() => {
    const likesId = localStorage.getItem("voteboxlikeList");
    likesId !== null ? setLike(likesId.includes(id)) : setLike(false);
  }, [id]);

  const handleLikeToggle = useCallback(
    (event) => {
      event.preventDefault();
      const putLike = async (id, like) => {
        await axios.put(`${server}/api/vote/like`, { params: { id, like } });
      };
      const likesId = localStorage.getItem("voteboxlikeList");

      let arrlikes = [];
      let newLikes = [];
      arrlikes = likesId !== null ? likesId.split(",") : [""];
      !like
        ? (newLikes = [...arrlikes, id])
        : (newLikes = arrlikes.filter((v) => v.toString() !== id.toString()));
      localStorage.setItem("votebox-like-list", newLikes);
      putLike(id, !like);
      !like
        ? setLikeNums((like) => (like = like + 1))
        : setLikeNums((like) => (like = like - 1));
      setLike((previous) => !previous);
    },
    [id, like],
  );

  const handleClick = (index) => {
    const newArray = Array.from({ length: voteSelect.length }).fill(false);
    newArray[Number.parseInt(index)] = true;
    setClickedItem(newArray);
    setChangdeButtonColor({
      selectItemBackground,
      voteBtnBg,
      voteBtntextColor,
    });
  };

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (itemCount === undefined) {
        return false;
      }
      const itemId = voteSelect[Number.parseInt(itemIndex)].id;
      const putVoteCount = async () => {
        await axios.put(`${server}/api/vote`, {
          params: {
            id: itemId,
          },
        });
      };
      const plusCount = () => {
        itemCount + 1;
        putVoteCount();
      };
      plusCount();

      // #localstorage에 데이터 전달!
      // setVoteList([
      //   ...voteList,
      //   { id: id, value: voteSelect[Number.parseInt(itemIndex)].id },
      // ]);
      // let newVoteList = [
      //   ...voteList,
      //   { id: id, value: voteSelect[Number.parseInt(itemIndex)].id },
      // ];
      const saved = [
        ...voteList,
        {
          id: id,
          value: voteSelect[Number.parseInt(itemIndex)].id,
        },
      ];
      localStorage.setItem("vote-list", JSON.stringify(saved));
      setClicked(itemId);
      // #제출되면 색깔변화
      setChangdeButtonColor({
        voteBtnBg,
        voteBtntextColor: "rgba(256, 256, 256, 0.5)",
        borderColor: "1px solid #3178FF",
        itemGaugeColor: "#e8f3ff",
        selectItemBackground: "#fff",
      });

      // // # 각각 맞는 게이지 보여주기 함수로
      // const gaugeWitdh = percentage(itemCount, totalCount);
      // //자바스크립트 자체에서 width 스타일 변경하기
      // gaugeBox.current.style.width = `${gaugeWitdh}%`;

      setDisabled(true);
    },
    [itemIndex, itemCount, id, totalCount, voteList, voteSelect, voteBtnBg],
  );

  function onClickModalOn() {
    setModalActive((previous) => !previous);
    setTimeout(() => {
      setModalActive((previous) => !previous);
    }, 1000);
  }

  const checkClicked = clickedItem.some((element) => clickedItemIndex(element));

  useEffect(() => {
    const savedVoteList = JSON.parse(localStorage.getItem("vote-list"));
    if (savedVoteList) {
      setVoteList(savedVoteList);

      const getSelectedIndex = savedVoteList.findIndex(
        (item) => item.id === id,
      );

      if (getSelectedIndex !== -1) {
        setClicked(savedVoteList[Number.parseInt(getSelectedIndex)].value);
        setDisabled(true);
      }
    }
  }, [id]);

  return (
    <div
      className={style.body_container}
      style={
        breakpoint.sm
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#f7f8fa" }
      }
    >
      <div className={style.container}>
        <form onSubmit={onSubmit}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.text}>{text}</p>
          <div className={`${disabled ? style.click_block : ""}`}>
            {voteSelect.map((selectItem, index) => (
              <li
                style={
                  clicked === selectItem.id
                    ? {
                        border: borderColor,
                        backgroundColor: selectItemBackground,
                      }
                    : { border: "0px", backgroundColor: "#f6f6f6" }
                }
                key={selectItem.item}
                className={`${style.vote_box} ${
                  disabled ? style.showGauge : "false"
                }`}
                onClick={() => handleClick(index)}
              >
                <div
                  style={{
                    width:
                      disabled &&
                      `${percentage(selectItem.count, totalCount)}%`,
                  }}
                  className={`${disabled ? style.currentGauge : ""} ${
                    clickedItem[Number.parseInt(index)]
                      ? style.clicked_Background
                      : style.notClicked_Background
                  }`}
                ></div>
                <div className={`${disabled ? style.votePercent : ""}`}>
                  {disabled && `${percentage(selectItem.count, totalCount)}%`}
                </div>
                <input
                  type="radio"
                  id={selectItem.item}
                  name="vote"
                  value={selectItem.item}
                  className={style.radio_btn}
                />
                <label
                  className={`${style.radio_label} ${
                    disabled ? "" : style.active
                  }`}
                  htmlFor={selectItem.item}
                >
                  {selectItem.item}
                </label>
              </li>
            ))}
          </div>
          <button
            className={style.vote_btn}
            type="submit"
            disabled={disabled}
            style={
              checkClicked
                ? { backgroundColor: voteBtnBg, color: voteBtntextColor }
                : { backgroundColor: "#d5d8dc", color: "#B2B2B2" }
            }
          >
            투표하기
          </button>
        </form>
        <div className={style.favorite_comment_share}>
          <div className={style.favorite_comment}>
            <Favorite
              fill={like ? "#FF2222" : "#fff"}
              onClick={handleLikeToggle}
            />
            <span className={style.favorite}>{likeNums}</span>
            <Image
              src="/img/comment.svg"
              alt="Comment"
              width={20}
              height={20}
            />
            <span>{voteComments.length}</span>
          </div>
          <div
            className={`${style.copy_btn} ${modalActive ? style.active : ""}`}
            onClick={onClickModalOn}
          >
            <Image
              src="/img/share.svg"
              alt="Share"
              width={20}
              height={20}
              onClick={copy}
            />
          </div>
        </div>
        {/* <Comment Comments={voteComments} value="vote" /> */}
        <div className={style.back_btn_container}>
          <Link href={`/vote`}>
            <a>
              <button className={style.back_btn}>목록보기</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VoteById;
