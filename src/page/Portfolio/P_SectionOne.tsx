import { elementBtoT } from "../../animate/BaseAnimate";
import Button from "../../components/Button";
import GradientText from "../../components/GradientText";
import HighLightText from "../../components/HighLightText";
import { motion } from "framer-motion";

const P_SectionOne = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.5 }}
      className="w-full h-screen bg-[radial-gradient(#020740,black,black)]  flex gap-8 flex-col justify-center items-center text-white overflow-hidden"
    >
      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        <HighLightText text="Our Case Studies" />
      </motion.div>
      <motion.h2
        initial={elementBtoT.initial}
        animate={elementBtoT.animate}
        transition={elementBtoT.transition}
        className="lg:text-6xl text-4xl"
      >
        Dive into
        <GradientText text=" the work." />
      </motion.h2>
      <p className="lg:w-[50%] w-[80%] text-center font-light text-gray-400">
        This is the page we’re most proud of. If you’d like more details on a specific project, want to know
        more about the thinking behind a design decision, or just want to tell us we’re awesome, get in touch.
      </p>
      <Button buttonContent="Launch"></Button>
    </motion.div>
  );
};

export default P_SectionOne;
