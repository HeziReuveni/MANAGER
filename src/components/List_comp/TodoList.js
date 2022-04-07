import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteItem, toogleTodo, editTodo }) => {
  return (
    <div className="list-event">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completed={todo.completed}
          deleteItem={deleteItem}
          toogleTodo={toogleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
