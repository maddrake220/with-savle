import Link from "next/link";

import style from "@/styles/vote/VoteId.module.scss";

export default function ShowListButton() {
  return (
    <div className={style.back_btn_container}>
      <Link href={`/vote`}>
        <a className={style.link}>
          <button className={style.back_btn}>목록보기</button>
        </a>
      </Link>
    </div>
  );
}
