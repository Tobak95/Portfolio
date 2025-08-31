import React from "react";
import HeroPage from "../component/HeroPage";
import Featured from "../component/Featured";
import About from "../component/About";
import LetsConnect from "../component/LetsConnect";

const HomePage = () => {
  return (
    <div className="bg-black h-full">
      <HeroPage />
      <section id="work">
        <Featured />
      </section>
      <section id="about">
        {" "}
        <About />
      </section>
      <section id="contact">
        {" "}
        <LetsConnect />
      </section>
    </div>
  );
};

export default HomePage;
