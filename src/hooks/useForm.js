import { useCallback, useEffect, useState } from "react";
import { fetchGetGoalCategory, fetchPostGoal } from "src/api/goal";
import { mutate } from "swr";

import { MAX_GOAL_CATEGORY } from "@/utils/constants";
// import { createFuzzyMatcher } from "@/utils/createFuzzyMatcher";
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
      fetchPostGoal(data)
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
      if (typeof value === "string") {
        // 새로운 카테고리 입력시
        setSelectedGoalCategories((values) => [
          ...values,
          {
            keyword: value,
          },
        ]);
      } else {
        setSelectedGoalCategories((values) => [...values, value]);
      }
      setValidationCheck({ category: false });
      setSearchCategory("");
    },
    [seletedGoalCategories, inputReference, setSearchCategory],
  );
  const onMouseDownUndoGoalCategory = useCallback(
    (event, value) => {
      event.preventDefault();
      inputReference.current.disabled = false;
      setSelectedGoalCategories((values) => {
        return values.filter((v) => v.id !== value.id);
      });
      setSearchCategory("");
    },
    [inputReference, setSearchCategory],
  );
  const onChangeSearchCategory = useCallback((event) => {
    if (event.target.value.length > 10) {
      return;
    }
    setSearchCategory(event.target.value);
  }, []);
  const onKeyDownCategoryInput = useCallback((event) => {
    switch (event.key) {
      case "Enter": {
        break;
      }
      case "ArrowUp": {
        break;
      }
      case "ArrowDown": {
        break;
      }
      default: {
        return;
      }
    }
  }, []);
  useEffect(() => {
    if (searchCategory !== "") {
      const regex = createFuzzyMatcher(searchCategory);
      setSearchingCategoryByAge(
        categoryByAge.filter((value) => {
          return regex.test(value.keyword);
        }),
      );
    }
  }, [searchCategory, categoryByAge]);
  useEffect(() => {
    textareaReference.current.focus();
  }, [toggleModal, textareaReference]);
  useEffect(() => {
    if (selectedReference.current !== null) {
      const width = selectedReference.current.offsetWidth;
      inputReference.current.style.left = `${width + 7}px`;
      inputReference.current.style.maxWidth = 160 - width + 7 + "px";
    }
  }, [seletedGoalCategories, inputReference, selectedReference]);
  useEffect(() => {
    const age = { age: selectedAge?.value };
    fetchGetGoalCategory(age)
      .then((resolve) => setCategoryByAge(resolve.data.results))
      .catch((error) => new Error(error));
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
    onKeyDownCategoryInput,
  ];
};
