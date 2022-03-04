import Image from "next/image";

export default function VoteBox({ voteBoxData }) {
  const likeToggle = () => {};
  return (
    <li className="vote_box">
      <h1 className="subject_box">{voteBoxData.title}</h1>
      {voteBoxData.voteSelect.map((selectItem) => (
        <div key={selectItem.item} className="vote_select-items">
          <input type="radio" id={selectItem.item} name="vote" value={selectItem.item} disabled />
          <label htmlFor={selectItem.item}>{selectItem.item}</label>
        </div>
      ))}
      <div className="favorite_comment">
        <div className="favorite">
          <Image src="/img/favorite.png" alt="Favorite" width={21} height={21} />
          <span onClick={likeToggle}>{voteBoxData.likes}</span>
        </div>
        <div>
          <Image src="/img/comment.svg" alt="Comment" width={21} height={21} />
          <span>{voteBoxData.voteComments.length}</span>
        </div>
      </div>
      <button>더보기 &gt;</button>
      <style jsx>{`
        /* Mobile */
        .vote_box {
          position: relative;
          width: 278px;
          height: 340px;
          box-sizing: border-box;
          padding: 24px 19px 0px;
          margin-bottom: 16px;
          background-color: #fff;
          box-shadow: 0px 4px 10px 4px #e3e9f0;
          border-radius: 8px;
        }
        .subject_box {
          padding-bottom: 12px;
          margin: 0 0 18px;
          border-bottom: 1px solid #e3e7ed;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          height: 48px;
        }
        .vote_select-items {
          display: flex;
          align-items: center;
          background-color: #f6f6f6;
          height: 41px;
          border-radius: 8px;
          margin-bottom: 8px;
          padding-left: 12px;
        }
        .vote_select-items label {
          font-size: 13px;
          font-weight: 400;
          margin-left: 7.46px;
        }
        input[type="radio"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          border: 1px solid #b2b2b2;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background-color: #fff;
        }
        .favorite_comment {
          position: absolute;
          bottom: 15px;
          height: 18px;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .favorite_comment div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .favorite_comment span {
          margin-left: 4px;
        }
        .favorite {
          border: 1px solid red;
          margin-right: 11px;
        }
        button {
          position: absolute;
          bottom: 15px;
          right: 16px;
          border: none;
          background: transparent;
          font-size: 13px;
          font-weight: 700;
          color: #888;
        }

        /* Desktop ------------------------ */
        @media (min-width: 1200px) {
          .vote_box {
            margin-bottom: 32px;
            width: 378px;
            height: 463px;
            padding: 30px 27px 20px;
          }
          .subject_box {
            padding-bottom: 19px;
            margin-bottom: 24px;
            font-size: 24px;
            line-height: 32px;
            height: 65px;
          }
          .vote_select-items {
            height: 54px;
            padding-left: 14px;
          }
          .vote_select-items label {
            font-size: 18px;
          }
          input[type="radio"] {
            height: 12px;
            width: 12px;
          }
          .favorite_comment {
            bottom: 16px;
            height: 24px;
            font-size: 16px;
          }
          .favorite {
            margin-right: 11px;
          }
          button {
            bottom: 18px;
            right: 27px;
          }
        }
      `}</style>
    </li>
  );
}
