import { motion } from "framer-motion";
import Page from "../components/layout/Page";
import Button from "../components/Button";
import { ArrowIcon } from "../components/Icons";
import { ease } from "../utils/motion";

const NotFound = () => {
  return (
    <Page>
      <section className="layout grid min-h-[80vh] place-items-center pt-28 pb-10 text-center">
        <div>
          {/* The three numbers drop in and keep floating */}
          <div className="flex justify-center gap-2 font-serif text-[clamp(120px,28vw,280px)] leading-none font-bold">
            {["4", "0", "4"].map((number, index) => (
              <motion.span
                key={index}
                className={index === 1 ? "text-lime italic" : ""}
                initial={{ y: -200, opacity: 0, rotate: -20 }}
                animate={{ y: [0, -14, 0], opacity: 1, rotate: 0 }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.4 + index * 0.12 },
                  rotate: { duration: 0.9, ease, delay: 0.4 + index * 0.12 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 },
                }}
              >
                {number}
              </motion.span>
            ))}
          </div>

          <h1 className="font-serif text-4xl font-bold md:text-5xl">This page got lost in Lagos traffic.</h1>
          <p className="mx-auto mt-3 max-w-md text-muted">
            The page you’re looking for doesn’t exist or has moved. Let’s get you back home.
          </p>
          <div className="mt-8">
            <Button to="/">
              Back to home <ArrowIcon />
            </Button>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default NotFound;
