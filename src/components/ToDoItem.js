import React, { useState } from "react";

const ToDoItem = (props) => {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    return setCompleted((prevValue) => {
      return !prevValue;
    });
  };
  console.log(completed);

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: completed ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
};

export default ToDoItem;
