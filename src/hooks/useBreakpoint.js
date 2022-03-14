import React, { createContext, useContext, useEffect, useState } from "react";

const defaultValue = {};

const BreakpointContext = createContext(defaultValue);

const BreakpointProvider = ({ children, queries }) => {
  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryLists = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      // eslint-disable-next-line unicorn/no-array-reduce, unicorn/prefer-object-from-entries
      const updatedMatches = keys.reduce((accumulator, media) => {
        accumulator[`${media}`] = !!(
          mediaQueryLists[`${media}`] && mediaQueryLists[`${media}`].matches
        );
        return accumulator;
      }, {});
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches = {};
      for (const media of keys) {
        if (typeof queries[`${media}`] === "string") {
          mediaQueryLists[`${media}`] = window.matchMedia(queries[`${media}`]);
          matches[`${media}`] = mediaQueryLists[`${media}`].matches;
        } else {
          matches[`${media}`] = false;
        }
      }
      setQueryMatch(matches);
      isAttached = true;
      for (const media of keys) {
        if (typeof queries[`${media}`] === "string") {
          mediaQueryLists[`${media}`].addListener(handleQueryListener);
        }
      }
    }

    return () => {
      if (isAttached) {
        for (const media of keys) {
          if (typeof queries[`${media}`] === "string") {
            mediaQueryLists[`${media}`].removeListener(handleQueryListener);
          }
        }
      }
    };
  }, [queries]);

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  );
};

function useBreakpoint() {
  const context = useContext(BreakpointContext);
  if (context === defaultValue) {
    throw new Error("useBreakpoint must be used within BreakpointProvider");
  }
  return context;
}
export { BreakpointProvider, useBreakpoint };
