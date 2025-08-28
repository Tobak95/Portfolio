import React from "react";
import NavBar from "./layout/NavBar";
import circledIn from "../assets/circledIn.png";
import circledGitHub from "../assets/circledGitHub.png";
import smilingMan from "../assets/smilingMan.jpg";
import circle from "../assets/circle.png";

const Introduction = () => {
  return (
    <div className="bg-black text-white">
      <NavBar />

      <div className="layout h-[700px] ">
        <div className="flex justify-between gap-10 items-center h-full">
          <div className="flex flex-col gap-8 w-[544px] ">
            <h1 className="text-[101px]">HI, I AM AKINOLA TOBILOBA</h1>
            <p style={{ fontFamily: "Manrope" }} className="text-[18px]">
              A Sydney based front-end developer passionate about building
              accessible and user friendly websites.
            </p>

            <div className="flex gap-6  items-center w-[327px]">
              <div className="flex gap-4 justify-center bg-[#D3E97A] p-2 w-[187px] h-[54px] text-black rounded-full items-center">
                <p style={{ fontFamily: "Manrope" }} className="font-[700px]">
                  Contact Me
                </p>

                <img src={circle} alt="" />
              </div>

              <button>
                {" "}
                <img src={circledIn} alt="" />
              </button>
              <button>
                {" "}
                <img src={circledGitHub} alt="" />
                </button>
             
            </div>
          </div>

          <div className="bg-[#C7C7C7] rounded-2xl">
            <img src={smilingMan} alt="" className="w-[600px] h-[700px] object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
