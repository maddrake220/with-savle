import SkeletonElement from "./SkeletonElement";

const SkeletonBox = () => {
  return (
    <div className="skeleton-container">
      <SkeletonElement type="title" />
      <SkeletonElement type="title2" />
      <hr />
      <SkeletonElement type="item_box" />
      <SkeletonElement type="item_box" />
      <SkeletonElement type="item_box" />
      <div>
        <SkeletonElement type="text" />
        <SkeletonElement type="text2" />
      </div>

      <style jsx>{`
        .skeleton-container {
          position: relative;
          width: 278px;
          height: 340px;
          box-sizing: border-box;
          padding: 24px 19px 0px;
          background-color: #fff;
          box-shadow: 0px 4px 10px 4px #e3e9f0;
          border-radius: 8px;
          margin-bottom: 16px;
        }
        hr {
          border-top: 1px solid #e3e7ed;
        }
        .skeleton-container div {
          display: flex;
          justify-content: space-between;
        }
        @media (min-width: 1200px) {
          .skeleton-container {
            margin-bottom: 32px;
            width: 378px;
            height: 463px;
            padding: 30px 27px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default SkeletonBox;
