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

const TechStack = () => {
  return (
    <div className="layout text-white mt-13 lg:mt-10 overflow-hidden">
      <div className="mb-8 lg:mx-100">
        <h1 className="text-[#FFFFFF] text-[25px] lg:text-[76px] font-[400px]">
          My Tech Stack
        </h1>
        <p style={{ fontFamily: "Manrope" }}>
          Technologies I've been working with recently
        </p>
      </div>

      <div className="flex w-full overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap mb-5 lg:mt-5">
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
  );
};

export default TechStack;
