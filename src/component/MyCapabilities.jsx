import React from "react";
import { skills } from "../../data";

const MyCapabilities = () => {
  return (
    <div className=" bg-black ">
      <div className="layout ">
        <div className="flex flex-col lg:flex-row justify-center  text-white">
          <div className="w-[600px]">
            <h1 className="font-[400px] text-[40px] lg:text-[76px] ">MY CAPABILITIES</h1>
          </div>

          <div className="lg:w-[600px]  mt-5">
            <div>
              <p style={{ fontFamily: "Manrope" }} className="text-[#c7c7c7]">
                I am a passionate and self-motivated frontend developer with
                hands-on experience in building responsive and interactive web
                applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:gap-4 mt-5">
              {skills.map((skill) => {
                return (
                  <div key={skill} className="text-white">
                    <button className="border border-white rounded-full text-white  text-[14px] w-[100px] lg:w-[124px] h-[54px] p-3 ">
                      {skill.title}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCapabilities;
