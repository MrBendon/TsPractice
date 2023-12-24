import { CardType } from "./Services_SectionTwo";

type PropsType = {
  data: CardType;
};

const Service_Card = ({ data }: PropsType) => {
  return (
    <a
      className="bg-gradient-to-b from-white to-gray-400 p-[1px] rounded-2xl md:w-[30%] w-full hover:-translate-y-4 hover:shadow-xl transition-all cursor-pointer md:h-48 h-32"
      href={data.url}
    >
      <div className="bg-black rounded-2xl w-full h-full p-4 md:p-8 flex justify-center gap-4 items-center">
        <img className="w-8 aspect-square " src={data.icon} alt="logo" />
        <div className="flex flex-col gap-2 text-white items-start flex-1">
          <h4>{data.title}</h4>
          <p className="text-gray-500 text-sm">{data.description}</p>
        </div>
      </div>
    </a>
  );
};

export default Service_Card;
