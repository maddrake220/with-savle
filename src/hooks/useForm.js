import { useCallback, useEffect, useState } from "react";
import { mutate } from "swr";

import { getGoalCategoryByAge, postNewGoal } from "@/utils/goal/api";
import { MAX_GOAL_CATEGORY } from "@/utils/goal/constants";
import { goal_address } from "@/utils/swr";

export const useForm = (
  toggleModal,
  textareaReference,
  selectedReference,
  inputReference,
) => {
  const [selectedAge, setSelectedAge] = useState();
  const [isFocusedCategoryInput, setIsFocusedCategoryInput] = useState(false);
  const [seletedGoalCategories, setSelectedGoalCategories] = useState([]);
  const [categoryByAge, setCategoryByAge] = useState([]);
  const [searchingCategoryByAge, setSearchingCategoryByAge] = useState([]);
  const [text, setText] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [validationCheck, setValidationCheck] = useState({
    age: false,
    text: false,
    category: false,
  });
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (selectedAge === undefined) {
        setValidationCheck({ age: true });
        return;
      }
      if (text === "") {
        setValidationCheck({ text: true });
        return;
      }
      if (seletedGoalCategories.length === 0) {
        setValidationCheck({ category: true });
        return;
      }
      const categories = seletedGoalCategories.map((v) => v.keyword);
      const age = selectedAge?.value;
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
            setText("");
            setSelectedGoalCategories([]);
            setSelectedAge();
            mutate(goal_address);
          }
        })
        .catch((error) => alert(error, "fail to post"));
    },
    [seletedGoalCategories, setText, selectedAge, toggleModal, text],
  );
  const onChangeText = useCallback((event) => {
    if (event.target.value !== "") {
      setValidationCheck({ text: false });
    }
    setText(event.target.value);
  }, []);
  const onClickselectedAge = useCallback((value) => {
    setValidationCheck({ age: false });
    setSelectedAge(value);
    setSelectedGoalCategories([]);
    setSearchCategory("");
  }, []);
  const onClickInputBox = useCallback(() => {
    inputReference.current.focus();
  }, [inputReference]);
  const onFocus = useCallback(() => {
    setIsFocusedCategoryInput(true);
  }, []);
  const onBlur = useCallback(() => {
    setIsFocusedCategoryInput(false);
  }, []);
  const onMouseDownGoalCategory = useCallback(
    (event, value) => {
      event.preventDefault();
      setTimeout(() => {
        inputReference.current.blur();
        if (seletedGoalCategories.length === MAX_GOAL_CATEGORY) {
          inputReference.current.disabled = true;
        }
      }, 100);
      setSelectedGoalCategories((values) => [...values, value]);
      setValidationCheck({ category: false });
    },
    [seletedGoalCategories, inputReference],
  );
  const onMouseDownUndoGoalCategory = useCallback(
    (event, value) => {
      event.preventDefault();
      inputReference.current.disabled = false;
      setSelectedGoalCategories((values) => {
        return values.filter((v) => v.id !== value.id);
      });
    },
    [inputReference],
  );
  const onChangeSearchCategory = useCallback((event) => {
    setSearchCategory(event.target.value);
  }, []);
  useEffect(() => {
    if (searchCategory !== "") {
      setSearchingCategoryByAge(
        categoryByAge.filter((v) => v.keyword.includes(searchCategory)),
      );
    }
  }, [searchCategory, categoryByAge]);
  useEffect(() => {
    textareaReference.current.focus();
  }, [toggleModal, textareaReference]);
  useEffect(() => {
    const width = selectedReference.current.offsetWidth;
    inputReference.current.style.left = `${width}px`;
    inputReference.current.style.maxWidth = 160 - width + "px";
  }, [seletedGoalCategories, inputReference, selectedReference]);
  useEffect(() => {
    if (selectedAge !== null) {
      getGoalCategoryByAge(selectedAge?.value)
        .then((resolve) => setCategoryByAge(resolve.data.results))
        .catch((error) => new Error(error));
    }
  }, [selectedAge]);
  return [
    selectedAge,
    isFocusedCategoryInput,
    seletedGoalCategories,
    categoryByAge,
    searchingCategoryByAge,
    searchCategory,
    validationCheck,
    text,
    onSubmit,
    onClickselectedAge,
    onClickInputBox,
    onFocus,
    onBlur,
    onMouseDownGoalCategory,
    onMouseDownUndoGoalCategory,
    onChangeSearchCategory,
    onChangeText,
  ];
};
