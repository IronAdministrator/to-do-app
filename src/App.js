import React, { useState } from "react";

function App() {
  // creating state for the input text:
  const [inputText, setInputText] = useState("");
  // creating state to save the input value to an array:
  const [items, setItems] = useState([]);

  // getting new input value and saving it in a state variable:
  const changeHandler = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  // adding new items to an array of items with previous values:
  const addItem = (e) => {
    setItems((prevItems) => {
      return [inputText, ...prevItems];
    });
    e.preventDefault();
    setInputText("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={addItem}>
          <input onChange={changeHandler} type="text" value={inputText} />
          <button type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {
            // mapping through the array of items and adding new item to a new list
            items.map((item) => {
              return <li>{item}</li>;
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
