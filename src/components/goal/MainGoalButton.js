/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

export default function MainGoalButton() {
  return (
    <div className="btns">
      <a href="https://savle.net/" alt="">
        <div className="btn blog">추천 목표 보러가기</div>
      </a>

      <Link href={`/goal`}>
        <div className="btn more">더 많은 목표 보기</div>
      </Link>

      <style jsx>{`
        a {
          text-decoration: none;
        }
        .btns {
          display: flex;
          flex-direction: column;
          align-items: center;

          font-size: 14px;
          font-weight: 700;
          text-decoration: none;

          margin-top: 24px;
        }
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 174px;
          height: 46px;

          margin-top: 8px;

          border: 1px solid #3178ff;
          border-radius: 8px;
        }
        .btn.blog {
          background: #ffffff;

          color: #3178ff;
        }
        .btn.more {
          background: #3178ff;

          color: white;

          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
