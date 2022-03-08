export default function MainGoalTitle() {
  return (
    <div className="main-title">
      <h1>
        세이블에서 목표달성,
        <br /> 함께해요!
      </h1>
      <span>다른 사람들과 목표를 공유해 보아요.</span>
      <style jsx>{`
        .main-title {
          margin-left: 22px;
          margin-top: 56px;
        }
        .main-title h1 {
          font-size: 22px;
        }
        .main-title span {
          color: #888888;
          font-size: 13px;
          line-height: 20px;

          margin-top: 6px;
        }
      `}</style>
    </div>
  );
}
