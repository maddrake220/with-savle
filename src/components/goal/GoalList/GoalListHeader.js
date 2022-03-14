import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "styles/goal/GoalList.module.scss";

import { getSize } from "@/utils/goal/functions";
export default function GoalListHeader({ queryMatch }) {
  return (
    <header>
      <Head>
        <title>savle 목표달성</title>
        <meta keyword="" />
        <meta contents="" />
      </Head>
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
