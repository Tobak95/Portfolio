import React from "react";
import NavBar from "../component/layout/NavBar";
import circleDownload from "../assets/circleDownload.png";
import circledIn from "../assets/circledIn.png";
import gitHorb from "../assets/gitHorb.png";
import handCrossed from "../assets/handsCrossed.png";
import bigMan from "../assets/bigMan.jpg";

const HeroAbout = () => {
  return (
    <div className=" bg-black">
      <NavBar />
      <div className="layout bg-black h-[1300px] flex flex-col ">
        <div>
          <div className="text-white  flex flex-row justify-between  gap-5 mt-20">
            <div>
              <h1 className="text-[101px]">ABOUT ME</h1>
            </div>

            <div className="w-[704px] ">
              <h2
                style={{ fontFamily: "Manrope" }}
                className="text-[32px] font-[500]"
              >
                I am a front-end developer based in Lagos. Has
                Mass-Communication background.{" "}
              </h2>
              <p style={{ fontFamily: "Manrope" }} className="text-[18px] mt-5">
                I am a Frontend Developer based in Lagos with a background in
                Mass Communication. I enjoy creating responsive, accessible, and
                user-friendly web interfaces, and I’m passionate about solving
                problems with curiosity and creativity. Beyond coding, I love
                cooking, and I’m currently exploring React.js, Next-Js, and a
                bit of design to broaden my skill set.
              </p>

              <div className="w-[384px] h-[54px] flex justify-center gap-3 mt-5">
                <div className="flex items-center justify-center gap-3 bg-[#D3E97A] w-[244px] h-[54px] rounded-full">
                  <h1
                    style={{ fontFamily: "Manrope" }}
                    className="  rounded-full font-[700] text-black text-[16px]"
                  >
                    DOWNLOAD RESUME
                  </h1>
                  <img
                    src={circleDownload}
                    alt=""
                    className="w-[10px] h-[10px]"
                  />
                </div>

                <img src={circledIn} alt="" />
                <img src={gitHorb} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#C7C7C7] h-[700px] mb-3  rounded-xl flex items-center justify-center">
          <img src={bigMan} alt="" className="mt-15 h-[699px] mb-15 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
