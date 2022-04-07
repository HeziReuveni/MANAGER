import React, { useState } from "react";

const UseInputHook = (userInput) => {
  const [inputValue, setInputValue] = useState(userInput);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const resetValue = () => {
    setInputValue("");
  };
  return [inputValue, handleChange, resetValue];
};

export default UseInputHook;
