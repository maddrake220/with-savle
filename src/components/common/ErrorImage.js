import Image from "next/image";

import style from "@/styles/common/Error.module.scss";

function ErrorImage({ type = "" }) {
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

export default ErrorImage;
