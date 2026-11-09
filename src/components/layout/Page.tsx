import { motion } from "framer-motion";
import { ease } from "../../utils/motion";

// Wraps every page. The new page fades in and the old one fades out.
const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.main>
  );
};

export default Page;
