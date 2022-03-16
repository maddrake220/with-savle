import Image from "next/image";
import Favorite from "public/img/favorite.svg";

import style from "@/styles/common/FavoriteCommentShare.module.scss";
import { copy } from "@/utils/index";

export default function FavoriteCommentShare({
  like,
  likeNums,
  handleLikeToggle,
  commentCount,
  timeoutToggle,
  timeoutModal,
}) {
  return (
    <div className={style.favorite_comment_share}>
      <div className={style.favorite_comment}>
        <Favorite
          fill={like ? "#FF2222" : "#fff"}
          onClick={handleLikeToggle}
          className={style.favorite_img}
        />
        <span className={style.favorite}>{likeNums}</span>
        <Image
          src="/img/comment.svg"
          alt="Comment"
          width={20}
          height={20}
          className={style.comment_img}
        />
        <span>{commentCount}</span>
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
        {/* <input className={style.hidden} type="text" onCopy={copy} /> */}
      </div>
    </div>
  );
}
