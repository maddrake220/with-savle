import Link from "next/link";
import { useCallback, useState } from "react";
import { fetchGetVote, fetchGetVoteById, fetchPutVoteLike } from "src/api/vote";

import Comment from "@/components/Comment/Comment.js";
import FavoriteCommentShare from "@/components/vote/FavoriteCommentShare";
import VoteItems from "@/components/vote/VoteItems";
import {
  useBreakpoint,
  useLike,
  useTimeoutToggle,
  useVoteState,
} from "@/hooks/index";
import style from "@/styles/VoteId.module.scss";
import { LOCALSTORAGE_VOTE_LIKE } from "@/utils/index";

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps = async (context) => {
  const { id } = context.params;
  const { data } = await fetchGetVoteById(id);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await fetchGetVote();
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

  const { voteBtnBg, voteBtntextColor, borderColor, selectItemBackground } =
    buttonStyles;

  const [commentCount, setCommentCount] = useState(voteComments.length);

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
