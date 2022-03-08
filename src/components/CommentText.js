import css from "styled-jsx/css";
const style = css`
  div {
    margin-top: 20px;
    padding-bottom: 16px;
    box-sizing: border-box;
    border-bottom: 1px solid #e3e7ed;
  }
  h3 {
    font-size: 11px;
    font-weight: bold;
    margin: 0 0 6px;
  }
  p {
    font-size: 13px;
    line-height: 1.5;
    color: #7a7a81;
    margin: 0;
  }
  @media (min-width: 1200px) {
    div {
      margin-top: 20px;
      padding-bottom: 28px;
      box-sizing: border-box;
      border-bottom: 1px solid #e3e7ed;
    }
    h3 {
      font-size: 13px;
      font-weight: bold;
      margin: 0 0 10px;
    }
    p {
      font-size: 16px;
    }
  }
`;
const CommentText = ({ data }) => {
  const { id, text } = data;

  const randaomId = () => {
    const result = Math.ceil(Math.random() * 100);
    return result;
  };
  return (
    <div>
      <h3>익명의 {randaomId(id)}님</h3>
      <p>{text}</p>
      <style jsx>{style}</style>
    </div>
  );
};

export default CommentText;
