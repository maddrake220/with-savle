/* eslint-disable prettier/prettier */
/* eslint-disable sonarjs/no-identical-functions */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Slider from "react-slick";
import Data from "src/pages/goal/goalAPI.json";
import style from "styles/MainGoal.module.scss";

import MainGoalItem from "@/components/Goal/MainGoalItem";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function MainGoalSlider() {
  function PreviousArrow(properties) {
    const { className, onClick } = properties;
    return (
      <div className={className} onClick={onClick}>
        <Image src="/img/prev.svg" alt="이전" width={10} height={40} />
        <style jsx>{`
          .slick-arrow {
            display: flex;
            top: 50%;
          }
          .slick-arrow:before {
            content: "";
          }
        `}</style>
      </div>
    );
  }
  function NextArrow(properties) {
    const { className, onClick } = properties;
    return (
      <div className={className} onClick={onClick}>
        <Image src="/img/next.svg" alt="next" width={10} height={40} />
        <style jsx>{`
          .slick-arrow {
            display: flex;
            justify-content: end;
            top: 50%;
          }
          .slick-arrow:before {
            content: "";
          }
        `}</style>
      </div>
    );
  }

  const breakpoint = useBreakpoint();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  const goalItems = Data.results;

  return (
    <div className="container">
      <ul className={style.goal_slider}>
        {breakpoint.sm ? (
          <Slider {...settings}>
            {goalItems.map((item) => {
              return (
                <MainGoalItem
                  id={item.id}
                  age={item.age}
                  categories={item.categories.slice(0, 2)}
                  text={item.text}
                  likes={item.likes}
                  comments={item.comments.length}
                  key={item.id}
                />
              );
            })}
          </Slider>
        ) : (
          <div>
            {goalItems.map((item) => {
              return (
                <MainGoalItem
                  id={item.id}
                  age={item.age}
                  categories={item.categories.slice(0, 2)}
                  text={item.text}
                  likes={item.likes}
                  comments={item.comments.length}
                  key={item.id}
                />
              );
            })}
          </div>
        )}
      </ul>
    </div>
  );
}
