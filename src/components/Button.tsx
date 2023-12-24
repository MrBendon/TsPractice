import { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { buttonAnimateVariants } from "../animate/BaseAnimate";

type contentType = {
  buttonContent: string;
  styledtype?: "whitedark";
} & ComponentPropsWithoutRef<"button">;

const Button = ({ buttonContent, styledtype }: contentType) => {
  return (
    <motion.button
      initial={buttonAnimateVariants.initial}
      whileInView={buttonAnimateVariants.whileInView}
      transition={buttonAnimateVariants.transition}
      viewport={buttonAnimateVariants.viewport}
      className={`font-thin px-8 py-2 rounded-3xl ${
        styledtype === "whitedark"
          ? "bg-white text-black hover:bg-transparent border hover:text-white hover:border border-white hover:border-white"
          : " text-white bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-400/70 hover:to-blue-500/70"
      } transition-all ease-linear flex items-center justify-center hover:cursor-pointer w-max`}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
