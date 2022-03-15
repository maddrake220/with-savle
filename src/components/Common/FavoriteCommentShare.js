import Image from "next/image";
import Favorite from "public/img/Favorite.svg";

import style from "@/styles/VoteId.module.scss";
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
        <Favorite fill={like ? "#FF2222" : "#fff"} onClick={handleLikeToggle} />
        <span className={style.favorite}>{likeNums}</span>
        <Image src="/img/comment.svg" alt="Comment" width={20} height={20} />
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
