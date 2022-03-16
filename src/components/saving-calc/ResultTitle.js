import styles from "@/styles/saving-calc/SavingClacCommon.module.scss";

function ResultTitle({ goal, saving_amount }) {
  return (
    <div className={`${styles.title} ${styles.result}`}>
      <h2>
        {goal.length >= 12 ? (
          <>
            <span className="goal_slice_first">{goal.slice(0, 10)}</span>
            <br />
            <span className="goal_slice_second">{goal.slice(10)}</span>
          </>
        ) : (
          <span className="goal_slice_first">{goal}</span>
        )}{" "}
        을 위해
        <br />
        <span className="amount">{saving_amount}원</span>을
        {saving_amount.length > 8 && <br />} 적금한다면?
      </h2>
      <style jsx>{`
        span.goal_slice_first::before {
          width: ${goal.length >= 12 ? `165px` : `calc(${goal.length} * 18px)`};
        }
        span.goal_slice_second::before {
          width: calc((${goal.length} - 9) * 15px);
        }
        span.amount::before {
          width: calc(${saving_amount.length} * 12px);
        }
        @media (min-width: 576px) {
          span.goal_slice_first::before {
            width: ${goal.length >= 12
              ? `185px`
              : `calc(${goal.length} * 19px)`};
          }
          span.goal_slice_second::before {
            width: calc((${goal.length} - 9) * 17px);
          }
          span.amount::before {
            width: calc(${saving_amount.length} * 14px);
          }
        }
        @media (min-width: 1200px) {
          span.goal_slice_first::before {
            width: ${goal.length >= 12
              ? `360px`
              : `calc(${goal.length} * 36px)`};
          }
          span.goal_slice_second::before {
            width: calc((${goal.length} - 9) * 33px);
          }
          span.amount::before {
            width: calc(${saving_amount.length} * 27px);
          }
        }
      `}</style>
    </div>
  );
}

export default ResultTitle;
