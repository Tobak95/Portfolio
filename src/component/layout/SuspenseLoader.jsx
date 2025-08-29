import React from 'react'
import { FadeLoader } from 'react-spinners'

const PageLoader = () => {
  return (
    <div className="flex justify-center bg-black items-center h-screen">
      <FadeLoader color="#ffffff" size={40} />
    </div>
  );
}

export default PageLoader
