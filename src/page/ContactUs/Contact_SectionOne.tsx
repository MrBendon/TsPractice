import GradientText from "../../components/GradientText";
import phoneIcon from "../../assets/contactus/phoneIcon.svg";
import Contact_Form from "./Contact_Form";

const Contact_SectionOne = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-24 text-white pt-40">
      <h2 className="text-gray-400 text-6xl text-center">
        Talk to &nbsp;
        <GradientText text="Phunk." />
      </h2>
      <p className="md:w-[60%] w-full text-gray-400 text-sm text-center">
        Focusing on what we’re good at means we can deliver unrivalled quality every time. Our services fall
        into three main buckets — web, systems and graphic design. If you’re unsure where your next project
        would sit, give us a call.
      </p>
      <div className="w-[95%]  flex flex-col lg:flex-row-reverse gap-4">
        <div className="w-[95%] mx-auto lg:w-[30%] max-h-60 text-white flex flex-col gap-8 border border-gray-400 p-8 rounded-3xl bg-size-200 bg-pos-0 hover:bg-pos-100 bg-gradient-to-b from-gray-800 via-black hover:via-blue-400 to-blue-500 transition-all cursor-pointer">
          <div className="flex justify-between">
            <h4 className="text-4xl font-light">Book a call </h4>
            <img src={phoneIcon} alt="" />
          </div>
          <p>
            Pick a time and date that suits you, and we’ll set up a video or voice call — whichever works
            best.
          </p>
        </div>
        <Contact_Form />
      </div>
    </div>
  );
};

export default Contact_SectionOne;
