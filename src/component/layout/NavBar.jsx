import React from "react";
import { links } from "../../../data";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
const NavBar = () => {

  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <nav className="bg-black">
      <div className="layout px-4 text-[#C7C7C7]">
        <div className="flex justify-between items-center h-[96px] font-[Bebas Neue]">
          <Link to={"/"}>
            <div>
              <h1 className="font-bold font-[Bebas-Neue] text-[27px] lg:text-[32px]">
                AKINOLA TOBILOBA
              </h1>
            </div>
          </Link>

          <div className="hidden lg:flex justify-between items-center gap-3 lg:gap-6 lg:w-[207px] ">
            {links.map((link, index) => {
              return (
                <a
                  style={{ fontFamily: "Inter,sans-serif" }}
                  key={index}
                  href={link.to}
                  className="font-[Inter]"
                >
                  {link.title}
                </a>
              );
            })}
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
                    className="font-[Inter]"
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
