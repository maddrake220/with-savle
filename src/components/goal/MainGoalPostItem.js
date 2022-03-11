import MainGoalPostForm from "@/components/goal/MainGoalPostForm";
import { useModal } from "@/hooks/index";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import NewGoalComplete from "./NewGoalComplete";

export default function MainGoalPostItem() {
  const breakpoint = useBreakpoint();
  const [isToggleModal, toggleModal] = useModal();

  return (
    <div>
      {breakpoint.sm === false ? (
        <>
          <MainGoalPostForm toggleModal={toggleModal} />
          <div className={`new-goal-modal-back`} onClick={toggleModal}>
            <NewGoalComplete isToggleModal={isToggleModal} toggleModal={toggleModal} />
          </div>
        </>
      ) : (
        ""
      )}
      <style jsx>
        {`
          .new-goal-modal-back {
            display: ${isToggleModal ? "block" : "none"};
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
