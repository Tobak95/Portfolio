import { motion } from "framer-motion";
import { ease } from "../utils/motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Wrap anything with <Reveal> and it slides up + fades in when you scroll to it
const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
