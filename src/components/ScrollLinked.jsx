// ScrollLinked.js
import { motion, useScroll } from 'framer-motion';

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="scrollIndicator"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
