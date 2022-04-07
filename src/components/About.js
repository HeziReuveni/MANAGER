import React, { useState } from "react";
import "./About.css";
import { BsMusicNoteBeamed, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { RiBookOpenLine, RiCodeBoxFill } from "react-icons/ri";
import { FaGuitar } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FcOk } from "react-icons/fc";

const About = () => {
  const [isPending, setIsPending] = useState(false);

  const copy = async () => {
    const text = "hezireuveny93@gmail.com";
    await navigator.clipboard.writeText(text);
    setIsPending(!isPending);
    setTimeout(() => {
      setIsPending(false);
    }, 3000);
  };

  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-me">
        <p>
          Hi, I'm Hezi and this is my first project! I really like programming,
          especially the FullStack domain. I am a second year student at the
          Open University. Very fond of art, reading books and building
          websites.
        </p>
        <div className="icons-about">
          <h3>
            <BsMusicNoteBeamed />
            &nbsp;&nbsp;
            <FaGuitar />
            &nbsp;&nbsp;
            <RiBookOpenLine />
            &nbsp;&nbsp;
            <RiCodeBoxFill />
            &nbsp;&nbsp;
          </h3>
        </div>
        <div className="contact-me">
          <h3>I would love to be in touch</h3>
          <div className="contact-me-container">
            <div className="box_1">
              <a
                href="https://api.whatsapp.com/send?phone=972507727731"
                id="whatsapp"
              >
                <h4>WhatSapp</h4>
                <h4>
                  <BsWhatsapp />
                </h4>
              </a>
            </div>
            <div className="box_2">
              <a href="https://linkedin.com/in/hezi-reuveni" id="linkedin">
                <h4>Linkedin</h4>
                <h4>
                  <BsLinkedin />
                </h4>
              </a>
            </div>
            <div className="box_3">
              <a onClick={copy} id="gmail">
                <h4> Gmail</h4>
                <h4>
                  <SiGmail />
                </h4>
              </a>
              {isPending && (
                <div className="space-about">
                  <h4>
                    <FcOk />
                  </h4>
                  Copied
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
