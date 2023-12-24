import Button from "../../components/Button";
import { SingleCarouselDataType } from "../Home/SectionFour";

type PropsType = {
  data: SingleCarouselDataType;
  showSlideId: number;
};

const AB_Carousel = ({ data, showSlideId }: PropsType) => {
  return (
    <div
      className={` px-8 p-8 flex md:flex-row flex-col gap-8 justify-between items-start transition-all duration-300 ${
        data.id === showSlideId ? `opacity-100 scale-100 ` : "opacity-0 scale-75 invisible absolute"
      }`}
    >
      <div className="flex flex-col gap-4 md:w-[45%] w-full">
        <h3 className="text-5xl text-white">{data.title}</h3>
        <p className="text-white font-thin">{data.description}</p>
        {data.link !== "" && <Button buttonContent="Learn more" />}
      </div>
      <div className="w-full md:w-[50%] h-full">
        <img className="w-full h-full" src={data.image} alt="" />
      </div>
    </div>
  );
};

export default AB_Carousel;
