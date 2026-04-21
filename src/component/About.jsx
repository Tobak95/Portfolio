import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="layout bg-black ">
      <div className="text-white  flex flex-row justify-between   gap-5 mt-20">
        <div className="hidden lg:block  w-[600px]">
          <h1 style={{ fontFamily: "Bebas Neue" }} className="text-[76px]">
            ABOUT ME
          </h1>
        </div>

        <div className="w-[704px] ">
          <h2
            style={{ fontFamily: "Manrope" }}
            className="text-[32px] font-[500] hidden lg:block"
          >
            I’m a front-end developer based in Lagos with a Information and Communication system.{" "}
          </h2>
          <p
            style={{ fontFamily: "Manrope" }}
            className="lg:text-[18px] text-[#c7c7c7] lg:mt-5"
          >
            Lagos based front-end developer open to new opportunities. My
            foundation in Information and communication system informs a
            user-first approach to development, with a strong emphasis on
            accessibility and inclusive design. Currently advancing my expertise
            in React.js, I'm passionate about solving problems thoughtfully and
            writing code that works for diverse audiences. When I'm not
            building, I'm playing football or exploring the world through
            photography.
          </p>

          <Link to={"/about"}>
            <h1
              style={{ fontFamily: "Manrope" }}
              className="mt-10 text-[#D3E97A] underline font-[500] text-[16px]"
            >
              MORE ABOUT ME
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
