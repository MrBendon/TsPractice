import P_CasePoints from "./P_CasePoints";
import { type CardDataType } from "./P_SectionTwo";

type PropsType = {
  data: CardDataType;
};

const P_SectionTwoCard = ({ data }: PropsType) => {
  return (
    <div className="bg-gray-800 rounded-2xl md:even:mt-20 md:odd:mb-20 flex flex-col gap-4 p-6 group">
      {/* 圖案框框 */}
      <div className="rounded-2xl flex flex-col w-full aspect-[4/3] overflow-hidden group/img relative">
        <img
          className="h-full aspect-square group-hover/img:-translate-y-full transition-all duration-300"
          src={data.img1}
          alt=""
        />
        <div
          className={`${data.imgBackGroundColor}   min-h-full aspect-square flex justify-center items-center group-hover/img:-translate-y-full transition-all duration-300`}
        >
          <img className="max-h-32 w-max px-8" src={data.img2} alt="" />
        </div>
        <button className=" absolute bottom-2 right-2 w-8 aspect-square rounded-full bg-white group-hover/img:bg-blue-500">
          &rarr;
        </button>
      </div>
      <div className="flex gap-2 flex-wrap">
        {data.highlight.map((point) => (
          <P_CasePoints key={point} text={point} />
        ))}
      </div>
      <h3 className="text-white text-4xl md:text-3xl">{data.title}</h3>
      <p className="text-gray-500 font-light ">{data.description}</p>
      <a
        className=" text-white group-hover:text-blue-500 underline underline-offset-8 transition-all font-thin"
        href={data.url}
      >
        See full case study !
      </a>
    </div>
  );
};

export default P_SectionTwoCard;
