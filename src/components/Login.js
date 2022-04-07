import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { GoAlert } from "react-icons/go";
import "./Login.css";
import { useSpring } from "react-spring";
import { animated } from "react-spring";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setIError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const sendsData = () => {
    if (username === "manager" && password === "react-app") {
      setIsPending(true);
    } else {
      setIError(!error);
      setTimeout(() => {
        setIError(false);
      }, 3000);
    }
  };

  function LoopObject() {
    const styles = useSpring({
      from: { y: 0, x: 18 },
      to: { y: 150 },
    });

    return (
      <animated.div
        style={{
          width: 300,
          height: 80,
          backgroundColor: "rgb(255, 49, 49, 0.6)",

          ...styles,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            fontFamily: "Oswald, sans-serif",
            paddingTop: "14px",
          }}
        >
          <GoAlert id="id-err" />
          Invalid details entered
        </p>
      </animated.div>
    );
  }

  return (
    <div className="login">
      <div className="space-error">{error && <LoopObject />}</div>
      <form onSubmit={handleSubmit}>
        <div className="container-input-form-login">
          <h2>Login</h2>
          <div className="input-container">
            <i className="fa fa-user icon">
              <FaUserAlt />
            </i>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-key icon">
              <RiLockPasswordFill />
            </i>
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={sendsData}>
            Sign In
          </button>
          {isPending && window.open("/home") && window.close("/")}
        </div>
      </form>
    </div>
  );
};

export default Login;
