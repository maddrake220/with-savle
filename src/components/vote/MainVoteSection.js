import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainVoteBox from "@/components/vote/MainVoteBox";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { mockDatas } from "@/pages/vote/voteMockData";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image src="/img/next.svg" alt="next" width={10} height={40} />
      <style jsx>{`
        .slick-arrow {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 44%;
        }
        .slick-arrow:before {
          content: "";
        }
      `}</style>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image src="/img/prev.svg" alt="prev" width={10} height={40} />
      <style jsx>{`
        .slick-arrow {
          display: flex;
          /* background: green; */
          position: absolute;
          top: 44%;
        }
        .slick-arrow:before {
          content: "";
        }
      `}</style>
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
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="vote_section">
      <div className="vote_section_title">
        <div className="vote_key_img" width={36} height={28}>
          <Image layout="responsive" src="/img/key.svg" alt="key" width={36} height={28} />
        </div>
        <h1>저축러의 고민해결소</h1>
        <p>
          저축에 관한 고민을 함께 <span>나누고 투표해보아요.</span>
        </p>
      </div>
      <ul className="votebox_container">
        <Slider {...settings}>
          {mockDatas.results.map((mockData) => (
            <MainVoteBox mockData={mockData} key={mockData.title} />
          ))}
        </Slider>
      </ul>
      <Link href={`/vote`}>
        <a className="vote_button">
          <button>투표하러 가기</button>
        </a>
      </Link>
      {breakpoints.sm == true ? (
        <div className="vote_woman">
          <Image layout="responsive" src="/img/woman.svg" alt="woman" width={75} height={105} />
        </div>
      ) : (
        <div className="vote_woman_group">
          <Image layout="responsive" src="/img/woman_group.svg" alt="woman_group" width={116} height={154} priority={true} />
        </div>
      )}
      {breakpoints.sm === true ? (
        <div className="vote_man">
          <Image layout="responsive" src="/img/man.svg" alt="man" width={68} height={115} />
        </div>
      ) : (
        <div className="vote_man_group">
          <Image layout="responsive" src="/img/man_group.svg" alt="man_group" width={139} height={190} priority={true} />
        </div>
      )}
      <style jsx>{`
        .vote_section {
          background-color: #f7f8fa;
          margin: 0 auto;
          position: relative;
          box-sizing: border-box;
        }
        .vote_key_img {
          width: 36px;
          height: 28px;
        }
        .vote_section_title {
          padding: 40px 21px 0;
          box-sizing: border-box;
        }
        .vote_section_title h1 {
          font-size: 22px;
          font-weight: 700;
          line-height: 28px;
          margin: 5px 0 8px 0;
        }
        .vote_section_title p {
          font-size: 13px;
          font-weight: 400;
          line-height: 20px;
          color: #888;
          margin: 0;
        }
        .votebox_container {
          /* slick 컨테이너 */
          margin: 26px auto 32px;
          list-style: none;
          padding: 0;
          width: 75%;
        }
        .vote_button {
          display: block;
          text-align: center;
        }
        .vote_button button {
          border: none;
          width: 174px;
          height: 46px;
          border-radius: 8px;
          background-color: #3178ff;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          margin: 0px 0 64px;
        }
        .vote_woman {
          position: absolute;
          bottom: 0;
          width: 75px;
        }
        .vote_man {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 68px;
        }
        .slick-list {
          width: 30%;
        }
        /* Tablet------------------------------  */
        @media (min-width: 576px) {
          .vote_section_title {
            margin: 30px auto 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 300px;
            text-align: center;
          }
          .vote_key_img {
            width: 55px;
            height: 42px;
          }
          .vote_section_title h1 {
            font-size: 28px;
            font-weight: 700;
            line-height: 36px;
          }
          .vote_section_title p {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
          }
          .vote_section_title span {
            display: block;
            font-size: 16px;
            line-height: 24px;
          }
          .votebox_container {
            /* slick 컨테이너 */
            margin: 102px auto 0px;
            width: 530px;
          }
          .vote_button button {
            border: none;
            width: 250px;
            height: 58px;
            font-size: 23px;
            font-weight: 500;
            margin: 91px 0 40px;
          }
          .vote_woman_group {
            position: absolute;
            bottom: 0;
            left: 40px;
            width: 116px;
            height: 154px;
          }
          .vote_man_group {
            position: absolute;
            bottom: 0;
            right: 40px;
            width: 139px;
            height: 190px;
          }
        }

        /* Desktop------------------*/
        @media (min-width: 1200px) {
          .vote_section_title {
            margin: 30px auto 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 500px;
            text-align: center;
          }
          .vote_key_img {
            width: 55px;
            height: 42px;
          }
          .vote_section_title h1 {
            height: 52px;
            padding-top: 10px;
            box-sizing: border-box;
            font-size: 40px;
            font-weight: 700;
            line-height: 36px;
            margin: 6px 0 8px 0;
          }
          .vote_section_title p {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
          }
          .vote_section_title span {
            display: inline;
            font-size: 16px;
            line-height: 24px;
          }
          .votebox_container {
            /* slick 컨테이너 */
            width: 900px;
          }
          .vote_button button {
            border: none;
            width: 250px;
            height: 58px;
            font-size: 23px;
            font-weight: 500;
            margin: 91px 0 40px;
          }
          .vote_woman_group {
            position: absolute;
            bottom: 0;
            left: 50px;
            width: 240px;
            height: 318px;
          }
          .vote_man_group {
            position: absolute;
            bottom: 0;
            right: 50px;
            width: 288px;
            height: 392px;
          }
        }
      `}</style>
    </section>
  );
}
