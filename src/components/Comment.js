import css from "styled-jsx/css";
import CommentText from "./CommentText";
import CommentInput from "./CommentInput";
import { useState } from "react";
import Toggle from "./Toggle";
const style = css`
  .comment_input {
    margin-top: 30px;
  }
  .title {
    display: flex;
    margin-bottom: 8px;
  }
  .title p {
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 8px;
    margin: 0 5px 0 0;
  }

  .toggle_icon_off {
    background-image: url(/layout/ic_toggle_default_off.svg);
    width: 32px;
    height: 20px;
  }
  .toggle_icon_on {
    background-image: url(/layout/ic_toggle_default_on.svg);
    width: 32px;
    height: 20px;
    transition: 0.3ms;
  }
  @media (min-width: 1200px) {
    .comment_input {
      margin-top: 20px;
    }
    .title p {
      font-size: 16px;
    }
  }
`;
const Comment = ({ Comments, value }) => {
  const [hidden, setHidden] = useState(true);
  console.log(localStorage);
  const handleHiddenComment = () => {
    setHidden(!hidden);
  };
  return (
    <div className="comment_input">
      <div className="title">
        <p>댓글</p>
        <Toggle onClick={handleHiddenComment} hidden={hidden} />
      </div>
      <CommentInput value={value} />
      {!hidden && Comments !== [] && Comments.map((data) => <CommentText data={data} key={data.id} />)}
      <style jsx>{style}</style>
    </div>
  );
};

export default Comment;
