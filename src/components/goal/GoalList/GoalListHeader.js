import Image from "next/image";
import React from "react";

import Seo from "@/components/common/Seo";
import styles from "@/styles/goal/GoalList.module.scss";
import { getSize } from "@/utils/getSize";
export default function GoalListHeader({ queryMatch }) {
  return (
    <header>
      <Seo
        title={"목표공유 | 쉽고 FUN한 저축, 세이블"}
        keyword={("목표달성", "목표등록", "저축", "공유", "세이블")}
        desc={
          "세이블에서 목표달성, 함께해요! 다른 사람들과 목표를 공유해보아요."
        }
        ogUrl={`https://savle.net/goal`}
        ogTitle={"저축러의 목표공유"}
        ogDesc={
          "세이블에서 목표달성, 함께해요! 다른 사람들과 목표를 공유해보아요."
        }
      />
      <div className="container">
        <div className={`${styles.headerInfo}`}>
          <h1>세이블에서 목표달성, 함께해요!</h1>
          <p>다른 사람들과 목표를 공유해보아요.</p>
          <div className={styles.goalHeaderImage}>
            <Image
              src="/img/goalchar.svg"
              width={getSize(queryMatch, true)}
              height={getSize(queryMatch, false)}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
}
