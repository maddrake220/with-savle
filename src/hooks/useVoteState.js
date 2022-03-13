import { useCallback, useEffect, useState } from "react";
import { fetchPutVote } from "src/api/vote";

const initialStyles = {
  borderColor: "none",
  voteBtnBg: "#3178FF",
  voteBtntextColor: "#fff",
  selectItemBackground: "#e8f3ff",
};

const eventStyles = {
  borderColor: "1px solid #3178FF",
  voteBtntextColor: "rgba(256, 256, 256, 0.5)",
  selectItemBackground: "#fff",
};

export const useVoteState = (id) => {
  const [selectId, setSelectId] = useState(-1);
  const [selected, setSelected] = useState(false);

  const [voteList, setVoteList] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [changedButtonColor, setChangdeButtonColor] = useState(initialStyles);

  const handleClick = (id) => {
    setSelected(true);
    setSelectId(id);
  };

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (selectId === -1) {
        return false;
      }
      const putVoteCount = async () => {
        await fetchPutVote({
          id: selectId,
        });
      };

      putVoteCount();

      const saved = [
        ...voteList,
        {
          id,
          value: selectId,
        },
      ];
      localStorage.setItem("vote-list", JSON.stringify(saved));

      setChangdeButtonColor({ ...initialStyles, ...eventStyles });

      setDisabled(true);
    },
    [selectId, voteList, id],
  );

  useEffect(() => {
    const savedVoteList = JSON.parse(localStorage.getItem("vote-list"));
    if (savedVoteList) {
      setVoteList(savedVoteList);

      const getSelectedIndex = savedVoteList.findIndex(
        (item) => item.id === id,
      );

      if (getSelectedIndex !== -1) {
        setSelectId(savedVoteList[Number.parseInt(getSelectedIndex)].value);
        setDisabled(true);
        setSelected(true);
        setChangdeButtonColor({ ...initialStyles, ...eventStyles });
      }
    }
  }, [id]);
  return {
    selectId,
    selected,
    disabled,
    buttonStyles: changedButtonColor,
    handleClick,
    onSubmit,
  };
};
