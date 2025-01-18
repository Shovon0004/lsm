import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

export const TypewriterEffectSmooth = ({ words, className, cursorClassName }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent SSR mismatch

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold">
          {wordsArray.map((word, idx) => (
            <span key={`word-${idx}`} className={cn("dark:text-white text-black", word.className)}>
              {word.text.join("")}&nbsp;
            </span>
          ))}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500", cursorClassName)}
      />
    </div>
  );
};
