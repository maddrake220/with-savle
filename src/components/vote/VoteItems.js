import style from "@/styles/vote/VoteId.module.scss";
import { percentage, sumCount } from "@/utils/index";

export default function VoteItems({
  disabled,
  voteSelect,
  borderColor,
  selectItemBackground,
  handleClick,
  submitted,
  selectId,
  voteBtnBg,
}) {
  const submitCorrection = submitted ? 1 : 0;
  const totalCount = sumCount(voteSelect) + submitCorrection;
  const isSelected = (id) => selectId === id;

  return (
    <ul
      className={`${style.votebox_list} ${disabled ? style.click_block : ""} `}
    >
      {voteSelect.map((selectItem) => (
        <li
          style={
            isSelected(selectItem.id)
              ? {
                  border: borderColor,
                  backgroundColor: selectItemBackground,
                }
              : { border: "0px", backgroundColor: "#f6f6f6" }
          }
          key={selectItem.item}
          className={`${style.vote_box} ${disabled ? style.showGauge : ""}`}
          onClick={() => handleClick(selectItem.id)}
        >
          <div
            style={{
              width:
                disabled &&
                `${percentage(
                  selectItem.count +
                    (isSelected(selectItem.id) && submitCorrection),
                  totalCount,
                )}%`,
            }}
            className={`${disabled ? style.currentGauge : ""} ${
              isSelected(selectItem.id)
                ? style.clicked_Background
                : style.notClicked_Background
            }`}
          ></div>
          <div
            style={
              isSelected(selectItem.id)
                ? { color: voteBtnBg }
                : { color: "#888" }
            }
            className={`${disabled ? style.votePercent : ""} `}
          >
            {disabled &&
              `${percentage(
                selectItem.count +
                  (isSelected(selectItem.id) && submitCorrection),
                totalCount,
              )}%`}
          </div>
          <input
            type="radio"
            id={selectItem.item}
            name="vote"
            value={selectItem.item}
            className={style.radio_btn}
          />
          <label
            className={`${style.radio_label} ${
              disabled ? style.shrink : style.active
            }`}
            htmlFor={selectItem.item}
          >
            {selectItem.item.length > 20
              ? `${selectItem.item.slice(0, 20)}`
              : selectItem.item}
          </label>
        </li>
      ))}
    </ul>
  );
}
