import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "styles/goal/new-goal-complete.module.scss";

import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function NewGoalComplete({ toggleModal, from = "main" }) {
  const matchQuery = useBreakpoint();
  return (
    <div
      className={styles.newgoalComplete}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={styles.newgoalCompleteTop}>
        <div className={styles.newgoalCompleteChar}>
          <Image
            src="/img/goalcompchar.svg"
            alt="savle-char"
            width={matchQuery.sm ? 85 : 197}
            height={matchQuery.sm ? 65 : 80}
          />
        </div>
        <div className={styles.closeButton} onClick={toggleModal}>
          <Image
            src="/img/goal-close.svg"
            alt="close"
            width={matchQuery.sm ? 19 : 45}
            height={matchQuery.sm ? 19 : 45}
          />
        </div>
      </div>
      <div className={styles.newGoalCompleteText}>
        <div>세이러님의</div>
        <div>목표가 입력 되었습니다!</div>
      </div>
      <div className={styles.buttonOk} onClick={toggleModal}>
        {from === "goal" ? (
          <div>확인</div>
        ) : (
          <Link href={"/goal"}>
            <a>
              <div>더 많은 목표 보러가기</div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
