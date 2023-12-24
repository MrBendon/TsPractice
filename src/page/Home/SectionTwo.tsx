import Button from "../../components/Button";
import RobotImg from "../../assets/robot-phunk 1.webp";
import { motion } from "framer-motion";

const SectionTwo = () => {
  return (
    <section className="lg:w-[75%] w-[95%] min-h-screen mx-auto flex justify-center items-center py-16">
      <motion.div className="flex md:flex-row flex-col px-4 md:gap-4 gap-16">
        <div className="md:w-[50%] w-full flex flex-col gap-8">
          <h2 className="lg:text-6xl text-4xl text-white">
            We’re
            <span className="pl-4 text-transparent bg-clip-text bg-gradient-to-r from-[#29ADB2] to-blue-600">
              Phunk.
            </span>
            <br />
            Pleased to meet you.
          </h2>
          <p className="text-gray-400 lg:text-lg text-sm">
            Phunk is a full-service digital marketing agency based out of Saltaire, in West Yorkshire, UK. Our
            niche is storytelling — taking your raw ideas and vision and translating them into a clear brand
            narrative, expressed through design, video, copy and UX.
          </p>
          <p className="text-gray-400 lg:text-lg text-sm">
            If you’re looking for a forward-thinking team of creatives to build a brand identity that stands
            out from the crowd, then you’re exactly where you need to be.
          </p>
          <Button buttonContent="Hire us" />
        </div>
        <div className="md:w-[50%] w-full flex justify-center items-center bg-gradient-to-b from-transparent via-blue-300/30  to-transparent relative">
          <img className="max-h-[25rem] z-10" src={RobotImg} alt="pic" />
        </div>
      </motion.div>
    </section>
  );
};

export default SectionTwo;
