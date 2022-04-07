import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuid4 } from "uuid";
import background from "./images/pages.jpg";
import { useSpring, animated } from "react-spring";
import { GoAlert } from "react-icons/go";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialTodos);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToList = (task) => {
    if (todos.length > 9) {
      setMessage(!message);
      setTimeout(() => {
        setMessage(false);
      }, 3000);
    } else {
      setTodos([...todos, { id: uuid4(), text: task, completed: false }]);
    }
  };

  const deleteItem = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };

  const toogleTodo = (id) => {
    const newList = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newList);
  };

  const editTodo = (id, text) => {
    const newList = todos.map((todo) =>
      todo.id === id ? { ...todo, text } : todo
    );
    setTodos(newList);
  };

  function LoopObject() {
    const styles = useSpring({
      from: { y: 126, x: 1200 },
      to: { y: 126, x: 1234 },
    });

    return (
      <animated.div
        style={{
          width: 300,
          height: 80,
          backgroundColor: "rgb(119, 119, 119)",

          ...styles,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          position: "absolute",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            fontFamily: "Oswald, sans-serif",
            paddingTop: "14px",
            color: "rgb(255, 255, 255)",
          }}
        >
          <GoAlert id="alert-massage-list" />
          Up to 10 events can be entered
        </p>
      </animated.div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",
        height: "100vh",
        padding: "0.3px",
        margin: "0 auto",
      }}
    >
      {message && <LoopObject />}
      <TodoForm addToList={addToList} />
      <TodoList
        deleteItem={deleteItem}
        todos={todos}
        toogleTodo={toogleTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default TodoApp;
