
import { skills } from "../../data";

import React from "react";
import vscode from "../assets/vscode.png";
import tailwind from "../assets/tailwind.png";
import reactlogo from "../assets/reactlogo.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import js from "../assets/js.png";

const techStack = [
  { name: "VSCode", icon: vscode },
  { name: "Tailwind", icon: tailwind },
  { name: "React", icon: reactlogo },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "HTML", icon: html },
];


const MyCapabilities = () => {
  return (
    <div className=" bg-black ">
      <div className="layout ">
        <div className="flex flex-col lg:flex-row justify-center  text-white">
          <div className="lg:w-[600px]">
            <h1
              style={{ fontFamily: "Bebas Neue" }}
              className="font-[400px] text-[30px] lg:text-[76px] "
            >
              MY CAPABILITIES
            </h1>
          </div>

          <div className="lg:w-[600px]  mt-4">
            <div>
              <p style={{ fontFamily: "Manrope" }} className="text-[#c7c7c7]">
                I am a passionate and self-motivated frontend developer with
                hands-on experience in building responsive and interactive web
                applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 lg:gap-4 mt-5">
              {skills.map((skill) => {
                return (
                  <div key={skill} className="text-white">
                    <button className="border border-white rounded-full text-white mt-4  text-[14px] w-[150px] lg:w-[124px] lg:h-[54px] p-3 ">
                      {skill.title}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex w-full overflow-hidden mt-10">
          <div className="flex gap-12 animate-marquee whitespace-nowrap lg:mb-5 lg:mt-5">
            {/* Render the list TWICE — this is what makes it loop seamlessly */}
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 min-w-[70px]"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-[50px] h-[50px] object-contain"
                />
                <p
                  style={{ fontFamily: "Manrope" }}
                  className="text-[12px] text-[#C7C7C7]"
                >
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCapabilities;
