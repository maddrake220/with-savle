import React, { useCallback, useEffect, useState } from "react";

const getAgeGeneration = (age) => {
  return age >= 10 && age < 20 ? "10대" : age >= 20 && age < 30 ? "20대" : age >= 30 && age < 40 ? "30대" : age >= 40 ? "40대 이상" : "어린이";
};
export default function GoalCard({ id, age, categories, comments, likes, text }) {
  const [like, setLike] = useState(false);

  useEffect(() => {
    const likes = localStorage.getItem("goal-like");
    likes !== null ? setLike(likes.includes(id)) : setLike(false);
  }, [id]);

  const onClick = useCallback(
    (e) => {
      e.stopPropagation();
      const likes = localStorage.getItem("goal-like");
      let arrlikes = [];
      let newLikes = [];
      arrlikes = likes !== null && likes.split(",");
      !like ? (newLikes = [...arrlikes, id]) : (newLikes = arrlikes.filter((v) => v.toString() !== id.toString()));
      localStorage.setItem("goal-like", newLikes);
      setLike((like) => !like);
    },
    [id, like],
  );

  const onClickCard = useCallback(() => {
    alert("상세페이지로 이동 구현X");
  }, []);
  return (
    <li className="goal-card" key={id} onClick={onClickCard}>
      <div className="goal-card-wrapper">
        <div className="card-user-info">
          <span>익명의 {id}님</span>
          <span className="card-info-user-age">{getAgeGeneration(age)}</span>
        </div>
        <ul className="card-categories">
          {categories.map((category, index) => (
            <li key={index} className="card-category">
              <span>{category}</span>
            </li>
          ))}
        </ul>
        <div className="card-text">{text}</div>
        <div className="card-side">
          <div className="card-likes">
            <svg style={{ cursor: "pointer" }} onClick={onClick} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.45067 9.90821L9.40329 16.4395C9.64278 16.6644 9.76253 16.7769 9.90372 16.8046C9.9673 16.8171 10.0327 16.8171 10.0963 16.8046C10.2375 16.7769 10.3572 16.6644 10.5967 16.4395L17.5493 9.90821C19.5055 8.07059 19.743 5.0466 18.0978 2.92607L17.7885 2.52734C15.8203 -0.00941896 11.8696 0.416015 10.4867 3.31365C10.2913 3.72296 9.70868 3.72296 9.51333 3.31365C8.13037 0.416015 4.17972 -0.00941539 2.21154 2.52735L1.90219 2.92607C0.256947 5.0466 0.494498 8.07059 2.45067 9.90821Z"
                stroke="#FF2222"
                fill={like ? "#FF2222" : ""}
                strokeWidth="1.5"
              />
            </svg>
            <span>{likes}</span>
          </div>
          <div className="card-comments">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.3259 5.77772L18.9101 6.0555L18.9101 6.0555L19.3259 5.77772ZM19.3259 16.2223L18.9101 15.9445H18.9101L19.3259 16.2223ZM18.2223 17.3259L17.9445 16.9101V16.9101L18.2223 17.3259ZM14 17.9986L13.9978 17.4986C13.7225 17.4998 13.5 17.7233 13.5 17.9986H14ZM14 18L14.4472 18.2236C14.4819 18.1542 14.5 18.0776 14.5 18H14ZM10 18H9.5C9.5 18.0776 9.51807 18.1542 9.55279 18.2236L10 18ZM10 17.9986H10.5C10.5 17.7233 10.2775 17.4998 10.0022 17.4986L10 17.9986ZM5.77772 17.3259L6.0555 16.9101L6.0555 16.9101L5.77772 17.3259ZM4.67412 16.2223L5.08986 15.9445H5.08986L4.67412 16.2223ZM4.67412 5.77772L5.08986 6.0555L4.67412 5.77772ZM5.77772 4.67412L6.0555 5.08986L5.77772 4.67412ZM18.2223 4.67412L17.9445 5.08986V5.08986L18.2223 4.67412ZM20.5 11C20.5 9.60594 20.5006 8.52277 20.4132 7.66325C20.3249 6.79537 20.1427 6.10023 19.7416 5.49993L18.9101 6.0555C19.1832 6.4641 19.3381 6.97564 19.4183 7.76445C19.4994 8.56162 19.5 9.58513 19.5 11H20.5ZM19.7416 16.5001C20.1427 15.8998 20.3249 15.2046 20.4132 14.3368C20.5006 13.4772 20.5 12.3941 20.5 11H19.5C19.5 12.4149 19.4994 13.4384 19.4183 14.2355C19.3381 15.0244 19.1832 15.5359 18.9101 15.9445L19.7416 16.5001ZM18.5001 17.7416C18.9914 17.4133 19.4133 16.9914 19.7416 16.5001L18.9101 15.9445C18.6548 16.3267 18.3267 16.6548 17.9445 16.9101L18.5001 17.7416ZM14.0022 18.4986C15.0787 18.4939 15.9452 18.4734 16.6582 18.3749C17.3793 18.2752 17.9757 18.092 18.5001 17.7416L17.9445 16.9101C17.5875 17.1487 17.1516 17.2971 16.5213 17.3843C15.883 17.4725 15.079 17.4939 13.9978 17.4986L14.0022 18.4986ZM14.5 18V17.9986H13.5V18H14.5ZM13.3416 20.4348L14.4472 18.2236L13.5528 17.7764L12.4472 19.9875L13.3416 20.4348ZM10.6584 20.4348C11.2111 21.5403 12.7889 21.5403 13.3416 20.4348L12.4472 19.9875C12.263 20.3561 11.737 20.3561 11.5528 19.9875L10.6584 20.4348ZM9.55279 18.2236L10.6584 20.4348L11.5528 19.9875L10.4472 17.7764L9.55279 18.2236ZM9.5 17.9986V18H10.5V17.9986H9.5ZM5.49993 17.7416C6.02427 18.092 6.62069 18.2752 7.34176 18.3749C8.0548 18.4734 8.92135 18.4939 9.99782 18.4986L10.0022 17.4986C8.92095 17.4939 8.11704 17.4725 7.47869 17.3843C6.84838 17.2971 6.41252 17.1487 6.0555 16.9101L5.49993 17.7416ZM4.25839 16.5001C4.5867 16.9914 5.00858 17.4133 5.49993 17.7416L6.0555 16.9101C5.67334 16.6548 5.34521 16.3267 5.08986 15.9445L4.25839 16.5001ZM3.5 11C3.5 12.3941 3.4994 13.4772 3.58683 14.3368C3.67512 15.2046 3.85728 15.8998 4.25839 16.5001L5.08986 15.9445C4.81684 15.5359 4.66194 15.0244 4.5817 14.2355C4.5006 13.4384 4.5 12.4149 4.5 11H3.5ZM4.25839 5.49993C3.85728 6.10023 3.67512 6.79537 3.58683 7.66325C3.4994 8.52277 3.5 9.60594 3.5 11H4.5C4.5 9.58513 4.5006 8.56162 4.5817 7.76445C4.66194 6.97564 4.81684 6.4641 5.08986 6.0555L4.25839 5.49993ZM5.49993 4.25839C5.00858 4.5867 4.5867 5.00858 4.25839 5.49993L5.08986 6.0555C5.34521 5.67334 5.67334 5.34521 6.0555 5.08986L5.49993 4.25839ZM11 3.5C9.60594 3.5 8.52277 3.4994 7.66325 3.58683C6.79537 3.67512 6.10023 3.85728 5.49993 4.25839L6.0555 5.08986C6.4641 4.81684 6.97564 4.66194 7.76445 4.5817C8.56162 4.5006 9.58513 4.5 11 4.5V3.5ZM13 3.5H11V4.5H13V3.5ZM18.5001 4.25839C17.8998 3.85728 17.2046 3.67512 16.3368 3.58683C15.4772 3.4994 14.3941 3.5 13 3.5V4.5C14.4149 4.5 15.4384 4.5006 16.2355 4.5817C17.0244 4.66194 17.5359 4.81684 17.9445 5.08986L18.5001 4.25839ZM19.7416 5.49993C19.4133 5.00858 18.9914 4.5867 18.5001 4.25839L17.9445 5.08986C18.3267 5.34521 18.6548 5.67334 18.9101 6.0555L19.7416 5.49993Z"
                fill="#2D2D2D"
              />
              <circle cx="16" cy="11" r="1" fill="#2D2D2D" />
              <circle cx="12" cy="11" r="1" fill="#2D2D2D" />
              <circle cx="8" cy="11" r="1" fill="#2D2D2D" />
            </svg>

            <span>{comments.length}</span>
          </div>
          <div className="card-more">
            <span>더보기 &gt;</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        ol,
        ul {
          list-style: none;
          margin: 0px;
          padding: 0px;
        }
        .goal-card {
          cursor: pointer;
          width: 17.25rem;
          height: 16.938rem;
          background: #ffffff;
          box-shadow: 0px 0.25rem 0.625rem 0.25rem #e3e9f0;
          border-radius: 0.5rem;
          flex: none;
          order: 0;
          flex-grow: 0;
          position: relative;
        }
        .goal-card-wrapper {
          margin: 1.25rem;
        }
        .goal-card .card-user-info {
          font-size: 13px;
          line-height: 20px;
          color: #b2b2b2;
        }
        .goal-card .card-user-info .card-info-user-age::before {
          content: " I ";
        }
        .goal-card .card-categories {
          margin-top: 0.337rem;
          display: flex;
          flex-wrap: wrap;
        }
        .goal-card .card-category {
          color: #73bcff;
          border: 0.085rem solid #73bcff;
          box-sizing: border-box;
          border-radius: 1.394rem;
          font-size: 0.813rem;
          line-height: 1.25rem;
          padding: 0.063rem 0.75rem;
          margin-bottom: 0.2rem;
          font-weight: bold;
        }
        .goal-card .card-category:not(:first-child) {
          margin-left: 6px;
        }
        .goal-card .card-category span::before {
          content: "# ";
        }
        .goal-card .card-text {
          margin-top: 0.445rem;
          height: 7.85rem;
          overflow: hidden;
          font-size: 1rem;
          line-height: 1.5rem;
          color: #2d2d2d;
        }
        .goal-card .card-side {
          position: absolute;
          width: 82%;
          bottom: 1.25rem;
          display: flex;
          font-weight: bold;
          font-size: 1rem;
          line-height: 1.5rem;
          color: #000;
        }
        .goal-card .card-side .card-likes {
          display: flex;
          align-items: center;
        }
        .goal-card .card-side .card-likes span {
          margin-left: 0.313rem;
        }
        .goal-card .card-side .card-comments {
          margin-left: 0.5rem;
          display: flex;
          align-items: center;
        }

        .goal-card .card-side .card-comments span {
          margin-left: 0.313rem;
        }
        .card-more {
          display: none;
        }
        @media (min-width: 1200px) {
          .goal-card {
            width: 23.625rem;
            height: 21.688rem;
          }
          .goal-card-wrapper {
            margin: 1.875rem 2.5rem;
          }
          .goal-card .card-user-info {
            font-weight: bold;
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .goal-card .card-categories {
            margin-top: 0.5rem;
          }
          .goal-card .card-text {
            margin-top: 1rem;
            height: 11.125rem;
          }
          .card-more {
            cursor: pointer;
            position: absolute;
            right: 0;
            font-weight: bold;
            font-size: 0.813rem;
            line-height: 1.25rem;
            color: #888;
            display: block;
          }
        }
      `}</style>
    </li>
  );
}
