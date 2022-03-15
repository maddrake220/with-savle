import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Image from "next/image";
import Slider from "react-slick";

import MainGoalItem from "@/components/Goal/MainGoalItem";
import { useBreakpoint } from "@/hooks/index";
import style from "@/styles/goal/MainGoal.module.scss";
import Data from "@/utils/mockdata/goalAPI.json";

import { NextArrow, PreviousArrow } from "../Common/SlickArrow";

export default function MainGoalSlider() {
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
    <div className={`${style.main_goal_slider}`}>
      <ul
        className={`${style.goal_slider} ${
          breakpoint.sm ? style.slick_container : ""
        }`}
      >
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
          <div className={`${style.no_goal_slider}`}>
            {goalItems.map((item) => (
              <MainGoalItem
                id={item.id}
                age={item.age}
                categories={item.categories.slice(0, 2)}
                text={item.text}
                likes={item.likes}
                comments={item.comments.length}
                key={item.id}
              />
            ))}
          </div>
        )}
      </ul>
    </div>
  );
}
