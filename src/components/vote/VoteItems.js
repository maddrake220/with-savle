import { percentage } from "@/utils/index";

import style from "../../pages/vote/Id.module.scss";

export default function VoteForm({
  disabled,
  voteSelect,
  borderColor,
  selectItemBackground,
  handleClick,
  totalCount,
  selectId,
  voteBtnBg,
}) {
  return (
    <ul
      style={{ padding: "0" }}
      className={`${disabled ? style.click_block : ""}`}
    >
      {voteSelect.map((selectItem) => (
        <li
          style={
            selectId === selectItem.id
              ? {
                  border: borderColor,
                  backgroundColor: selectItemBackground,
                }
              : { border: "0px", backgroundColor: "#f6f6f6" }
          }
          key={selectItem.item}
          className={`${style.vote_box} ${
            disabled ? style.showGauge : "false"
          }`}
          onClick={() => handleClick(selectItem.id)}
        >
          <div
            style={{
              width: disabled && `${percentage(selectItem.count, totalCount)}%`,
            }}
            className={`${disabled ? style.currentGauge : ""} ${
              selectId === selectItem.id
                ? style.clicked_Background
                : style.notClicked_Background
            }`}
          ></div>
          <div
            style={
              selectId === selectItem.id
                ? { color: voteBtnBg }
                : { color: "#888" }
            }
            className={`${disabled ? style.votePercent : ""} `}
          >
            {disabled && `${percentage(selectItem.count, totalCount)}%`}
          </div>
          <input
            type="radio"
            id={selectItem.item}
            name="vote"
            value={selectItem.item}
            className={style.radio_btn}
          />
          <label
            className={`${style.radio_label} ${disabled ? "" : style.active}`}
            htmlFor={selectItem.item}
          >
            {selectItem.item}
          </label>
        </li>
      ))}
    </ul>
  );
}
