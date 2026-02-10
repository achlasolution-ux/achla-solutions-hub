import { useEffect, useState, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = "!<>-_\\/[]{}—=+*^?#________";

const TextScramble = ({ text, className = "", delay = 0 }: TextScrambleProps) => {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = text.length * 3;

    const update = () => {
      let output = "";
      const progress = frame / totalFrames;

      for (let i = 0; i < text.length; i++) {
        if (i / text.length < progress - 0.1) {
          output += text[i];
        } else if (i / text.length < progress + 0.3) {
          output += chars[Math.floor(Math.random() * chars.length)];
        } else {
          output += " ";
        }
      }

      setDisplay(output);
      frame++;

      if (frame <= totalFrames + 5) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setDisplay(text);
      }
    };

    frameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameRef.current);
  }, [text, started]);

  return <span className={className}>{display}</span>;
};

export default TextScramble;
