import { useState } from "react";
import css from "styled-jsx/css";
import AmountInput from "./AmountInput";
import GoalInput from "./GoalInput";
import Result from "./Result";
import React from "react";

const style = css`
  .box {
    width: 280px;
    padding: 20px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(71, 72, 75, 0.1);
    border-radius: 12px;
    margin: 0 auto 32px;
  }
  @media (min-width: 576px) {
    .box {
      width: 408px;
      padding: 23px 37px 21px;
      border-radius: 16px;
      margin: 0 auto 40px;
    }
  }
  @media (min-width: 1200px) {
    .box {
      width: 789px;
      padding: 49px 72px 42px;
      border-radius: 30px;
      margin: 0 auto 60px;
    }
  }
`;

const CalcInputBox = ({ data }) => {
  const { inputs, setInputs, state, setState } = data;
  const { next, result } = state;

  return (
    <div className="box">
      {!next && <GoalInput inputs={inputs} setInputs={setInputs} state={state} setState={setState} />}
      {next && !result && <AmountInput inputs={inputs} setInputs={setInputs} state={state} setState={setState} />}
      {result && <Result inputs={inputs} setInputs={setInputs} setState={setState} />}
      <style jsx>{style}</style>
      <style jsx global>
        {`
          .title h2 {
            font-size: 18px;
            font-weight: bold;
            line-height: 1.5;
            margin: 0;
            position: relative;
          }
          .title h2::before {
            content: "";
            height: 8px;
            background: rgba(143, 201, 255, 0.7);
            opacity: 0.4;
            position: absolute;
            top: 17px;
            left: -2px;
          }
          p {
            margin: 0;
            font-size: 14px;
          }
          span {
            font-size: 10px;
            color: red;
          }
          span.hidden {
            display: none;
          }
          button {
            width: 220px;
            height: 34px;
            display: block;
            margin: 0 auto;
            font-weight: bold;
            font-size: 12px;
            color: #b2b2b2;
            border: none;
            border-radius: 8px;
            background: #d6d8dc;
          }
          button.next {
            color: #fff;
            background: #3178ff;
          }
          input {
            border: none;
            border-bottom: 1px solid #e3e7ed;
            margin: 20px 4px 0 0;
            font-size: 14px;
            text-align: right;
          }
          input:focus {
            outline: none;
          }
          input::placeholder {
            color: #b2b2b2;
          }
          @media (min-width: 576px) {
            .title h2 {
              font-size: 21px;
            }
            .title h2::before {
              height: 8px;
              top: 20px;
              left: -2px;
            }
            p {
              font-size: 18px;
            }
            span {
              font-size: 12px;
              color: red;
            }
            input {
              border-bottom: 2px solid #e3e7ed;
              margin: 20px 8px 0 0;
              font-size: 16px;
            }
            button {
              width: 333px;
              height: 37px;
              font-weight: 500;
              font-size: 14px;
              color: #989c9e;
              border-radius: 5px;
              background: #d9dde3;
            }
          }
          @media (min-width: 1200px) {
            .title h2 {
              font-size: 40px;
            }
            .title h2::before {
              height: 16px;
              top: 35px;
              left: -2px;
            }
            p {
              font-size: 34px;
            }
            span {
              font-size: 15px;
              color: red;
            }
            input {
              border-bottom: 2px solid #e3e7ed;
              margin: 39px 15px 0 0;
              font-size: 30px;
            }
            button {
              width: 644px;
              height: 72px;
              font-weight: 500;
              font-size: 26px;
              color: #989c9e;
              border-radius: 10px;
              background: #d9dde3;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CalcInputBox;
