import Image from "next/image";
import Link from "next/link";

import style from "@/styles/vote/MockVoteBox.module.scss";

export default function MockVoteBox({ mockData }) {
  return (
    <Link href={`/vote`} passHref={true}>
      <li className={style.vote_box}>
        <a>
          <h1 className={style.subject_box}>
            {mockData.title.length > 35
              ? `${mockData.title.slice(0, 35)}...`
              : mockData.title}
          </h1>
          <ul>
            {mockData.voteSelect.map((selectItem) => (
              <li key={selectItem.item} className={style.vote_select_items}>
                <input
                  type="radio"
                  id={selectItem.item}
                  name="vote"
                  value={selectItem.item}
                  disabled
                  className={style.radio_btn}
                />
                <label htmlFor={selectItem.item}>
                  {selectItem.item.length > 20
                    ? `${selectItem.item.slice(0, 20)}`
                    : selectItem.item}
                </label>
              </li>
            ))}
          </ul>
          <section className={style.favorite_comment}>
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
              <Image
                src="/img/comment.svg"
                alt="Comment"
                width={20}
                height={20}
              />
              <span>{mockData.voteComments.length}</span>
            </div>
          </section>
        </a>
      </li>
    </Link>
  );
}
