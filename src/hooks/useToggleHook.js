import { useCallback, useState } from "react";

export const useToggleHook = () => {
  const [toggled, setToggled] = useState(false);
  const handleToggle = useCallback(
    () => setToggled((previous) => !previous),
    [],
  );
  return { toggled, setToggled, handleToggle };
};
