import { useCallback, useState } from "react";
import { fetchGetVote, fetchGetVoteById, fetchPutVoteLike } from "src/api/vote";

import Comment from "@/components/comment/Comment.js";
import FavoriteCommentShare from "@/components/common/FavoriteCommentShare";
import Seo from "@/components/common/Seo";
import ShowListButton from "@/components/common/ShowListButton";
import VoteButton from "@/components/vote/VoteButton";
import VoteItems from "@/components/vote/VoteItems";
import {
  useBreakpoint,
  useLike,
  useTimeoutToggle,
  useUpdateLikes,
  useVoteState,
} from "@/hooks/index";
import style from "@/styles/vote/VoteId.module.scss";
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
    fallback: "blocking",
  };
};

function VoteById({ data }) {
  const { title, text, likes, voteSelect, id } = data.results;

  const breakpoint = useBreakpoint();
  const [timeoutToggle, timeoutModal] = useTimeoutToggle();

  const {
    selectId,
    submitted,
    disabled,
    buttonStyles,
    handleClick,
    onSubmit,
    hidden,
    setHidden,
  } = useVoteState(id);

  const { voteBtnBg, voteBtntextColor, borderColor, selectItemBackground } =
    buttonStyles;

  const [commentCount, setCommentCount] = useState(0);

  const { updateLikes } = useUpdateLikes(id, likes);

  const [like, likeNums, localStorageHandler] = useLike(
    id,
    updateLikes,
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
    <>
      <Seo
        title={"고민해결소 | 쉽고 FUN한 저축, 세이블"}
        keyword={
          ("고민투표",
          voteSelect[0].item,
          voteSelect[1].item,
          voteSelect[2]?.item,
          voteSelect[3]?.item)
        }
        desc={title}
        ogUrl={`https://savle.net/vote/${id}`}
        ogTitle={title}
        ogDesc={
          "저축러의 고민해결소. 저축에 관한 고민을 나누고 투표하며 함께 고민을 해결해요."
        }
      />
      <div className={breakpoint.sm ? "" : style.wrapper}>
        <div className={style.container}>
          <form onSubmit={onSubmit}>
            <h1 className={style.title}>
              {title.length > 35 ? `${title.slice(0, 35)}...` : title}
            </h1>
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
            <VoteButton
              disabled={disabled}
              selectId={selectId}
              voteBtnBg={voteBtnBg}
              voteBtntextColor={voteBtntextColor}
            />
          </form>
          <FavoriteCommentShare
            commentCount={commentCount}
            timeoutToggle={timeoutToggle}
            timeoutModal={timeoutModal}
            like={like}
            likeNums={likeNums}
            handleLikeToggle={handleLikeToggle}
          />
          <Comment
            id={id}
            value="vote"
            setCount={setCommentCount}
            hidden={hidden}
            setHidden={setHidden}
          />
          <ShowListButton />
        </div>
      </div>
    </>
  );
}

export default VoteById;
