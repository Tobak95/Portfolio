import React from "react";
import AdventureTime from "../../src/assets/AdventureTime.png";
import greenIcon from "../assets/greenIcon.png";
import webThree from "../assets/webthree.png";
import sneakers from "../assets/Sneakers.png";
import viewProject from "../assets/viewProject.png";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import arrow from "../assets/arrow.png";
import giticon from "../assets/gitHorb.png";

const Featured = () => {
  return (
    <div className="layout  ">
      <div className="  mt-[500px]  lg:w-[600px]  text-white lg:mt-20">
        <h1 className="text-[50px] lg:text-[76px] font-[400px]">
          Featured Projects
        </h1>
        <p
          style={{ fontFamily: "Manrope" }}
          className="text-[18px] text-[#c7c7c7] "
        >
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center mt-[100px]  lg:mt-25 lg:w-[1224px] text-white ">
        <div className="bg-[#1a1a1a] lg:w-[600px]  lg:h-[600px] flex items-center justify-center rounded-[16px] ">
          <img src={port1} alt="" className="w-full h-full object-contain" />
        </div>
        <div className=" lg:w-[600px] flex flex-col mt-12 gap-5 justify-between items-center py-6 ">
          <div>
            <div className="lg:w-[600px] lg:mt-5  ">
              <div className="">
                <h1
                  style={{ fontFamily: "Manrope" }}
                  className="text-[26px] lg:text-[32px] font-[500]"
                >
                  Torri Gate Homes
                </h1>
                <p
                  style={{ fontFamily: "Manrope" }}
                  className=" lg:mt-2 font-[400] lg:text-[18px] text-[#c7c7c7] my-5 lg:my-0 "
                >
                  TORRI GATE HOME is a modern web platform designed to bridge
                  the gap between landlords and tenants. It provides a seamless
                  way for landlords to list available properties and for tenants
                  to search, filter, and connect with the right homes that fit
                  their needs. The platform focuses on simplicity, transparency,
                  and convenience—making renting easier, faster, and more
                  accessible for everyone..
                </p>
              </div>

              <h1 style={{ fontFamily: "Manrope" }} className="">
                PROJECT INFO
              </h1>
              <hr className="mt-2" />

              <div
                style={{ fontFamily: "Manrope" }}
                className="flex justify-between mt-2 "
              >
                <h1 style={{ fontFamily: "Manrope" }}>Year</h1>
                <p style={{ fontFamily: "Manrope" }}>2023</p>
              </div>
              <hr className="mt-3" />

              <div className="flex justify-between mt-4 ">
                <h1 style={{ fontFamily: "Manrope" }}>Role</h1>
                <p style={{ fontFamily: "Manrope" }}>Front-end Developer</p>
              </div>
              <hr className="mt-3" />
            </div>
            <div className="mt-5">
              <div className="flex gap-5 lg:mr-80 text-[#D3E97A]">
                <a
                  href="https://torii-gate-house-hunt-frontend.vercel.app/"
                  target="blank"
                  style={{ fontFamily: "Manrope" }}
                  className="border-b-[1px] border-[#D3E97A] font-[700] text-[16px] flex items-center"
                >
                  LIVE DEMO{" "}
                  <span>
                    <img src={arrow} alt="" className="w-[24px] h-[24px]" />
                  </span>
                </a>
                <a
                  href="https://github.com/Tobak95/torii-gate-house-hunt-frontend"
                  target="blank"
                  style={{ fontFamily: "Manrope" }}
                  className="border-b-[1px] border-[#D3E97A] font-[700] text-[16px] flex items-center"
                >
                  SEE ON GITHUB{" "}
                  <span>
                    <img src={giticon} alt="" className="w-[24px] h-[24px]" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-10 justify-center items-center  mt-25 lg:w-[1224px] text-white">
        <div className="bg-[#1a1a1a] lg:w-[600px]  lg:h-[600px] flex items-center justify-center rounded-[16px] ">
          <img src={port2} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="lg:w-[600px] flex flex-col mt-12 gap-5 justify-between items-center py-6 ">
          <div>
            <div className="lg:w-[600px] mt-5  ">
              <div>
                <h1
                  style={{ fontFamily: "Manrope" }}
                  className="text-[26px] lg:text-[32px] font-[500]"
                >
                  My Movie App
                </h1>
                <p
                  style={{ fontFamily: "Manrope" }}
                  className="lg:mt-2 font-[400] text-[#c7c7c7] lg:text-[18px] my-5 lg:my-0"
                >
                  My movie app is a web platform built for movie enthusiasts to
                  discover, rate, and review films. It provides a dynamic space
                  where users can explore trending releases, classics, and
                  hidden gems while sharing authentic opinions that help others
                  decide what to watch next.
                </p>
              </div>
              <h1 style={{ fontFamily: "Manrope" }} className="mt-10 lg:mt-0">
                PROJECT INFO
              </h1>
              <hr className="mt-2" />

              <div
                style={{ fontFamily: "Manrope" }}
                className="flex justify-between mt-2 "
              >
                <h1 style={{ fontFamily: "Manrope" }}>Client</h1>
                <p style={{ fontFamily: "Manrope" }} className="text-[#c7c7c7]">
                  World News
                </p>
              </div>
              <hr className="mt-3" />
              <div
                style={{ fontFamily: "Manrope" }}
                className="flex justify-between mt-2 "
              >
                <h1 style={{ fontFamily: "Manrope" }}>Year</h1>
                <p style={{ fontFamily: "Manrope" }} className="text-[#c7c7c7]">
                  2022
                </p>
              </div>
              <hr className="mt-3" />

              <div className="flex justify-between mt-4 ">
                <h1 style={{ fontFamily: "Manrope" }}>Role</h1>
                <p style={{ fontFamily: "Manrope" }} className="text-[#c7c7c7]">
                  Front-end Developer
                </p>
              </div>
              <hr className="mt-3" />
            </div>
            <div className="mt-5">
              <div className="flex gap-5 lg:mr-80 text-[#D3E97A]">
                <a
                  href="https://movie-app-xi-seven-42.vercel.app/"
                  style={{ fontFamily: "Manrope" }}
                  className="border-b-[1px] border-[#D3E97A] font-[700] text-[16px] flex items-center"
                >
                  LIVE DEMO{" "}
                  <span>
                    <img src={arrow} alt="" className="w-[24px] h-[24px]" />
                  </span>
                </a>
                <a
                  href="https://github.com/Tobak95/Movie-App"
                  target="blank"
                  style={{ fontFamily: "Manrope" }}
                  className="border-b-[1px] border-[#D3E97A] font-[700] text-[16px] flex items-center"
                >
                  SEE ON GITHUB{" "}
                  <span>
                    <img src={giticon} alt="" className="w-[24px] h-[24px]" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-10 justify-center items-center  mt-25 lg:w-[1224px] text-white">
        <div className="bg-[#1a1a1a] lg:w-[600px]  lg:h-[600px] flex items-center justify-center rounded-[16px] ">
          <img src={port3} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="lg:w-[600px] flex flex-col mt-12 gap-5 justify-between items-center py-6 ">
          <div>
            <div className="lg:w-[600px] mt-5  ">
              <div>
                <h1
                  style={{ fontFamily: "Manrope" }}
                  className="text-[26px] lg:text-[32px] font-[500]"
                >
                  Shortly
                </h1>
                <p
                  style={{ fontFamily: "Manrope" }}
                  className="lg:mt-2 font-[400] text-[#c7c7c7] lg:text-[18px] my-8 lg:my-0 "
                >
                  Shortly is a simple yet powerful web tool that transforms
                  long, messy URLs into short, shareable links. It makes sharing
                  content easier, cleaner, and more professional across social
                  media, emails, and everyday use.
                </p>
              </div>
              <h1 style={{ fontFamily: "Manrope" }} className="">
                PROJECT INFO
              </h1>
              <hr className="mt-2" />

              <div
                style={{ fontFamily: "Manrope" }}
                className="flex justify-between mt-2 "
              >
                <h1 style={{ fontFamily: "Manrope" }}>Year</h1>
                <p style={{ fontFamily: "Manrope" }}>2022</p>
              </div>
              <hr className="mt-3" />

              <div className="flex justify-between mt-4 ">
                <h1 style={{ fontFamily: "Manrope" }}>Role</h1>
                <p style={{ fontFamily: "Manrope" }}>Front-end Developer</p>
              </div>
              <hr className="mt-3" />
            </div>
            <div className="mt-5">
              <div className="flex gap-5 lg:mr-80 text-[#D3E97A]">
                <a
                  href="https://shortly-tobi.vercel.app/"
                  target="blank"
                  style={{ fontFamily: "Manrope" }}
                  className="border-b-[1px] border-[#D3E97A] font-[700] text-[16px] flex items-center"
                >
                  LIVE DEMO{" "}
                  <span>
                    <img src={arrow} alt="" className="w-[24px] h-[24px]" />
                  </span>
                </a>
                <a
                  href="https://github.com/Tobak95/shortly"
                  target="blank"
                  style={{ fontFamily: "Manrope" }}
                  className="border-b-[1px] border-[#D3E97A] font-[700] text-[16px] flex items-center"
                >
                  SEE ON GITHUB{" "}
                  <span>
                    <img src={giticon} alt="" className="w-[24px] h-[24px]" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
