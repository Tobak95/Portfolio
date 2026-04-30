import React from "react";
import HeroAbout from "../component/HeroAbout";
import MyCapabilities from "../component/MyCapabilities";
import MyExperience from "../component/MyExperience";
import LetsConnect from "../component/LetsConnect";
import TechStack from "../component/TechStack"

const AboutMe = () => {
  return (
    <div className="bg-black h-full">
      <HeroAbout />
      <MyCapabilities />
      {/* <TechStack/> */}
      <MyExperience />
      <div className="mt-10">
        <LetsConnect />
      </div>
    </div>
  );
};

export default AboutMe;
