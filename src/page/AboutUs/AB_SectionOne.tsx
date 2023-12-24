import Button from "../../components/Button";
import HighLightText from "../../components/HighLightText";

import aboutUsImg from "../../assets/aboutus/652ea754927932321935124d_Group 598.svg";

import { motion } from "framer-motion";

const AB_SectionOne = () => {
  return (
    <section className="w-full min-h-screnn lg:h-screen bg-black flex justify-center items-center ">
      <div className="w-[95%] h-[90%]  mx-auto rounded-2xl bg-gradient-to-b from-[50%] via-[75%] from-black via-blue-800 to-teal-400/20 flex flex-col lg:flex-row justify-center items-center gap-8 py-16 lg:py-8 ">
        <div className="text-white flex flex-col gap-8 p-8 py-16 w-full lg:w-[40%]">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <HighLightText text="Phunk Creative's Story" />
          </motion.div>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
          >
            Everything you need to know
            <span className=" text-transparent bg-clip-text bg-gradient-to-t from-[#29ADB2]  to-blue-600">
              about Phunk.
            </span>
          </motion.h2>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-light md:text-lg text-sm text-gray-400"
          >
            Find out more about what makes us tick as a company, why we do what we do, and who’s behind the
            unique work we create. Or, if you prefer, give us a call and we’ll tell you ourselves.
          </motion.p>
          <Button buttonContent="Launch"></Button>
        </div>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <img src={aboutUsImg} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default AB_SectionOne;
