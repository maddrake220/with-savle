import { useCallback, useRef, useState } from "react";
import server from "@/config/server";
import css from "styled-jsx/css";
import axios from "axios";
import useSWR from "swr";
import { set } from "react-hook-form";

const style = css`
  .input_box {
    width: 100%;
    border: 1px solid #e3e7ed;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 7px 12px 34px;
    box-sizing: border-box;
    position: relative;
    background: #fff;
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
  form input {
    width: 48px;
    height: 27px;
    border: none;
    border-radius: 3px;
    font-size: 13px;
    color: #3178ff;
    background: #e8f3ff;
    position: absolute;
    bottom: 8px;
    right: 8px;
    padding: 0;
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

const CommentInput = ({ value, id }) => {
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(false);
  const textRef = useRef();
  const blankCheck = comment.replace(/(^\s*)|(\s*$)/gi, "").length;

  const fetcher = async (url) => {
    const res = await axios.get(url);
    return res.data.results;
  };

  const { data, mutate } = useSWR(`${server}/api/${value}/comment/${id}`, fetcher);

  const handelChange = useCallback((e) => {
    if (e.target.value.length > 1000) {
      alert("1000자까지 작성할 수 있습니다.");
    } else {
      textRef.current.style.height = "20px";
      textRef.current.style.height = textRef.current.scrollHeight + "px";
      setComment(e.target.value);
    }
  }, []);
  console.log(data);
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      return;
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = useCallback(
    async (e) => {
      e !== undefined && e.preventDefault();
      setDisabled(true);
      if (blankCheck === 0) {
        alert("텍스트를 입력해주세요");
      } else {
        mutate([...data, { text: comment }], false);
        const res = await axios.post(`${server}/api/${value}/comment`, {
          params: {
            text: comment,
            id: id,
          },
        });
        mutate([...data, res.data.results], false);
        setComment("");
        textRef.current.blur();
        textRef.current.style.height = "20px";
      }
      setDisabled(false);
    },
    [comment],
  );

  return (
    <form className="input_box" onSubmit={handleSubmit}>
      <textarea
        naeme="comment"
        ref={textRef}
        value={comment}
        disabled={disabled}
        onChange={handelChange}
        onKeyPress={handleKeyPress}
        placeholder="댓글을 남겨보세요 "
      />
      <input type="submit" className={blankCheck !== 0 && "submit"} value="등록" disabled={disabled} />
      <style jsx>{style}</style>
      <style jsx>{`
        form input.submit {
          background: #3178ff;
          color: #fff;
        }
      `}</style>
    </form>
  );
};

export default CommentInput;

// if (data.length === 0) {
//   mutate([...data, { text: comment }], false);
// } else {
//   mutate([...data, { id: data[data.length - 1].id + 1, text: comment }], false);
// }
