import React, { useState } from "react";

const InputArea = (props) => {
  // creating state and getting hold of the input text:
  const [inputText, setInputText] = useState("");

  // getting new input value and saving it in a state variable:
  const changeHandler = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  return (
    <div className="form">
      <form
        onSubmit={(event) => {
          //passing "inputText" value to "addItem" function:
          props.onAdd(inputText);
          event.preventDefault();
          setInputText("");
        }}
      >
        <input onChange={changeHandler} type="text" value={inputText} />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
    </div>
  );
};

export default InputArea;
