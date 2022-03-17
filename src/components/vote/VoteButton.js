import style from "@/styles/vote/VoteId.module.scss";

export default function VoteButton({
  disabled,
  selectId,
  voteBtnBg,
  voteBtntextColor,
}) {
  return (
    <button
      className={style.vote_btn}
      type="submit"
      disabled={disabled}
      style={
        selectId !== -1
          ? {
              backgroundColor: voteBtnBg,
              color: voteBtntextColor,
            }
          : { backgroundColor: "#d5d8dc", color: "#B2B2B2" }
      }
    >
      투표하기
    </button>
  );
}
