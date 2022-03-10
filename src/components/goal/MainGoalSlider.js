import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainGoalItem from "@/components/goal/MainGoalItem";
import Data from "src/pages/goal/goalAPI.json";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function MainGoalSlider() {
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg width="10" height="40" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.17749 8.99979L1.47038 9.7069L0.763277 8.99979L1.47038 8.29268L2.17749 8.99979ZM9.11744 17.354L1.47038 9.7069L2.8846 8.29268L10.5317 15.9397L9.11744 17.354ZM1.47038 8.29268L9.11744 0.645627L10.5317 2.05984L2.8846 9.7069L1.47038 8.29268Z"
            fill="#2D2D2D"
          />
        </svg>
        <style jsx>{`
          .slick-arrow:before {
            content: "";
          }
        `}</style>
      </div>
    );
  }
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg width="10" height="40" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.82251 9.00021L9.52962 8.2931L10.2367 9.00021L9.52962 9.70732L8.82251 9.00021ZM1.88256 0.646043L9.52962 8.2931L8.1154 9.70732L0.468343 2.06026L1.88256 0.646043ZM9.52962 9.70732L1.88256 17.3544L0.468343 15.9402L8.1154 8.2931L9.52962 9.70732Z"
            fill="#2D2D2D"
          />
        </svg>
        <style jsx>{`
          .slick-arrow {
            display: flex;
            justify-content: end;
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
    prevArrow: <PrevArrow />,
  };

  const goalItems = Data.results;

  return (
    <div className="container">
      <ul className="goal-slider">
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
      <style jsx>{`
        .goal-slider {
          list-style: none;
          width: 100%;
          padding: 0;
          margin: 0 auto;

          background: #f0f6fb;
        }
        .goal-slider div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;

          width: 575px;
          margin: auto;
        }
        @media (min-width: 1200px) {
          .goal-slider {
            position: relative;
          }
          .goal-slider div {
            position: absolute;

            left: 132px;
            top: -170px;
          }
        }
      `}</style>
    </div>
  );
}
