import { useCallback, useRef, useState } from "react";
import server from "@/config/server";
import css from "styled-jsx/css";

const style = css`
  .input_box {
    width: 100%;
    border: 1px solid #e3e7ed;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 7px 12px 34px;
    box-sizing: border-box;
    position: relative;
  }
  textarea {
    width: 100%;
    height: 20px;
    font-size: 13px;
    line-height: 1.5;
    color: #2d2d2d;
    border: none;
    padding: 0;
    resize: none;
    overflow-y: hidden;
  }
  textarea::placeholder {
    font-weight: normal;
    font-size: 12px;
    color: #d6d8dc;
  }
  textarea:focus {
    outline: none;
  }
  button {
    width: 48px;
    height: 27px;
    border: none;
    border-radius: 3px;
    font-size: 13px;
    line-height: 1.5;
    color: #3178ff;
    background: #e8f3ff;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }

  @media (min-width: 1200px) {
    .input_box {
      border-radius: 8px;
      padding: 11px 19px 48px;
    }
    textarea {
      font-size: 16px;
      line-height: 1.5;
    }
    textarea::placeholder {
      font-size: 16px;
    }

    button {
      width: 63px;
      height: 35px;
      border-radius: 4px;
      font-size: 13px;
      bottom: 12px;
      right: 20px;
    }
  }
`;

const CommentInput = ({ value }) => {
  const [comment, setComment] = useState("");
  const textRef = useRef();

  const handelResizeHieght = useCallback(() => {
    textRef.current.style.height = "20px";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
    setComment(textRef.current.value);
  }, []);

  const handleSubmit = async () => {
    const res = await axios.post(`${server}/api/${value}/comment`, {
      params: {
        text: comment,
        id: Date.now(),
      },
    });
  };

  return (
    <div className="input_box">
      <textarea naeme="comment" ref={textRef} onChange={handelResizeHieght} placeholder="댓글을 남겨보세요 " />
      <button type="submit" className={comment && "submit"} onClick={handleSubmit}>
        등록
      </button>
      <style jsx>{style}</style>
      <style jsx>{`
        button.submit {
          background: #3178ff;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default CommentInput;
