import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "../../data/data";
import { ease } from "../../utils/motion";
import Button from "../Button";
import { ArrowIcon } from "../Icons";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Give the navbar a blurred background once the page is scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stop the page from scrolling behind the mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top)] transition-colors duration-500 ${
          scrolled || menuOpen ? "border-line bg-ink/75 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <div className="layout flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 -rotate-8 place-items-center rounded-[10px] bg-lime font-mono text-sm font-medium text-ink transition-transform duration-500 group-hover:rotate-8">
              AT
            </span>
            <span className="font-serif text-[28px] leading-none font-bold">Tobiloba</span>
          </Link>

          {/* Desktop links: the lime line slides between links */}
          <nav className="hidden lg:block">
            <ul className="flex gap-1">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `relative block px-4 py-2 text-[15px] font-medium transition-colors ${
                        isActive ? "text-cream" : "text-muted hover:text-cream"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.title}
                        {isActive && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute inset-x-4 bottom-0.5 h-0.5 rounded-full bg-lime"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* Hire Me always goes to the contact page */}
            <div className="hidden sm:block">
              <Button to="/contact" className="h-11 px-5">
                Hire Me <ArrowIcon />
              </Button>
            </div>

            {/* Hamburger (mobile + tablet) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative h-11 w-11 rounded-full border-[1.5px] border-line lg:hidden"
            >
              <span
                className={`absolute left-3 right-3 top-[15px] h-0.5 rounded bg-cream transition-transform duration-300 ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-3 right-3 top-5 h-0.5 rounded bg-cream transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-3 right-3 top-[25px] h-0.5 rounded bg-cream transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu that grows out of the hamburger */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="fixed inset-0 z-40 flex flex-col gap-1 bg-ink px-6 pt-[calc(120px+env(safe-area-inset-top))] pb-10 lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.7, ease }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.06, duration: 0.6, ease }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-baseline gap-4 font-serif text-[clamp(44px,12vw,68px)] leading-[1.1] font-bold ${
                      isActive ? "text-lime" : "text-cream"
                    }`
                  }
                >
                  <small className="font-mono text-xs text-lime">0{index + 1}</small>
                  {link.title}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMenuOpen(false)}
            >
              <Button to="/contact">
                Hire Me <ArrowIcon />
              </Button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
