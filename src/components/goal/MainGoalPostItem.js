import MainGoalPostForm from "@/components/goal/MainGoalPostForm";
import { useCallback, useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function MainGoalPostItem() {
  const breakpoint = useBreakpoint();

  const [toggleNewGoal, setToggleNewGoal] = useState(false);

  const onClickModalBack = useCallback(() => {
    setToggleNewGoal(false);
  }, []);
  const onCloseModal = useCallback(() => {
    setToggleNewGoal(false);
  }, []);

  return (
    <div>
      {breakpoint.sm === false ? (
        <div className={`new-goal-modal-back`} onClick={onClickModalBack}>
          <MainGoalPostForm toggleNewGoal={toggleNewGoal} onCloseModal={onCloseModal} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
