import { SingleCarouselDataType } from "../page/Home/SectionFour";
import Button from "./Button";

type PropsType = {
  data: SingleCarouselDataType;
  showSlideId: number;
};

const Carousel = ({ data, showSlideId }: PropsType) => {
  return (
    <div
      className={` px-8 pt-8 flex md:flex-row flex-col gap-8  justify-around items-center transition-all duration-300 translate-x-5 ${
        data.id === showSlideId ? `opacity-100 scale-100 ` : "scale-75 opacity-0 invisible hidden"
      }`}
    >
      <div className="flex flex-col gap-4  md:w-[45%] w-full">
        <h3 className="text-5xl text-white">{data.title}</h3>
        <p className="text-white font-thin">{data.description}</p>
        {data.link !== "" && <Button buttonContent="Learn more" />}
      </div>
      <div className="w-96">
        <img className="h-96 w-full" src={data.image} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
