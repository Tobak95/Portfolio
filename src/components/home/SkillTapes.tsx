import { colors, tapeOne, tapeTwo } from "../../data/data";

const dotColors = [colors.lime, colors.coral, colors.violet, colors.teal];

// One row of words. We render it TWICE so the loop has no gap (same trick as my old marquee).
type TapeRowProps = {
  words: string[];
  colorful: boolean;
  reverse?: boolean; // scroll the other way
};

const TapeRow = ({ words, colorful, reverse = false }: TapeRowProps) => {
  const row = (hidden: boolean) => (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 animate-marquee items-center gap-7 pr-7"
      style={{ animationDirection: reverse ? "reverse" : "normal" }}
    >
      {words.map((word, index) => (
        <span key={word} className="flex items-center gap-7">
          <span>{word}</span>
          <span
            className="h-3.5 w-3.5 shrink-0 rounded-full"
            style={{ background: colorful ? dotColors[index % dotColors.length] : "#0B0B0B" }}
          />
        </span>
      ))}
    </div>
  );

  return (
    <>
      {row(false)}
      {row(true)}
    </>
  );
};

// Two crossing "tapes" of skills that scroll in opposite directions
const SkillTapes = () => {
  return (
    <section aria-label="Skills" className="relative overflow-hidden py-14">
      <div className="relative z-10 -mx-5 flex -rotate-2 bg-lime py-4 font-serif text-[clamp(28px,4vw,44px)] leading-none font-bold whitespace-nowrap text-ink">
        <TapeRow words={tapeOne} colorful={false} />
      </div>
      <div className="-mx-5 mt-4 flex rotate-1 md:mt-8 lg:mt-10 xl:mt-12 border-y border-line bg-surface-2 py-4 font-serif text-[clamp(28px,4vw,44px)] leading-none font-bold whitespace-nowrap">
        <TapeRow words={tapeTwo} colorful={true} reverse={true} />
      </div>
    </section>
  );
};

export default SkillTapes;
