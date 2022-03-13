import axios from "axios";
import Image from "next/image";
import Favorite from "public/img/Favorite.svg";
import { useCallback, useEffect, useState } from "react";

import server from "@/config/server";

import style from "./VoteBox.module.scss";

const putLike = async (id, like) => {
  await axios.put(`${server}/api/vote/like`, { params: { id, like } });
};

export default function VoteBox({ voteBoxData }) {
  const { id, title, likes, voteSelect, voteComments } = voteBoxData;

  const [like, setLike] = useState(false);
  const [likeNums, setLikeNums] = useState(likes);

  useEffect(() => {
    const likesId = localStorage.getItem("voteboxLikeList");
    likesId !== null ? setLike(likesId.includes(id)) : setLike(false);
  }, [id]);

  const handleLikeToggle = useCallback(
    (event) => {
      event.preventDefault();
      const likesId = localStorage.getItem("voteboxLikeList");
      let arrlikes = [];
      let newLikes = [];

      arrlikes = likesId !== null ? likesId.split(",") : [""];
      !like
        ? (newLikes = [...arrlikes, id])
        : (newLikes = arrlikes.filter((v) => v.toString() !== id.toString()));
      localStorage.setItem("voteboxLikeList", newLikes);
      putLike(id, !like);
      !like
        ? setLikeNums((like) => (like = like + 1))
        : setLikeNums((like) => (like = like - 1));
      setLike((previous) => !previous);
    },
    [id, like],
  );

  return (
    <div className={style.vote_box}>
      <h1 className={style.subject_box}>
        {title.length > 35 ? `${title.slice(0, 35)}...` : title}
      </h1>
      {voteSelect.map((selectItem) => (
        <div key={selectItem.item} className={style.vote_select_items}>
          <input
            type="radio"
            id={selectItem.item}
            name="vote"
            value={selectItem.item}
            className={style.radio_btn}
          />
          <label htmlFor={selectItem.item}>{selectItem.item}</label>
        </div>
      ))}
      <div className={style.favorite_comment}>
        <div
          className={style.favorite}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          <Favorite
            fill={like ? "#FF2222" : "#fff"}
            onClick={handleLikeToggle}
          />
          <span>{likeNums}</span>
        </div>
        <div>
          <Image src="/img/comment.svg" alt="Comment" width={21} height={21} />
          <span>{voteComments.length}</span>
        </div>
      </div>
      <button className={style.button}>더보기 &gt;</button>
    </div>
  );
}
