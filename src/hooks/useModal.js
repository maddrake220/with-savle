import { useCallback, useState } from "react";

export const useModal = () => {
  const [isToggleModal, setIsToggleModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsToggleModal((toggle) => !toggle);
  }, []);

  return [isToggleModal, toggleModal];
};
