import Image from "next/image";

import style from "@/styles/common/Error.module.scss";

export function ImageBox({ type = "" }) {
  return (
    <div className={style.image}>
      <Image
        src={`/layout/${type}.svg`}
        className={style.image}
        width={375}
        height={309}
        alt={type}
        layout="responsive"
        priority
      />
    </div>
  );
}
