/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/link-passhref */
import Image from "next/image"
import Link from "next/link";

MainGoalItem.defaultProps = {
  id: 0,
  age: 999,
  text: "",
  likes: 0,
  comments: 0,
};

export default function MainGoalItem({
  id,
  age,
  categories,
  text,
  likes,
  comments,
}) {
  return (
    <Link href={`/goal`}>
      <li>
        <div className="item">
          <div className="info">
            익명의 {id}님 | {Number.parseInt(age / 10) * 10}대
          </div>
          <div className="categories">
            <ul>
              <li>
                <span>#여행</span>
              </li>
              {categories.map((item) => {
                return (
                  <li key={item}>
                    #{item.length > 3 ? item.slice(0, 3) + ".." : item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text">
            {text.length > 95 ? text.slice(0, 95) + " ..." : text}
          </div>
          <div className="Icons">
            <div className="likes">
            <Image
            src="/img/goallike.svg"
            alt="좋아요"
            width={20}
            height={20}
          />
              <span>{likes}</span>
            </div>
            <div className="comments">
            <Image
            src="/img/comment.svg"
            alt="댓글"
            width={24}
            height={24}
          />
              <span>{comments}</span>
            </div>
          </div>
        </div>
        <style jsx>{`
          .item {
            position: relative;

            width: 240px;
            height: 272px;

            margin: 26px auto 0;

            background: #ffffff;
            box-shadow: 0px 4px 10px 4px #e3e9f0;
            border-radius: 8px;

            cursor: pointer;
          }
          .info {
            color: #b2b2b2;
            font-size: 13px;
            line-height: 20px;

            padding-top: 20px;
            margin-left: 18px;
          }
          .categories ul {
            list-style: none;

            color: #73bcff;
            display: flex;

            padding-top: 8px;
            padding-left: 12px;
          }
          .categories ul li {
            font-size: 13px;

            width: 65px;
            height: 26px;

            margin-left: 6px;

            border: 1.3px solid #73bcff;
            box-sizing: border-box;
            border-radius: 20px;

            display: flex;
            justify-content: center;
            align-items: center;
          }
          .text {
            font-size: 14px;
            line-height: 22px;

            margin: 22px 17px 0;
          }
          .Icons {
            position: absolute;
            display: flex;

            margin-left: 18px;
            bottom: 17px;
          }
          .Icons span {
            color: #000000;

            font-size: 14px;
            font-weight: 700;

            margin-left: 4px;
          }
          .likes {
            display: flex;
            align-items: center;
          }
          .comments {
            display: flex;
            align-items: center;

            margin-left: 12px;
          }
        `}</style>
      </li>
    </Link>
  );
}
