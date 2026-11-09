import { motion } from "framer-motion";
import { socials } from "../../data/data";
import { ease } from "../../utils/motion";
import { SocialIcon } from "../Icons";
import myPhoto from "../../assets/smilingManRemoveBg.png";

// Angle of each social button on the orbit (0deg = right side of the circle)
const orbitAngles = [-62, -28, 6, 40];

type HeroPortraitProps = {
  offset: { x: number; y: number }; // moves slightly with the mouse (parallax)
};

// My photo on a lime circle, with a spinning rainbow ring and social buttons around it
const HeroPortrait = ({ offset }: HeroPortraitProps) => {
  return (
    // "@container" lets the sizes below (cqw) scale with this box
    <div className="@container relative mx-auto aspect-[1/1.08] w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[540px]">
      <motion.div
        className="absolute inset-0"
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      >
        {/* Dashed outer ring + rainbow ring + lime circle */}
        <div className="absolute inset-0 m-auto h-[104cqw] w-[104cqw] animate-spin-slower rounded-full border border-dashed border-cream/15" />
        <div className="absolute inset-0 m-auto h-[72cqw] w-[72cqw] rounded-full bg-[radial-gradient(circle_at_50%_40%,#D3E97AF2,#D3E97A8C_55%,#4FD8C459)] shadow-[0_0_120px_rgba(211,233,122,0.25)]" />
        <div className="ring-gradient absolute inset-0 m-auto h-[86cqw] w-[86cqw] animate-spin-slow rounded-full" />

        {/* My photo rises up */}
        <motion.img
          src={myPhoto}
          alt="Akinola Tobiloba smiling"
          className="absolute bottom-0 left-[11cqw] z-10 w-[78cqw] [mask-image:linear-gradient(#000_82%,transparent)] drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.5 }}
        />

        {/* Social buttons placed around the circle */}
        {socials.map((social, index) => (
          <div
            key={social.name}
            className="absolute top-1/2 left-1/2 z-20"
            style={{
              transform: `translate(-50%, -50%) rotate(${orbitAngles[index]}deg) translateX(52cqw) rotate(${-orbitAngles[index]}deg)`,
            }}
          >
            <motion.a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-cream/20 bg-surface/80 text-lg backdrop-blur-md transition-colors duration-300 hover:border-lime hover:bg-lime hover:text-ink sm:h-14 sm:w-14 sm:text-xl"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              whileHover={{ scale: 1.15 }}
              transition={{
                opacity: { delay: 1.3 + index * 0.12, duration: 0.6 },
                scale: { delay: 1.3 + index * 0.12, duration: 0.6, ease },
                y: { duration: 5, repeat: Infinity, delay: index * 0.6, ease: "easeInOut" },
              }}
            >
              <SocialIcon name={social.name} />
            </motion.a>
          </div>
        ))}

        {/* Floating code chips */}
        <Chip className="top-[22%] -left-[4%]" delay={1.4} dot="#4FD8C4">
          TypeScript · Node.js
        </Chip>
        <Chip className="bottom-[16%] left-[1%]" delay={1.6} dot="#FF6B57">
          React · SvelteKit
        </Chip>
        <Chip className="right-[2%] bottom-[4%] text-muted" delay={1.8}>
          const dev = <b className="font-medium text-lime">"full-stack"</b>;
        </Chip>
      </motion.div>
    </div>
  );
};

type ChipProps = {
  children: React.ReactNode;
  className: string;
  delay: number;
  dot?: string;
};

const Chip = ({ children, className, delay, dot }: ChipProps) => {
  return (
    <motion.span
      className={`absolute z-30 inline-flex animate-float items-center gap-2 rounded-2xl border border-line bg-surface/85 px-3.5 py-2 font-mono text-[11px] whitespace-nowrap shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-md sm:text-xs ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {dot && <i className="h-2 w-2 rounded-[2px]" style={{ background: dot }} />}
      {children}
    </motion.span>
  );
};

export default HeroPortrait;
