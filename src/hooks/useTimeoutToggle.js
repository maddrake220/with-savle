import { useCallback, useState } from "react";

export const useTimeoutToggle = () => {
  const [timeoutToggle, setTimeoutToggle] = useState(false);

  const timeoutModal = useCallback(() => {
    setTimeout(() => {
      setTimeoutToggle((toggle) => !toggle);
    }, 1000);
    setTimeoutToggle((toggle) => !toggle);
  }, []);
  return [timeoutToggle, timeoutModal];
};
