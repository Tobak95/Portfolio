import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiClock, FiMapPin } from "react-icons/fi";
import { me, typewriterLines } from "../../data/data";
import { ease } from "../../utils/motion";
import Button from "../Button";
import { ArrowIcon } from "../Icons";
import Typewriter from "./Typewriter";
import HeroPortrait from "./HeroPortrait";

// Small helper: fade + slide up, with a delay
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState("");

  // Live Lagos time
  useEffect(() => {
    const updateTime = () => {
      const now = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Lagos",
      }).format(new Date());
      setTime(now);
    };
    updateTime();
    const interval = setInterval(updateTime, 15000);
    return () => clearInterval(interval);
  }, []);

  // Move my photo a little in the opposite direction of the mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    setOffset({ x: x * -18, y: y * -14 });
  };

  const words = [me.firstName, me.lastName];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="layout grid items-center gap-8 pt-28 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-36 lg:pb-20"
    >
      {/* ---------- Left: text ---------- */}
      <div className="order-2 lg:order-1">
        <motion.span
          {...fadeUp(0.3)}
          className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-2 pr-4 pl-2.5 font-mono text-xs text-muted"
        >
          <i className="h-2 w-2 animate-ping-soft rounded-full bg-lime" />
          Available for freelance &amp; full-time
        </motion.span>

        <motion.p {...fadeUp(0.4)} className="mt-6 font-serif text-[clamp(32px,4.5vw,54px)] leading-none font-semibold text-muted italic">
          Hello! I’m{" "}
          <motion.span
            className="inline-block origin-[70%_70%] not-italic"
            animate={{ rotate: [0, 16, -8, 16, -8, 0] }}
            transition={{ duration: 1.4, delay: 1.8, repeat: Infinity, repeatDelay: 2 }}
          >
            👋
          </motion.span>
        </motion.p>

        {/* My name: each letter rises up one after the other */}
        <h1 aria-label={`${me.firstName} ${me.lastName}`} className="mt-1 font-serif text-[clamp(56px,8.6vw,124px)] leading-none font-bold tracking-tight">
          {words.map((word, wordIndex) => (
            <span
              key={word}
              aria-hidden="true"
              className={`mr-[0.22em] inline-block overflow-hidden pb-[0.08em] whitespace-nowrap ${wordIndex === 1 ? "text-lime" : ""}`}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  className="inline-block"
                  initial={{ y: "110%", rotate: 8 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.5 + (wordIndex * 7 + letterIndex) * 0.045 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.div {...fadeUp(1.1)} className="mt-5">
          <Typewriter lines={typewriterLines} />
        </motion.div>

        <motion.p {...fadeUp(1.2)} className="mt-4 max-w-[52ch] text-muted md:text-lg">
          Full-stack developer in Lagos. I build{" "}
          <b className="font-semibold text-cream">fast, accessible interfaces</b> in React and SvelteKit, and the{" "}
          <b className="font-semibold text-cream">TypeScript and Node.js backends</b> that power them.
        </motion.p>

        <motion.div {...fadeUp(1.3)} className="mt-8 flex flex-wrap gap-3">
          <Button to="/contact">
            Hire Me <ArrowIcon />
          </Button>
          <Button href={me.cvLink} variant="ghost">
            Get Resume
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" />
            </svg>
          </Button>
        </motion.div>

        <motion.div {...fadeUp(1.4)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
          <span className="flex items-center gap-2">
            <FiMapPin className="text-lime" /> {me.location}
          </span>
          <span className="flex items-center gap-2">
            <FiClock className="text-lime" /> {time} WAT
          </span>
        </motion.div>
      </div>

      {/* ---------- Right: photo ---------- */}
      <div className="order-1 lg:order-2">
        <HeroPortrait offset={offset} />
      </div>
    </section>
  );
};

export default Hero;
