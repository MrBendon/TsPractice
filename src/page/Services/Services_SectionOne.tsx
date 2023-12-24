import GradientText from "../../components/GradientText";
import Star from "../../components/Star";

const Services_SectionOne = () => {
  return (
    <section className="bg-[radial-gradient(#020740,black,black)]  w-full min-h-screen flex flex-col gap-8 text-white justify-center items-center relative overflow-hidden ">
      <Star />
      <div className="w-full text-center flex flex-col gap-8">
        <h2 className="text-6xl">
          Our
          <GradientText text=" Services." />
        </h2>
        <p className="w-[60%] text-center mx-auto text-gray-500">
          Focusing on what we’re good at means we can deliver unrivalled quality every time. Our services fall
          into three main buckets — web, systems and graphic design. If you’re unsure where your next project
          would sit, give us a call.
        </p>
      </div>
      <div className=" absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[65%]  md:translate-y-[85%] w-[90%] aspect-square bg-gradient-to-br from-[#0088ff] to-[#027daa] to-[95%] rounded-full"></div>
      <div className=" absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[55%]  md:translate-y-[80%] w-[60%] aspect-square bg-[radial-gradient(black,#020740)] rounded-full blur-2xl "></div>
      <div className=" absolute bottom-0 translate-y-8 left-0 w-full h-20 md:h-10 bg-black blur-2xl"></div>
    </section>
  );
};

export default Services_SectionOne;
