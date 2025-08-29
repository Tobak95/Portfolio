import React from "react";
import NavBar from "../component/layout/NavBar";
import circleDownload from "../assets/circleDownload.png";
import circledIn from "../assets/circledIn.png";
import gitHorb from "../assets/gitHorb.png";
import bigMan from "../assets/bigMan.jpg";

const HeroAbout = () => {
  return (
    <div className=" bg-black">
      <NavBar />
      <div className="layout bg-black h-[1300px] flex flex-col ">
        <div>
          <div className="text-white  flex flex-col lg:flex-row justify-between  gap-5 mt-20">
            <div>
              <h1 className="text-[56px] lg:text-[101px]">ABOUT ME</h1>
            </div>

            <div className="lg:w-[704px] ">
              <h2
                style={{ fontFamily: "Manrope" }}
                className="text-[29px] lg:text-[32px] font-[500]"
              >
                I am a front-end developer based in Lagos. Has
                Mass-Communication background.{" "}
              </h2>
              <p style={{ fontFamily: "Manrope" }} className="text-[18px] text-[#c7c7c7] mt-5">
                I am a Frontend Developer based in Lagos with a background in
                Mass Communication. I enjoy creating responsive, accessible, and
                user-friendly web interfaces, and I’m passionate about solving
                problems with curiosity and creativity. Beyond coding, I love
                cooking, and I’m currently exploring React.js, Next-Js, and a
                bit of design to broaden my skill set.
              </p>

              <div className="lg:w-[384px] h-[54px] flex justify-center items-center gap-3 mt-5 my-10">
                <div className="flex items-center justify-between  lg:justify-center gap-3 bg-[#D3E97A] w-[200px] lg:w-[244px] h-[40px] px-2 lg:px-0  lg:h-[54px] rounded-full ]">
                  <h1
                    style={{ fontFamily: "Manrope" }}
                    className="  rounded-full font-[700] text-black text-[12px] lg:text-[16px]"
                  >
                    DOWNLOAD RESUME
                  </h1>
                  <img
                    src={circleDownload}
                    alt=""
                    className="lg:w-[10px] lg:h-[10px]"
                  />
                </div>

                <img src={circledIn} alt="" className="" />
                <img src={gitHorb} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:bg-[#C7C7C7] lg:h-[700px] mb-3  rounded-xl flex items-center justify-center ">
          <img
            src={bigMan}
            alt=""
            className="lg:mt-15 w-full h-[400px] lg:h-[699px] mb-15 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
