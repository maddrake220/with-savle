import Image from "next/image";
import Favorite from "public/img/Favorite.svg";

import { copy } from "@/utils/index";

import style from "../../pages/vote/Id.module.scss";

export default function FavoriteCommentShare({
  like,
  likeNums,
  handleLikeToggle,
  voteComments,
  timeoutToggle,
  timeoutModal,
}) {
  return (
    <div className={style.favorite_comment_share}>
      <div className={style.favorite_comment}>
        <Favorite fill={like ? "#FF2222" : "#fff"} onClick={handleLikeToggle} />
        <span className={style.favorite}>{likeNums}</span>
        <Image src="/img/comment.svg" alt="Comment" width={20} height={20} />
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
  );
}
