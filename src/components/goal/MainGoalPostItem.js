import { useCallback, useState } from "react";

import MainGoalPostForm from "@/components/Goal/MainGoalPostForm";
import { useBreakpoint } from "@/hooks/useBreakpoint";

import NewGoalComplete from "./NewGoalComplete";

export default function MainGoalPostItem() {
  const breakpoint = useBreakpoint();

  const [toggleNewGoalComp, setToggleNewGoalComp] = useState(false);

  const onCloseModal = useCallback(() => {
    setToggleNewGoalComp(false);
  }, []);
  return (
    <div>
      {breakpoint.sm === false ? (
        <>
          <MainGoalPostForm setToggleNewGoalComp={setToggleNewGoalComp} onCloseModal={onCloseModal} />
          <div className={`new-goal-modal-back`} onClick={onCloseModal}>
            <NewGoalComplete toggleNewGoalComp={toggleNewGoalComp} onCloseCompModal={onCloseModal} />
          </div>
        </>
      ) : (
        ""
      )}
      <style jsx>
        {`
          .new-goal-modal-back {
            display: ${toggleNewGoalComp ? "block" : "none"};
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #00000080;
            z-index: 10000;
          }
        `}
      </style>
    </div>
  );
}
