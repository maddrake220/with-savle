import server from "@/config/server";
import axios from "axios";
import goalHeaderSvg from "../../../public/goal-header-savle-char.svg";
import Image from "next/image";
import Head from "next/head";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useCallback, useEffect, useState } from "react";
import CategoryButton from "@/components/goal/CategoryButton";
import GoalDropdown from "@/components/goal/GoalDropdown";
import GoalCard from "@/components/goal/GoalCard";
import goalAPI from "./goalAPI.json";
const categories = [
  { id: 0, text: "전체", backgroundColor: "#3178FF" },
  { id: 1, text: "10대", backgroundColor: " #FDD18F" },
  { id: 2, text: "20대", backgroundColor: "#D9FBCD" },
  { id: 3, text: "30대", backgroundColor: "#CADCFF" },
  { id: 4, text: "40대 이상", backgroundColor: "#3178FF" },
];
function Goal({ data }) {
  // console.log(data);
  // console.log(goalAPI.results);
  // data = [...goalAPI.results];
  const queryMatch = useBreakpoint();
  const [clickedCategory, setClickedCategory] = useState(0);
  const [filtered, setFiltered] = useState({ start: 0, end: 1000 });
  const [selectedDropdown, setSelectedDropdown] = useState("newest");
  const handleMenuChange = (event) => {
    setSelectedDropdown(event.target.value);
  };
  const onClick = useCallback((id) => {
    setClickedCategory(id);
  }, []);
  useEffect(() => {
    let start;
    let end;
    switch (clickedCategory) {
      case 1:
        start = 10;
        end = 19;
        break;
      case 2:
        start = 20;
        end = 29;
        break;
      case 3:
        start = 30;
        end = 39;
        break;
      case 4:
        start = 40;
        end = 1000;
        break;
      default:
        start = 0;
        end = 1000;
        break;
    }
    setFiltered({ start, end });
  }, [clickedCategory]);
  return (
    <section className="goal-container">
      <Head>
        <title>savle 목표달성</title>
        <meta keyword="" />
        <meta contents="" />
      </Head>
      <header>
        <div className="header-info container">
          <h1>세이블에서 목표달성, 함께해요!</h1>
          <p>다른 사람들과 목표를 공유해보아요.</p>
        </div>
        <div className="goal-header-image">
          <Image
            width={queryMatch?.sm ? 71 : queryMatch?.md ? 141 : 185}
            height={queryMatch?.sm ? 70 : queryMatch?.md ? 138 : 181}
            src={goalHeaderSvg}
            alt="savle"
          />
        </div>
      </header>
      <main>
        <div className={`${queryMatch?.sm ? "goal-categories-small" : "container"}`}>
          <ul className={`goal-categories`}>
            {categories.map((category) => (
              <li key={category.id}>
                <CategoryButton id={category.id} text={category.text} backgroundColor={category.backgroundColor} onClick={onClick} clicked={clickedCategory} />
              </li>
            ))}
          </ul>
        </div>
        <div className="goal-list-wrapper container">
          <GoalDropdown
            label=""
            options={[
              { label: "최신순", value: "newest" },
              { label: "오래된순", value: "oldest" },
            ]}
            value={selectedDropdown}
            onChange={handleMenuChange}
            style={{
              backgroundColor: "transparent",
              border: "none",
              position: "absolute",
              right: "0",
              fontSize: "0.813rem",
              lineHeight: "1.25rem",
              color: "#111",
            }}
          />

          <ul className="goal-list">
            {data
              .filter((value) => {
                return value.age >= filtered.start && value.age <= filtered.end;
              })
              .sort((a, b) => {
                const d1 = Date.parse(a.createAt);
                const d2 = Date.parse(b.createAt);
                if (selectedDropdown === "oldest") {
                  return d2 - d1;
                } else {
                  return d1 - d2;
                }
              })
              .map((value, index) => (
                <GoalCard
                  key={index}
                  id={value.id}
                  age={value.age}
                  categories={value.categories}
                  comments={value.comments}
                  likes={value.likes}
                  text={value.text}
                />
              ))}
          </ul>
        </div>
      </main>
      <style jsx>{`
        header {
          background-color: rgba(49, 120, 255, 0.8);
          height: 8rem;
          position: relative;
          color: white;
        }
        header .header-info {
          padding-top: 0.34rem;
          display: flex;
          flex-direction: column;
        }
        header h1 {
          width: 12.288rem;
          margin-right: 6.563rem;
          font-size: 1.375rem;
          font-weight: bold;
          line-height: 1.75rem;
        }
        header p {
          font-weight: normal;
          font-size: 0.813rem;
          line-height: 1.25rem;
          transform: translateY(-0.843rem);
        }
        header .goal-header-image {
          position: absolute;
          right: 1.089rem;
          bottom: 1.155rem;
        }
        ol,
        ul {
          list-style: none;
          margin: 0px;
          padding: 0px;
        }
        main {
          background: rgba(143, 201, 255, 0.15);
        }
        .goal-categories-small {
          margin-left: 1rem;
        }
        main .goal-categories {
          height: 3.875rem;
          display: flex;
          align-items: center;
          overflow-x: scroll;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        main .goal-categories li:not(:first-child) {
          margin-left: 0.75rem;
        }
        main .goal-categories::-webkit-scrollbar {
          display: none;
        }
        main .goal-dropdown {
          font-size: 0.813rem;
          line-height: 1.25rem;
          height: 1.25rem;
        }
        main .goal-list-wrapper {
          position: relative;
        }
        main .goal-list {
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        @media (max-width: 295px) {
          .goal-header-image {
            display: none;
          }
        }
        @media (min-width: 576px) {
          header {
            height: 12.688rem;
          }
          header .header-info {
            padding-top: 1rem;
          }
          header h1 {
            width: 16.25rem;
            line-height: 2.25rem;
            font-size: 1.75rem;
            letter-spacing: 0.031rem;
          }
          header p {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          header .goal-header-image {
            bottom: 2.188rem;
          }
        }
        @media (min-width: 1200px) {
          header {
            height: 15.375rem;
          }
          header h1 {
            width: 24.125rem;
            font-size: 2.5rem;
            line-height: 3.438rem;
          }
          header p {
            transform: translateY(-2.224rem);
            font-size: 1.75rem;
            line-height: 2.25rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Goal;

export const getServerSideProps = async () => {
  const res = await axios.get(`${server}/api/goal`);
  console.log(res.data.results);
  return {
    props: {
      data: res.data.results,
    },
  };
};
