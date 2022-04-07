import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import ContactUs from "./ContactUs";
import Welcome from "./Welcome";
import "./Home.css";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="content">
          <h2>
            <Welcome />
          </h2>
          <p id="para-text">
            Hello and welcome to the employee management website. with the help
            of this site you can run your business on the best side through a
            payroll calculator, employee table and event booklet.
          </p>
          <div className="space">
            <button onClick={() => setOpenMenu(!openMenu)}>Get started</button>
            {openMenu && (
              <div className="nav-links">
                <a href="/Table">Employee table</a>
                <a href="/Calculate">Payroll calculator</a>
                <a href="/List">Event book</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <About />
      <ContactUs />
    </div>
  );
};

export default Home;
