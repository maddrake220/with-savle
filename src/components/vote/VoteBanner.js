import Image from "next/image";

import style from "@/styles/vote/VoteIndex.module.scss";

export default function VoteBanner() {
  return (
    <section className={style.banner_box_container}>
      <div className={style.banner_box}>
        <h1 className={style.banner_box_title}>저축러의 고민해결소</h1>
        <p className={style.banner_box_sub}>
          저축에 관한 고민을 나누고
          <br />
          투표하며 함께 고민을 해결해요.
        </p>
        <div className={style.img_character_money} width={82} height={67}>
          <Image
            className={style.character_money}
            layout="responsive"
            src="/img/char.svg"
            alt="character"
            width={82}
            height={67}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
