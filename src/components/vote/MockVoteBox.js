import Image from "next/image";

import style from "@/styles/MockVoteBox.module.scss";

export default function MainVoteBox({ mockData }) {
  return (
    <li className={style.vote_box}>
      <h1 className={style.subject_box}>
        {mockData.title.length > 35
          ? `${mockData.title.slice(0, 35)}...`
          : mockData.title}
      </h1>
      {mockData.voteSelect.map((selectItem) => (
        <div key={selectItem.item} className={style.vote_select_items}>
          <input
            type="radio"
            id={selectItem.item}
            name="vote"
            value={selectItem.item}
            disabled
            className={style.radio_btn}
          />
          <label htmlFor={selectItem.item}>{selectItem.item}</label>
        </div>
      ))}
      <div className={style.favorite_comment}>
        <div className={style.favorite}>
          <Image
            src="/img/favorite.svg"
            alt="Favorite"
            width={18}
            height={18}
          />
          <span>{mockData.likes}</span>
        </div>
        <div>
          <Image src="/img/comment.svg" alt="Comment" width={20} height={20} />
          <span>{mockData.voteComments.length}</span>
        </div>
      </div>
    </li>
  );
}
