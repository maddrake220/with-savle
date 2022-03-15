import Image from "next/image";

import style from "@/styles/common/SlickArrow.module.scss";

export function NextArrow(properties) {
  const { onClick } = properties;
  return (
    <div className={`className ${style.slick_arrow}`} onClick={onClick}>
      <Image src="/img/next.svg" alt="이후" width={10} height={40} />
    </div>
  );
}

export function PreviousArrow(properties) {
  const { onClick } = properties;
  return (
    <div className={`className ${style.slick_arrow}`} onClick={onClick}>
      <Image src="/img/prev.svg" alt="이전" width={10} height={40} />
    </div>
  );
}
