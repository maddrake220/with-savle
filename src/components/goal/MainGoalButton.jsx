export default function MainGoalButton() {
  return (
    <div className="btns">
      <div className="btn blog">
        <a href="/" alt="">
          추천 목표 보러가기
        </a>
      </div>
      <div className="btn more">
        <a href="/" alt="">
          더 많은 목표 보기
        </a>
      </div>
      <style jsx>{`
        .btns {
          display: flex;
          flex-direction: column;
          align-items: center;

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
        .btn a {
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }
        .btn.blog {
          background: #ffffff;
        }
        .btn.blog a {
          color: #3178ff;
        }
        .btn.more {
          background: #3178ff;
        }
        .btn.more a {
          color: white;
        }
      `}</style>
    </div>
  );
}
