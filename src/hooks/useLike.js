import { useCallback, useEffect, useState } from "react";

import LocalStorage from "@/utils/LocalStorage";

export const useLike = (id, likes, localstorageName) => {
  const [like, setLike] = useState(false);
  const [likeNums, setLikeNums] = useState(likes);

  useEffect(() => {
    setLikeNums(likes);
  }, [likes]);

  useEffect(() => {
    const localstorage = new LocalStorage(localstorageName);
    const likes = localstorage.get(localstorageName);
    likes !== null ? setLike(likes.includes(id)) : setLike(false);
  }, [id, setLike, localstorageName]);

  const onClickLikeButton = useCallback(() => {
    const changeLikeState = () => {
      if (like) {
        setLikeNums((like) => (like = like - 1));
      } else {
        setLikeNums((like) => (like = like + 1));
      }
      setLike((like) => !like);
    };

    const localStorageHandler = () => {
      const localstorage = new LocalStorage(localstorageName);
      if (localstorage.isNull()) {
        return localstorage.set(id);
      }
      const localstorageItems = localstorage.get().split(",");
      if (like) {
        localstorage.remove(localstorageItems, id);
      } else {
        localstorage.add(localstorageItems, id);
      }
    };

    changeLikeState();
    localStorageHandler();
  }, [id, like, localstorageName]);

  return [like, likeNums, onClickLikeButton];
};
