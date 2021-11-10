import React, { useState } from "react";
import InputArea from "./components/InputArea";
import ToDoItem from "./components/ToDoItem";

function App() {
  // creating state to save the input value to an array:
  const [items, setItems] = useState([]);

  // [1]getting hold of "inputText" value from "InputArea" and [2]adding new items to an array of items with previous values:
  const addItem = (inputText) => {
    setItems((prevItems) => {
      return [inputText, ...prevItems];
    });
    console.log(inputText);
  };

  // [1]getting hold of "onChecked" prop and receiving "id" with it from "ToDoItem" [2]returning only prevItems with index !== id:
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {
            // mapping through the array of items and adding new item to a new list
            items.map((item, index) => {
              return (
                <ToDoItem
                  key={index}
                  id={index}
                  item={item}
                  onChecked={deleteItem}
                />
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
