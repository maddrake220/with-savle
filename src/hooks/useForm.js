import { useState, useCallback, useEffect } from "react";
import { postNewGoal, getGoalCategoryByAge } from "@/utils/goal/api";
import { MAX_GOAL_CATEGORY } from "@/utils/goal/constants";

export const useForm = (toggleModal, textareaRef, selectedRef, inputRef) => {
  const [selectedAge, setSelectedAge] = useState(null);
  const [isFocusedCategoryInput, setIsFocusedCategoryInput] = useState(false);
  const [seletedGoalCategories, setSelectedGoalCategories] = useState([]);
  const [categoryByAge, setCategoryByAge] = useState([]);
  const [searchingCategoryByAge, setSearchingCategoryByAge] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const text = textareaRef.current.value;
      if (selectedAge === null) {
        alert("test) 연령대를 선택해 주세요!");
        return;
      }
      if (text === "") {
        alert("test) 내용을 입력해 주세요!");
        return;
      }
      if (seletedGoalCategories.length === 0) {
        alert("test) 목표 카테고리를 골라주세요!");
        return;
      }
      const categories = seletedGoalCategories.map((v) => v.keyword);
      const age = selectedAge.value;
      const data = {
        categories,
        age,
        text,
        likes: 0,
      };
      postNewGoal(data)
        .then((resolve) => {
          if (resolve.status === 200) {
            toggleModal();
            setSearchCategory("");
            textareaRef.current.value = "";
            setSelectedGoalCategories([]);
            setSelectedAge(null);
          }
        })
        .catch((error) => alert(error, "fail to post"));
    },
    [seletedGoalCategories, textareaRef, selectedAge, toggleModal],
  );
  const onClickselectedAge = useCallback((value) => {
    setSelectedAge(value);
    setSelectedGoalCategories([]);
    setSearchCategory("");
  }, []);
  const onClickInputBox = useCallback(() => {
    inputRef.current.focus();
  }, [inputRef]);
  const onFocus = useCallback((e) => {
    setIsFocusedCategoryInput(true);
  }, []);
  const onBlur = useCallback((e) => {
    setIsFocusedCategoryInput(false);
  }, []);
  const onMouseDownGoalCategory = useCallback(
    (e, value) => {
      e.preventDefault();
      setTimeout(() => {
        inputRef.current.blur();
        if (seletedGoalCategories.length === MAX_GOAL_CATEGORY) {
          inputRef.current.disabled = true;
        }
      }, 100);
      setSelectedGoalCategories((values) => [...values, value]);
    },
    [seletedGoalCategories, inputRef],
  );
  const onMouseDownUndoGoalCategory = useCallback(
    (e, value) => {
      e.preventDefault();
      inputRef.current.disabled = false;
      setSelectedGoalCategories((values) => {
        return values.filter((v) => v.id !== value.id);
      });
    },
    [inputRef],
  );
  const onChangeSearchCategory = useCallback((e) => {
    setSearchCategory(e.target.value);
  }, []);
  useEffect(() => {
    if (searchCategory !== "") {
      setSearchingCategoryByAge(categoryByAge.filter((v) => v.keyword.includes(searchCategory)));
    }
  }, [searchCategory, categoryByAge]);
  useEffect(() => {
    textareaRef.current.focus();
  }, [toggleModal, textareaRef]);
  useEffect(() => {
    const width = selectedRef.current.offsetWidth;
    inputRef.current.style.left = `${width}px`;
    inputRef.current.style.maxWidth = 160 - width + "px";
  }, [seletedGoalCategories, inputRef, selectedRef]);
  useEffect(() => {
    if (selectedAge !== null) {
      getGoalCategoryByAge(selectedAge.value)
        .then((resolve) => setCategoryByAge(resolve.data.results))
        .catch((error) => console.log(error, "fail to get category"));
    }
  }, [selectedAge]);

  return [
    selectedAge,
    isFocusedCategoryInput,
    seletedGoalCategories,
    categoryByAge,
    searchingCategoryByAge,
    searchCategory,
    onSubmit,
    onClickselectedAge,
    onClickInputBox,
    onFocus,
    onBlur,
    onMouseDownGoalCategory,
    onMouseDownUndoGoalCategory,
    onChangeSearchCategory,
  ];
};
