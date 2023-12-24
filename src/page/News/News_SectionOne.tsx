import Button from "../../components/Button";
import GradientText from "../../components/GradientText";

const News_SectionOne = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col text-white justify-center items-center gap-8 ">
      <h2 className="lg:text-7xl text-4xl text-center">
        Latest updates <br /> from <GradientText text="Phunk."></GradientText>
      </h2>
      <p className="md:w-[45%] w-full text-gray-400 font-light text-center text-base ">
        Check out our latest news stories, new case studies, Webflow resources and more below. Or give us your
        email address and get a weekly or monthly digest delivered directly — just that, no spam or marketing
        emails.
      </p>
      <Button styledtype="whitedark" buttonContent="Join Newsletter" />
    </div>
  );
};

export default News_SectionOne;
