import axios from "axios";
import Link from "next/link";
import { useCallback, useState } from "react";
import { fetchGetVoteById, fetchPutVoteLike } from "src/api/vote";

// import Comment from "@/components/Comment";
import FavoriteCommentShare from "@/components/vote/FavoriteCommentShare";
import VoteItems from "@/components/vote/VoteItems";
import server from "@/config/server";
import {
  useBreakpoint,
  useLike,
  useTimeoutToggle,
  useVoteState,
} from "@/hooks/index";
import { LOCALSTORAGE_VOTE_LIKE } from "@/utils/index";

import style from "./Id.module.scss";

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps = async (context) => {
  const { id } = context.params;
  const { data } = await axios.get(`${server}/api/vote/${id}`);
  return {
    props: {
      data,
    },
  };
};

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

  const { selectId, submitted, disabled, buttonStyles, handleClick, onSubmit } =
    useVoteState(id);

<<<<<<< HEAD
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
=======
  const { voteBtnBg, voteBtntextColor, borderColor, selectItemBackground } =
    buttonStyles;

  const [commentCount, setCommentCount] = useState(voteComments.length);
>>>>>>> a6c4184d4500be7049c97a32a0f55f3a65d28e1e

  const [like, likeNums, localStorageHandler] = useLike(
    id,
    likes,
    LOCALSTORAGE_VOTE_LIKE,
  );

  const handleLikeToggle = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      localStorageHandler();
      const parameter = { id: id, like: !like };
      fetchPutVoteLike(parameter);
    },
    [id, like, localStorageHandler],
  );

<<<<<<< HEAD
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

=======
>>>>>>> a6c4184d4500be7049c97a32a0f55f3a65d28e1e
  return (
    <div
      className={style.wrapper}
      style={
        breakpoint.sm
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#f7f8fa" }
      }
    >
      <div className={style.container}>
        <form onSubmit={onSubmit}>
<<<<<<< HEAD
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
=======
          <h1 className={style.title}>{title}</h1>
          <p className={style.text}>{text}</p>
          <VoteItems
            handleClick={handleClick}
            disabled={disabled}
            voteSelect={voteSelect}
            selectId={selectId}
            submitted={submitted}
            borderColor={borderColor}
            selectItemBackground={selectItemBackground}
            voteBtnBg={voteBtnBg}
          />
          <button
            className={style.vote_btn}
            type="submit"
            disabled={disabled}
            style={
              selectId !== -1
                ? { backgroundColor: voteBtnBg, color: voteBtntextColor }
                : { backgroundColor: "#d5d8dc", color: "#B2B2B2" }
            }
          >
>>>>>>> a6c4184d4500be7049c97a32a0f55f3a65d28e1e
            투표하기
          </button>
        </form>
        <FavoriteCommentShare
          commentCount={commentCount}
          timeoutToggle={timeoutToggle}
          timeoutModal={timeoutModal}
          like={like}
          likeNums={likeNums}
          handleLikeToggle={handleLikeToggle}
        />
        <Comment id={id} value="vote" setCount={setCommentCount} />
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
