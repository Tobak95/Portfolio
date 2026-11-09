import { FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import type { Social } from "../data/data";

// Returns the right icon for each social network
export const SocialIcon = ({ name }: { name: Social["name"] }) => {
  if (name === "LinkedIn") return <FaLinkedinIn />;
  if (name === "GitHub") return <FaGithub />;
  if (name === "X") return <FaXTwitter />;
  return <FaInstagram />;
};

// Two small arrows, used inside buttons
export const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path d="M6 17 11 12 6 7M13 17l5-5-5-5" />
  </svg>
);
