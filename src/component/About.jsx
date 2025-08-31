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
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.{" "}
          </h2>
          <p
            style={{ fontFamily: "Manrope" }}
            className="lg:text-[18px] text-[#c7c7c7] lg:mt-5"
          >
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
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
