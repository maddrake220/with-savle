import { useBreakpoint } from "./useBreakpoint";

function useWidth(mobileWidth, tabletWidth, webWidth, unit) {
  const { sm: isMobile, md: isTablet } = useBreakpoint();
  if (isMobile) {
    return `${mobileWidth}${unit}`;
  } else if (isTablet) {
    return `${tabletWidth}${unit}`;
  } else {
    return `${webWidth}${unit}`;
  }
}

export default useWidth;
