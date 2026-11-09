import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import type { Project } from "../data/data";

// Card for one project. It tilts in 3D and shows a colour glow where the mouse is.
const ProjectCard = ({ project }: { project: Project }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width; // 0 (left) to 1 (right)
    const y = (e.clientY - box.top) / box.height; // 0 (top) to 1 (bottom)
    setTilt({ rotateX: (0.5 - y) * 8, rotateY: (x - 0.5) * 10 });
    setGlow({ x: x * 100, y: y * 100 });
  };

  return (
    <motion.div
      style={{ transformPerspective: 900 }}
      animate={tilt}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="h-full"
    >
      <Link
        to={`/projects/${project.slug}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-500 hover:border-[var(--card-color)]"
        style={{ "--card-color": project.color } as React.CSSProperties}
      >
        {/* Round arrow that pops in on hover */}
        <span
          className="absolute top-4 right-4 z-10 grid h-11 w-11 scale-0 -rotate-45 place-items-center rounded-full text-ink transition-transform duration-500 group-hover:scale-100 group-hover:rotate-0"
          style={{ background: project.color }}
        >
          <HiArrowUpRight className="h-5 w-5" />
        </span>

        {/* Screenshot (or a colourful "in progress" box) */}
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <InProgressBox title={project.title} />
          )}

          {/* Glow that follows the mouse */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, ${project.color}55, transparent 55%)`,
            }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex flex-wrap gap-2">
            <Tag color={project.color}>{project.category}</Tag>
            <Tag>{project.year}</Tag>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight">{project.title}</h3>
          <p className="text-[15px] text-muted">{project.summary}</p>
        </div>
      </Link>
    </motion.div>
  );
};

// Small rounded label
export const Tag = ({ children, color }: { children: React.ReactNode; color?: string }) => {
  const tagColor = color ?? "#A6A6A0";
  return (
    <span
      className="rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-wide"
      style={{ color: tagColor, background: `${tagColor}1F`, borderColor: `${tagColor}4D` }}
    >
      {children}
    </span>
  );
};

// Shown instead of a screenshot while a project is still being built
export const InProgressBox = ({ title }: { title: string }) => {
  return (
    <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_30%,#FF6B5790,transparent_60%),radial-gradient(circle_at_75%_70%,#9D8CFF90,transparent_60%)] p-6 text-center">
      <div>
        <p className="font-serif text-4xl leading-none font-bold md:text-5xl">{title}</p>
        <p className="mt-2 font-mono text-xs opacity-80">// currently building</p>

        {/* Little bouncing bars */}
        <div className="mt-4 flex justify-center gap-1.5">
          {[0, 1, 2, 3].map((bar) => (
            <motion.span
              key={bar}
              className="h-5 w-1.5 rounded-full bg-cream/80"
              animate={{ scaleY: [1, 0.35, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, delay: bar * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
