import { useCallback, useEffect, useState } from "react";

export const useLike = (id, likes, localstorageName) => {
  const [like, setLike] = useState(false);
  const [likeNums, setLikeNums] = useState(0);

  useEffect(() => {
    setLikeNums(likes);
  }, [likes]);

  useEffect(() => {
    const likes = localStorage.getItem(localstorageName);
    likes !== null ? setLike(likes.includes(id)) : setLike(false);
  }, [id, setLike, localstorageName]);

  const localStorageHandler = useCallback(() => {
    const likes = localStorage.getItem(localstorageName);
    const arrlikes = [];
    const newLikes = [];
    if (likes !== null) {
      arrlikes.push(...likes.split(","));
    }
    if (like) {
      const filterd = arrlikes.filter(
        (value) => value.toString() !== id.toString(),
      );
      newLikes.push(filterd);
      setLikeNums((like) => (like = like - 1));
    } else {
      arrlikes.push(id);
      setLikeNums((like) => (like = like + 1));
    }
    if (newLikes.length > 0) {
      localStorage.setItem(localstorageName, newLikes);
    } else {
      localStorage.setItem(localstorageName, arrlikes);
    }
    setLike((like) => !like);
  }, [id, like, setLike, setLikeNums, localstorageName]);

  return [like, likeNums, localStorageHandler];
};
