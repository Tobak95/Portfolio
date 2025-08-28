import React from 'react'

const MyExperience = () => {
  return (
    <div className=" bg-black ">
      <div className="layout">
        <div className="flex flex-row justify-center  text-white">
          <div className="w-[600px]">
            <h1 className="font-[400px] text-[76px] ">MY EXPERIENCE</h1>
          </div>

          <div className="w-[600px] h-[241px] mt-5">
            <div className="flex justify-between">
              <h1 style={{ fontFamily: "Manrope" }} className="font-[500]">
                Frontend Developer (Freelance Intern)
              </h1>
              <p style={{ fontFamily: "Manrope" }}>Jan 2025 — Present </p>
            </div>

            <p
              style={{ fontFamily: "Manrope" }}
              className="mt-3 text-[#C7C7C7]"
            >
              I worked as a Frontend Developer Intern (Freelance) at Tech
              Studio, where I built responsive user interfaces using HTML, CSS,
              JavaScript, and React.js. I collaborated with senior developers to
              implement designs, optimize performance, and ensure mobile
              responsiveness.
            </p>

            <div className="mt-15">
              <div className="flex justify-between">
                <h1
                  style={{ fontFamily: "Manrope" }}
                  className="font-[500] text-white"
                >
                  Building and Testing REST API's with Node.js
                </h1>
                <p style={{ fontFamily: "Manrope" }}>Jan 2025, till date </p>
              </div>

              <p
                style={{ fontFamily: "Manrope" }}
                className="mt-3 text-[#C7C7C7]"
              >
                Building and testing REST APIs with Node.js involves creating
                server-side endpoints that allow applications to communicate and
                exchange data. It also includes writing and running tests to
                ensure the APIs work correctly, handle errors, and meet
                performance standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExperience
