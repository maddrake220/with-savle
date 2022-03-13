import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import FavoriteCommentShare from "@/components/vote/FavoriteCommentShare";
import VoteForm from "@/components/vote/VoteForm";
// import Comment from "@/components/Comment";
import server from "@/config/server";
import { useBreakpoint, useTimeoutToggle, useVoteState } from "@/hooks/index";
import { sumCount } from "@/utils/index";

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
      style={
        breakpoint.sm
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#f7f8fa" }
      }
    >
      <div className={style.container}>
        <VoteForm
          onSubmit={onSubmit}
          title={title}
          text={text}
          disabled={disabled}
          voteSelect={voteSelect}
          borderColor={borderColor}
          selectItemBackground={selectItemBackground}
          handleClick={handleClick}
          totalCount={totalCount}
          selectId={selectId}
          voteBtnBg={voteBtnBg}
          selected={selected}
          voteBtntextColor={voteBtntextColor}
        />

        <FavoriteCommentShare
          voteComments={voteComments}
          timeoutToggle={timeoutToggle}
          timeoutModal={timeoutModal}
          like={like}
          likeNums={likeNums}
          handleLikeToggle={handleLikeToggle}
        />
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
