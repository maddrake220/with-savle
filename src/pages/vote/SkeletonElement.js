const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;
  return (
    <div className={classes}>
      <style jsx>{`
        .skeleton {
          border-radius: 4px;
          background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0),
              rgba(255, 255, 255, 0.5) 50%,
              rgba(255, 255, 255, 0) 80%
            ),
            lightgray;
          background-repeat: repeat-y;
          background-size: 50px 100px;
          animation: loading 2.5s infinite;
        }
        .skeleton.title {
          height: 20px;
          margin-bottom: 10px;
        }
        .skeleton.title2 {
          width: 50%;
          height: 20px;
          margin-bottom: 10px;
        }
        .skeleton.item_box {
          display: flex;
          align-items: center;
          background-color: #f6f6f6;
          height: 41px;
          margin-bottom: 8px;
          padding-left: 12px;
        }
        .skeleton.text {
          width: 40%;
          height: 20px;
          position: absolute;
          bottom: 15px;
          left: 16px;
        }
        .skeleton.text2 {
          width: 20%;
          height: 20px;
          position: absolute;
          bottom: 15px;
          right: 16px;
        }
        @keyframes loading {
          to {
            background-position: 100% 0, 0 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SkeletonElement;
