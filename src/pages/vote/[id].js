import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Favorite from "public/img/Favorite.svg";
import { useCallback, useEffect, useState } from "react";

// import Comment from "@/components/Comment";
import server from "@/config/server";
import { useBreakpoint, useTimeoutToggle, useVoteState } from "@/hooks/index";
import { copy, percentage, sumCount } from "@/utils/index";

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
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

function VoteById({ data }) {
  const { title, text, likes, voteSelect, voteComments, id } = data.results;
  const breakpoint = useBreakpoint();
  const [timeoutToggle, timeoutModal] = useTimeoutToggle();

  // -------------------------------------------------------------------------------------------------

  const { selectId, selected, disabled, buttonStyles, handleClick, onSubmit } =
    useVoteState(id);

  const { voteBtnBg, voteBtntextColor, borderColor, selectItemBackground } =
    buttonStyles;

  // -------------------------------------------------------------------------------------------------

  const totalCount = sumCount(voteSelect);

  // -------------------------------------------------------------------------------------------------
  const [like, setLike] = useState(false);
  const [likeNums, setLikeNums] = useState(likes);

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
  // -------------------------------------------------------------------------------------------------

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
          <ul className={`${disabled ? style.click_block : ""}`}>
            {voteSelect.map((selectItem) => (
              <li
                style={
                  selectId === selectItem.id
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
                onClick={() => handleClick(selectItem.id)}
              >
                <div
                  style={{
                    width:
                      disabled &&
                      `${percentage(selectItem.count, totalCount)}%`,
                  }}
                  className={`${disabled ? style.currentGauge : ""} ${
                    selectId === selectItem.id
                      ? style.clicked_Background
                      : style.notClicked_Background
                  }`}
                ></div>
                <div
                  style={
                    selectId === selectItem.id
                      ? { color: voteBtnBg }
                      : { color: "#888" }
                  }
                  className={`${disabled ? style.votePercent : ""} `}
                >
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
          </ul>
          <button
            className={style.vote_btn}
            type="submit"
            disabled={disabled}
            style={
              selected
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
            className={`${style.copy_btn} ${timeoutToggle ? style.active : ""}`}
            onClick={timeoutModal}
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
            <a className={style.link}>
              <button className={style.back_btn}>목록보기</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VoteById;
