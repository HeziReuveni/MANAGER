import React, { useState } from "react";
import "./ContactUs.css";
import { BsQuestionLg } from "react-icons/bs";
import { Link } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";
import { useSpring, animated } from "react-spring";

const ContactUs = () => {
  function LoopTrue() {
    const styles = useSpring({
      loop: true,
      from: { rotateZ: 0 },
      to: { rotateZ: 180 },
    });

    return (
      <animated.div
        style={{
          position: "relative",
          bottom: 75,
          left: 390,
          width: 80,
          height: 80,
          background:
            "linear-gradient(45deg, #78e4ff, rgb(241, 172, 255), rgb(158, 176, 255))",
          borderRadius: 16,
          ...styles,
        }}
      />
    );
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loadingBox, setLoadingBox] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && phoneNumber) {
      setLoadingBox(!loadingBox);
      setTimeout(() => {
        setLoadingBox(false);
        setLoadingMessage(!loadingMessage);
      }, 2000);
    }
  };

  const Success = () => {
    if (loadingBox !== false) {
      return;
    } else {
      return <div className="success-message">Sent successfully</div>;
    }
  };

  return (
    <div className="contact-us">
      <h2>Contact-Us</h2>
      <h3>
        Heve some question
        <BsQuestionLg className="hello" />
        <p>Leave details and a representative will get back to you soon.</p>
        {loadingMessage && Success()}
        {loadingBox && <LoopTrue />}
      </h3>
      <form className="contact-us-container" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="First Name.."
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>First name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Last Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label>Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label>Phone Number</label>
        </div>
        <button>Submit</button>
      </form>
      <Link to="home" spy={true} smooth={true} offset={-90} duration={500}>
        <h4>
          <IoIosArrowUp />
        </h4>
      </Link>
      <p>Designed by Hezi Reuveni, 2022</p>
    </div>
  );
};

export default ContactUs;
