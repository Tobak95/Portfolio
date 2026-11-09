type SectionTitleProps = {
  label: string; // small text above, e.g. "Selected work"
  title: string;
  text?: string;
};

// Heading used at the top of most sections
const SectionTitle = ({ label, title, text }: SectionTitleProps) => {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
      <div>
        <span className="flex items-center gap-3 font-mono text-xs tracking-wider text-lime before:h-[1.5px] before:w-7 before:bg-lime">
          {label}
        </span>
        <h2 className="mt-3 font-serif text-5xl leading-none font-bold text-balance md:text-7xl">
          {title}
        </h2>
      </div>

      {text && <p className="max-w-sm text-muted">{text}</p>}
    </div>
  );
};

export default SectionTitle;
