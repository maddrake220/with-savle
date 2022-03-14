import { useCallback, useState } from "react";
import { fetchPostGoalComment } from "src/api/goal";
import { fetchPostVoteComment } from "src/api/vote";

export function useCommentInput(textReference, data, mutate, value, id) {
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(false);

  const blankCheck = comment.replace(/(^\s*)|(\s*$)/gi, "").length;
  const type = value === "goal" ? true : false;

  const handelChange = useCallback((event) => {
    if (event.target.value.length > 1000) {
      alert("1000자까지 작성할 수 있습니다.");
    } else {
      textReference.current.style.height = "20px";
      textReference.current.style.height =
        textReference.current.scrollHeight + "px";
      setComment(event.target.value);
    }
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      return;
    } else if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setDisabled(true);
      if (blankCheck === 0) {
        alert("텍스트를 입력해주세요");
      } else {
        mutate([...data, { text: comment }], false);
        const response = type
          ? await fetchPostGoalComment({
              text: comment,
              id: id,
            })
          : await fetchPostVoteComment({
              text: comment,
              id: id,
            });
        mutate([...data, response.data.results], false);
        setComment("");
        textReference.current.blur();
        textReference.current.style.height = "20px";
      }
      setDisabled(false);
    },
    [comment],
  );

  return [
    comment,
    disabled,
    blankCheck,
    handelChange,
    handleKeyPress,
    handleSubmit,
  ];
}
