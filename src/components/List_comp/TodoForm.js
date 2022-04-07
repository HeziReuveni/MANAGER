import React, { useState } from "react";
import "./list.css";
import UseInputHook from "./Hooks/UseInputHook";
import { useSpring, animated } from "react-spring";
import { GoAlert } from "react-icons/go";

const TodoForm = ({ addToList }) => {
  const [value, handleChange, resetValue] = UseInputHook("");
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "" || value.length > 38) {
      setMessage(!message);
      setTimeout(() => {
        setMessage(false);
      }, 3000);
    } else {
      addToList(value);
      resetValue();
    }
  };

  function LoopObject() {
    const styles = useSpring({
      from: { y: 105, x: 1200 },
      to: { y: 105, x: 1234 },
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
          position: "fixed",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            fontFamily: "Oswald, sans-serif",
            paddingTop: "14px",
            color: "white",
          }}
        >
          <GoAlert id="alert-massage-list" />
          Invalid input entered
        </p>
      </animated.div>
    );
  }

  return (
    <div className="info-list">
      {message && <LoopObject />}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add event..."
          type="text"
          autoFocus
          onChange={handleChange}
          value={value}
        />
      </form>
    </div>
  );
};

export default TodoForm;
