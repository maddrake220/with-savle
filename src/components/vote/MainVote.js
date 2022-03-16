import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import MockVoteBox from "@/components/vote/MockVoteBox";
import { useBreakpoint } from "@/hooks/index";
import style from "@/styles/vote/MainVote.module.scss";
import Data from "@/utils/mockdata/voteAPI";

import { NextArrow, PreviousArrow } from "../common/SlickArrow";

export default function MainVote() {
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

  const mockDatas = Data.results;
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
      <ul className={style.slick_container}>
        <Slider {...settings}>
          {mockDatas.map((mockData) => (
            <MockVoteBox mockData={mockData} key={mockData.title} />
          ))}
        </Slider>
      </ul>
      <div className={style.vote_button_container}>
        <Link href={`/vote`}>
          <a className={style.vote_button}>
            <button>투표하러 가기</button>
          </a>
        </Link>
      </div>

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
