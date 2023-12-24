import GradientText from "../components/GradientText";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col gap-16 justify-center items-center text-white text-6xl">
      <p>
        We are&nbsp; <GradientText text="Phunk." />
      </p>
      <div className="w-[70%] xl:w-[40%] h-1 bg-black rounded-xl relative px-4 ">
        <p></p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2 }}
          style={{ originX: 0 }}
          className=" shadow-[0_0_25px_1px] w-full h-1 absolute bg-gradient-to-r from-white to-blue-500 rounded-xl top-0 left-0"
        ></motion.div>
      </div>
    </div>
  );
};

export default LoadingPage;
