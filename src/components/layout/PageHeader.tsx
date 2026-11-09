import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ease } from "../../utils/motion";

type PageHeaderProps = {
  title: string;
  crumbs: { title: string; to?: string }[]; // e.g. [{ title: "Home", to: "/" }, { title: "Contact" }]
  text?: string;
};

// Big centred title with a breadcrumb pill under it (like the Lendex pages)
const PageHeader = ({ title, crumbs, text }: PageHeaderProps) => {
  const words = title.split(" ");

  return (
    <section className="layout relative pt-36 pb-16 text-center md:pt-44 md:pb-24">
      {/* Each word rises up one after the other */}
      <h1 className="font-serif text-[clamp(52px,9vw,120px)] leading-none font-bold text-balance">
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-2 align-bottom">
            <motion.span
              className={`inline-block ${index === words.length - 1 && words.length > 1 ? "text-lime italic" : ""}`}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.35 + index * 0.08 }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </h1>

      {text && (
        <motion.p
          className="mx-auto mt-5 max-w-xl text-muted md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
        >
          {text}
        </motion.p>
      )}

      {/* Breadcrumb */}
      <motion.div
        className="mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface px-5 py-2.5 text-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.7 }}
      >
        {crumbs.map((crumb, index) => (
          <span key={crumb.title} className="flex items-center gap-3">
            {crumb.to ? (
              <Link to={crumb.to} className="text-muted transition-colors hover:text-lime">
                {crumb.title}
              </Link>
            ) : (
              <span className="text-cream">{crumb.title}</span>
            )}
            {index < crumbs.length - 1 && <span className="text-lime">//</span>}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default PageHeader;
