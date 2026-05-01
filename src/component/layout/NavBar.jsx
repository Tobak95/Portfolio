import React from "react";
import { links } from "../../../data";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import circledLink from "../../assets/circledIn.png";
import circledGitHub from "../../assets/circledGitHub.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [showHamburger, setShowHamburger] = useState(false);

   const navigate = useNavigate();
   const location = useLocation();

   const handleNavClick = (to) => {
     if (to.startsWith("#")) {
       if (location.pathname !== "/") {
         navigate("/");
         setTimeout(() => {
           document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
         }, 100);
       } else {
         document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
       }
     } else {
       navigate(to);
     }
     setShowHamburger(false);
   };


  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-30">
      <div className="layout px-4 text-[#C7C7C7]">
        <div className="flex justify-between  items-center h-[96px] font-[Bebas Neue]">
          <Link to={"/"}>
            <div>
              <h1 className="font-bold font-[Bebas-Neue] text-[27px] lg:text-[32px]">
                AKINOLA TOBILOBA
              </h1>
            </div>
          </Link>

          <div className="flex gap-4 items-center">
            <div className="hidden lg:flex justify-between items-center gap-3 lg:gap-6 mr-5 ">
              {links.map((link, index) => {
                return (
                  <a
                    style={{ fontFamily: "Inter,sans-serif" }}
                    key={index}
                    href={link.to}
                    onClick={() => handleNavClick(link.to)}
                    className="font-[Inter] cursor-pointer"
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>

            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/akinola-tobi-369762381"
                target="blank"
              >
                <button>
                  {" "}
                  <img src={circledLink} alt="" className="h-[35px] w-[35px]" />
                </button>
              </a>

              <a href="https://github.com/Tobak95" target="blank">
                <button>
                  {" "}
                  <img
                    src={circledGitHub}
                    alt=""
                    className="h-[35px] w-[35px]"
                  />
                </button>
              </a>
            </div>

            {showHamburger ? (
              <MdOutlineClose
                className="text-[30px] lg:hidden cursor-pointer "
                onClick={() => setShowHamburger(!showHamburger)}
              />
            ) : (
              <IoMdMenu
                className="text-[30px] lg:hidden cursor-pointer"
                onClick={() => setShowHamburger(!showHamburger)}
              />
            )}

            {showHamburger && (
              <div className="absolute top-[80px] right-0 rounded-xl border border-[#D3E97A] bg-black flex flex-col items-center gap-6 py-6 px-10 text-white lg:hidden z-10">
                {links.map((link, index) => {
                  return (
                    <a
                      style={{ fontFamily: "Inter,sans-serif" }}
                      key={index}
                      href={link.to}
                      onClick={() => handleNavClick(link.to)}
                      className="font-[Inter] cursor-pointer"
                    >
                      {link.title}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
