import React from "react";
import NavBar from "../component/layout/NavBar";
import circleDownload from "../assets/circleDownload.png";
import circledIn from "../assets/circledIn.png";
import gitHorb from "../assets/gitHorb.png";
import bigManRemoveBg from "../assets/bigManRemoveBg.png";
import { Link } from "react-router-dom";

const HeroAbout = () => {
  return (
    <div className=" bg-black">
      <NavBar />
      <div className="layout bg-black mt-20 ">
        <div>
           <div className="text-white flex flex-col mt-10 lg:flex-row justify-between gap-5 lg:mt-20">
                  <div className="w-full lg:w-[600px]">
                    <h1
                      style={{ fontFamily: "Bebas Neue" }}
                      className="text-[30px] lg:text-[76px]"
                    >
                      ABOUT ME
                    </h1>
                  </div>
          
                  <div className="w-full lg:w-[704px] ">
                    {/* <h2
                      style={{ fontFamily: "Manrope" }}
                      className=" lg:text-[16px] font-[500] text-[#c7c7c7] "
                    >
                      I’m a front-end developer based in Lagos with a Information and
                      Communication system.{" "}
                    </h2> */}
                    <p
                      style={{ fontFamily: "Manrope" }}
                      className=" lg:text-[16px] text-[#c7c7c7] font-[500] "
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
          
                    {/* <Link to={"/about"}>
                      <h1
                        style={{ fontFamily: "Manrope" }}
                        className="mt-3 lg:mt-10 text-[#D3E97A] underline font-[500] text-[16px]"
                      >
                        MORE ABOUT ME
                      </h1>
                    </Link> */}
                  </div>
                </div>
        </div>

        <div className="bg-[#C7C7C7] h-[343px] md:h-[390px] lg:h-[700px]   rounded-xl flex items-center justify-center mt-15 mb-15 w-full ">
          <img
            src={bigManRemoveBg}
            alt=""
            className=" w-[265px] mt-13  lg:mt-0 sm:w-[300px]  lg:w-[575px] h-auto mb-15 object-contain  rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
