import Image from "next/image";

export default function MainVoteBox({ mockData }) {
  return (
    <li className="vote_box">
      <h1 className="subject_box">{mockData.title.length > 35 ? `${mockData.title.slice(0, 35)}...` : mockData.title}</h1>
      {mockData.voteSelect.map((selectItem) => (
        <div key={selectItem.item} className="vote_select-items">
          <input type="radio" id={selectItem.item} name="vote" value={selectItem.item} disabled />
          <label htmlFor={selectItem.item}>{selectItem.item}</label>
        </div>
      ))}
      <div className="favorite_comment">
        <div className="favorite">
          <Image src="/img/favorite.svg" alt="Favorite" width={18} height={18} />
          <span>{mockData.likes}</span>
        </div>
        <div>
          <Image src="/img/comment.svg" alt="Comment" width={20} height={20} />
          <span>{mockData.voteComments.length}</span>
        </div>
      </div>

      <style jsx>{`
        /* Mobile */
        .vote_box {
          position: relative;
          width: 233px;
          height: 322px;
          box-sizing: border-box;
          padding: 15px 10px 0px;
          margin: 0 auto;
          background-color: #fff;
          box-shadow: 0px 4px 9px 4px rgba(227, 231, 237, 0.8);
          border-radius: 8px;
        }
        .subject_box {
          padding-bottom: 11px;
          margin: 0 0 17px;
          border-bottom: 1px solid #e3e7ed;
          font-size: 15px;
          font-weight: 700;
          line-height: 23px;
          height: 40px;
        }
        .vote_select-items {
          display: flex;
          align-items: center;
          background-color: #f6f6f6;
          height: 39px;
          border-radius: 8px;
          margin-bottom: 7px;
          padding-left: 9px;
        }
        .vote_select-items label {
          font-size: 12px;
          font-weight: 400;
          margin-left: 4px;
        }
        input[type="radio"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          border: 1px solid #b2b2b2;
          height: 8px;
          width: 8px;
          border-radius: 50%;
          background-color: #fff;
        }
        .favorite_comment {
          position: absolute;
          bottom: 15px;
          left: 18px;
          height: 19px;
          font-size: 12px;
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
          margin-right: 11px;
        }

        /* tablet ------------------------ */
        @media (min-width: 576px) {
          .vote_box {
            width: 248px;
            height: 304px;
            padding: 21px 17px 0px;
          }
          .subject_box {
            padding-bottom: 10px;
            margin: 0 0 16px;
            font-size: 16px;
            line-height: 21px;
            height: 42px;
          }
          .vote_select-items {
            height: 36px;
          }
        }

        /* Desktop ------------------------ */
        @media (min-width: 1200px) {
          .vote_box {
            width: 278px;
            height: 340px;
            padding: 24px 20px 0px;
          }
          .subject_box {
            padding-bottom: 12px;
            margin-bottom: 18px;
            font-size: 18px;
            line-height: 24px;
            height: 48px;
          }
          .vote_select-items {
            height: 41px;
            padding-left: 10px;
          }
          .vote_select-items label {
            font-size: 13px;
          }
          input[type="radio"] {
            height: 9px;
            width: 9px;
          }
          .favorite_comment {
            bottom: 15px;
            font-size: 13px;
          }
          .favorite {
            margin-right: 11px;
          }
        }
      `}</style>
    </li>
  );
}
