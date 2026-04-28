import React from "react";
import NavBar from "./layout/NavBar";
import circledIn from "../assets/circledIn.png";
import circledGitHub from "../assets/circledGitHub.png";
import smilingMan from "../assets/smilingMan.jpg";
import circle from "../assets/circle.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa6";
import Doc from "../../document/Oluwatobiloba's_CV.pdf";

const Introduction = () => {
  const roles = [
    "I build things for the web.",
    "I'm a Frontend Engineer.",
    "I'm a Freelancer.",
    "I build responsive websites",
  ];

  const [displayed, setDisplayed] = useState(""); // what's currently shown
  const [roleIndex, setRoleIndex] = useState(0); // which role we're on
  const [charIndex, setCharIndex] = useState(0); // which character we're at

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      // still typing — add one character after a delay
      const timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout); // cleanup
    } else {
      // finished typing — wait, then move to next role
      const pause = setTimeout(() => {
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length); // loop back to 0
      }, 1800);
      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex]);

  return (
    <div className="bg-black text-white">
      <NavBar />

      <div className="layout lg:h-[550px] ">
        <div className="mt-30 flex flex-col lg:flex-row lg:justify-between gap-10 items-center h-full lg:mt-20">
          <div className="flex flex-col gap-4 lg:w-[544px]  ">
            <h1 className="w-full text-[30px] lg:text-[35px]">
              Hi 👋, My name is Oluwatobiloba.
            </h1>

            {/* Typewriter line */}
            <span className="w-full text-[20px] lg:text-[35px] text-[#D3E97A]">
              {displayed}
              <span className="animate-pulse">|</span> {/* blinking cursor */}
            </span>

            <p
              style={{ fontFamily: "Manrope" }}
              className="w-full lg:text-[18px] text-[#C7C7C7]"
            >
              A Lagos based frontend developer passionate about building
              accessible and user friendly websites.
            </p>

            <div className="hidden lg:flex gap-3 text-[20px] ">
              <div className="flex justify-center items-center gap-3 lg:w-[190px] rounded-md bg-[#D3E97A]">
                <a
                  href="../../document/Oluwatobiloba's_CV.pdf"
                  className=" text-[#000000] rounded-full"
                  download={Doc}
                >
                  Download CV
                </a>
                <FaDownload color="#000000" />
              </div>
            </div>
          </div>

          <div className="bg-[#C7C7C7] rounded-full lg:mr-10 border-[#D3E97A] border-[3px] shadow-lg shadow-[#D3E97A]">
            <img
              src={smilingMan}
              alt=""
              className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] object-cover rounded-full "
            />
          </div>
        </div>
        <div className="w-full lg:flex gap-3 text-[20px] ">
          <div className="lg:hidden mt-10 flex justify-center items-center gap-3 lg:w-[190px] rounded-md bg-[#D3E97A]">
            <a
              href="../../document/Oluwatobiloba's_CV.pdf"
              className=" text-[#000000] rounded-full"
              download={Doc}
            >
              Download CV
            </a>
            <FaDownload color="#000000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
