import { useCallback, useState } from "react";

export const useTimeoutToggle = () => {
  const [timeoutToggle, setTimeoutToggle] = useState(false);

  const timeoutModal = useCallback(() => {
    setTimeoutToggle((toggle) => !toggle);
    setTimeout(() => {
      setTimeoutToggle((toggle) => !toggle);
    }, 1000);
  }, []);
  return [timeoutToggle, timeoutModal];
};
