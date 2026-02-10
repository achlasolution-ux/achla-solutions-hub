import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [visible, setVisible] = useState(false);
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Only show on devices with fine pointer (desktop)
    const mql = window.matchMedia("(pointer: fine)");
    if (!mql.matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [visible, x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
      style={{ x, y }}
    >
      <div className="w-5 h-5 -ml-2.5 -mt-2.5 rounded-full border border-primary/60" />
      <div className="w-1.5 h-1.5 -ml-[3px] -mt-[13px] rounded-full bg-primary" />
    </motion.div>
  );
};

export default CursorFollower;
