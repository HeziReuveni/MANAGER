import React, { useState } from "react";
import UseInputHook from "./Hooks/UseInputHook";

const TodoItem = ({ todo, deleteItem, toogleTodo, completed, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, handleChange] = UseInputHook(todo.text);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "" || value.length > 38) {
      alert("The line can contain up to 40 characters");
    } else {
      setIsEditing(false);
      editTodo(todo.id, value);
    }
  };

  return (
    <div className="list-item">
      <ul className="list-group">
        <li
          style={{
            textDecoration: completed ? "line-through" : "none",
            background: "none",
            boxShadow: "1px 2px 3px grey",
          }}
          className="list-group-item"
        >
          <input
            onChange={() => toogleTodo(todo.id)}
            defaultChecked={completed}
            type="checkbox"
          />
          <p>{todo.text}</p>
          {isEditing && (
            <form className="save-form" onSubmit={handleSubmit}>
              <input
                className="input-save"
                type="text"
                value={value}
                onChange={handleChange}
              />
              <button className="button-save">Save</button>
            </form>
          )}
          <div className="buttons-list">
            <button
              className="button-edit"
              onClick={() => setIsEditing(!isEditing)}
            >
              Edit
            </button>
            <button
              className="button-delete"
              onClick={() => deleteItem(todo.id)}
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
