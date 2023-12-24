import Button from "../../components/Button";
import CircleLogo from "../../components/CircleLogo";
import HighLightText from "../../components/HighLightText";
import Star from "../../components/Star";

const SectionOne = () => {
  return (
    <section className="w-[97.5%] mx-auto h-[95vh] bg-gradient-to-b from-black via-black to-blue-600 rounded-b-3xl flex items-center justify-center relative">
      <Star />
      <div className="flex flex-col justify-around items-center text-gray-300 gap-12">
        <HighLightText text="Introducing Phunk Creative" />
        <h1 className="text-7xl text-center">
          your brand, built
          <span className="pl-4 text-transparent bg-clip-text bg-gradient-to-r from-[#29ADB2] to-blue-600">
            better
          </span>
        </h1>
        <div className="flex justify-center text-center">
          We transform your brand vision into tangible web, graphic and video experiences <br />
          that stop prospective clients in their tracks.
        </div>
        <Button buttonContent="Launch a project" />
      </div>
      <div className=" absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%]">
        <CircleLogo />
      </div>
    </section>
  );
};

export default SectionOne;
