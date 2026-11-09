import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  to?: string; // a page on my site, e.g. "/contact"
  href?: string; // an outside link, opens in a new tab
  variant?: "lime" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

// A pill button that gently "pulls" towards the mouse (magnetic effect)
const Button = ({
  children,
  to,
  href,
  variant = "lime",
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Move the button a little towards the mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - box.left - box.width / 2) * 0.25;
    const y = (e.clientY - box.top - box.height / 2) * 0.35;
    setOffset({ x, y });
  };

  // Lime button fills with white from the bottom on hover
  const styles = {
    lime: "bg-lime text-ink border-lime before:absolute before:inset-0 before:-z-10 before:translate-y-full before:rounded-full before:bg-cream before:transition-transform before:duration-500 hover:before:translate-y-0",
    ghost: "border-line text-cream hover:border-lime hover:text-lime",
  };

  const classes = `group relative isolate inline-flex h-13 items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full border-[1.5px] px-6 text-[15px] font-bold transition-colors duration-300 disabled:opacity-60 ${styles[variant]} ${className}`;

  // Pick the right element: page link, outside link or normal button
  let element;
  if (to) {
    element = <Link to={to} className={classes}>{children}</Link>;
  } else if (href) {
    element = (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  } else {
    element = (
      <button type={type} disabled={disabled} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <motion.div
      className="inline-flex"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {element}
    </motion.div>
  );
};

export default Button;
