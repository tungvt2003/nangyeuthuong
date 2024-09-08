"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
interface ScaleInOnScrollProps {
  children: ReactNode;
}
const FadeInSection = ({ children }: ScaleInOnScrollProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
