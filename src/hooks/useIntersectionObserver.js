import { useEffect, useState } from "react";

export const useIntersectionObserver = (data, setPosts, target) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const getMoreItem = async () => {
    setIsLoaded(true);
    return await new Promise((resolve) => setTimeout(resolve, 150)).then(() => {
      setPosts((posts) => {
        return {
          data: [...data.slice(0, posts.viewPerPage)],
          viewPerPage: posts.viewPerPage + 10,
        };
      });
      setIsLoaded(false);
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem().then(observer.observe(entry.target));
    }
  };
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [onIntersect, target]);
  return [isLoaded];
};
