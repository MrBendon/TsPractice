import { CardDataType } from "./SectionThree";

type PropsData = {
  data: CardDataType;
};

const SectionThreeCard = ({ data }: PropsData) => {
  return (
    <div className="bg-gray-900 rounded-2xl flex flex-col gap-8 p-4 even:flex-col-reverse sm:odd:last-of-type:col-span-2    sm:odd:last-of-type:flex-row group hover:cursor-pointer hover:bg-gray-800 transition-all">
      <div className="flex flex-col gap-8">
        <h3 className="text-7xl cardTitle">{data.id}</h3>
        <h4 className="font-base text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#33d1d6] to-blue-600">
          {data.title}
        </h4>
        <p className="text-gray-400 font-thin ">{data.description}</p>
      </div>
      <div className="flex justify-center items-center relative">
        <div className=" absolute w-6 flex justify-center items-center aspect-square right-4 bottom-4 bg-white rounded-full group-hover:bg-blue-400 transition-all">
          1
        </div>
        <img className="" src={data.img} alt={data.title} />
      </div>
    </div>
  );
};

export default SectionThreeCard;
