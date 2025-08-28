import React from 'react'
import HeroPage from "../component/HeroPage";
import Featured from '../component/Featured';
import About from '../component/About';
import LetsConnect from '../component/LetsConnect';

const HomePage = () => {
  return (
    <div className='bg-black h-full'>
      <HeroPage />
      <Featured />
      <About />
      <LetsConnect/>
    </div>
  );
}

export default HomePage
