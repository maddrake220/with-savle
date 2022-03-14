import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import MainVoteBox from "@/components/vote/MockVoteBox";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import style from "@/styles/MainVote.module.scss";
import { mockDatas } from "@/utils/voteMockData";

function NextArrow(properties) {
  const { onClick } = properties;
  return (
    <div className={`className ${style.slick_arrow}`} onClick={onClick}>
      <Image src="/img/next.svg" alt="next" width={10} height={40} />
    </div>
  );
}

function PreviousArrow(properties) {
  const { onClick } = properties;
  return (
    <div className={`className ${style.slick_arrow}`} onClick={onClick}>
      <Image src="/img/prev.svg" alt="prev" width={10} height={40} />
    </div>
  );
}

export default function MainVoteSection() {
  const breakpoints = useBreakpoint();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={style.vote_section}>
      <div className={style.vote_section_title}>
        <div className={style.vote_key_img} width={36} height={28}>
          <Image
            layout="responsive"
            src="/img/key.svg"
            alt="key"
            width={36}
            height={28}
          />
        </div>
        <h1>저축러의 고민해결소</h1>
        <p>
          저축에 관한 고민을 함께 <span>나누고 투표해보아요.</span>
        </p>
      </div>
      <ul className={style.votebox_container}>
        <Slider {...settings}>
          {mockDatas.results.map((mockData) => (
            <MainVoteBox mockData={mockData} key={mockData.title} />
          ))}
        </Slider>
      </ul>
      <Link href={`/vote`}>
        <a className={style.vote_button}>
          <button>투표하러 가기</button>
        </a>
      </Link>

      {breakpoints.sm ? (
        <div className={style.vote_woman}>
          <Image
            layout="responsive"
            src="/img/woman.svg"
            alt="woman"
            width={75}
            height={105}
          />
        </div>
      ) : (
        <div className={style.vote_woman_group}>
          <Image
            layout="responsive"
            src="/img/woman_group.svg"
            alt="woman_group"
            width={116}
            height={154}
            priority={true}
          />
        </div>
      )}
      {breakpoints.sm ? (
        <div className={style.vote_man}>
          <Image
            layout="responsive"
            src="/img/man.svg"
            alt="man"
            width={68}
            height={115}
          />
        </div>
      ) : (
        <div className={style.vote_man_group}>
          <Image
            layout="responsive"
            src="/img/man_group.svg"
            alt="man_group"
            width={139}
            height={190}
            priority={true}
          />
        </div>
      )}
    </section>
  );
}
