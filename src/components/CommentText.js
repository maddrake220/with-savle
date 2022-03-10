import axios from "axios";
import server from "@/config/server";
import { useCallback, useEffect, useState } from "react";
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
  pre {
    font-size: 13px;
    line-height: 1.5;
    color: #7a7a81;
    margin: 0;
    font-family: "Noto Sans KR";
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
    pre {
      font-size: 16px;
    }
  }
`;
const CommentText = ({ data }) => {
  const { id, text } = data;

  return (
    <div>
      <h3>익명의 {id}님</h3>
      <pre>{text}</pre>
      <style jsx>{style}</style>
    </div>
  );
};

export default CommentText;
