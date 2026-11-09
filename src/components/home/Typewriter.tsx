import { useEffect, useState } from "react";

// Types a line letter by letter, deletes it, then moves to the next line
const Typewriter = ({ lines }: { lines: string[] }) => {
  const [lineIndex, setLineIndex] = useState(0); // which line we're on
  const [charIndex, setCharIndex] = useState(0); // how many letters are showing
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex];
    let delay = deleting ? 35 : 70;

    // Finished typing: wait, then start deleting
    if (!deleting && charIndex === currentLine.length) {
      delay = 1800;
    }
    // Finished deleting: short pause before the next line
    if (deleting && charIndex === 0) {
      delay = 350;
    }

    const timeout = setTimeout(() => {
      if (!deleting && charIndex === currentLine.length) {
        setDeleting(true);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setLineIndex((lineIndex + 1) % lines.length); // loop back to the first line
      } else {
        setCharIndex(deleting ? charIndex - 1 : charIndex + 1);
      }
    }, delay);

    return () => clearTimeout(timeout); // cleanup
  }, [charIndex, deleting, lineIndex, lines]);

  return (
    <p className="min-h-[1.6em] font-mono text-[15px] md:text-lg" aria-label={lines[0]}>
      <span className="text-coral">~$ </span>
      <span className="text-lime">{lines[lineIndex].slice(0, charIndex)}</span>
      <span className="ml-0.5 inline-block h-[1.1em] w-[0.6em] animate-blink bg-lime align-[-0.18em]" />
    </p>
  );
};

export default Typewriter;
