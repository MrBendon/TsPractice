import { clientsMessageDataType } from "../page/Home/SectionSeven";

type PropsType = {
  data: clientsMessageDataType;
  nowShowCard: number;
};

enum ConvertObject {
  "translate-x-[4%] sm:translate-x-[30%] md:translate-x-[100%]",
  "-translate-x-[100%] sm:-translate-x-[70%] md:-translate-x-[0%]",
  "-translate-x-[204%] sm:-translate-x-[170%] md:-translate-x-[100%]",
  "-translate-x-[308%] sm:-translate-x-[275%] md:-translate-x-[200%]",
  "-translate-x-[412%] sm:-translate-x-[380%] md:-translate-x-[300%]",
  "-translate-x-[516%] sm:-translate-x-[485%] md:-translate-x-[400%]",
  "-translate-x-[620%] sm:-translate-x-[590%] md:-translate-x-[500%]",
}

const ClientsMessageCard = ({ data, nowShowCard }: PropsType) => {
  const Translate2 = ConvertObject[nowShowCard];
  // const Translate = Convert(nowShowCard);
  // console.log(Translate);
  return (
    <div
      className={`w-96 h-60 border border-gray-500 text-white rounded-2xl py-8 grid grid-cols-4 grid-rows-3 pl-8 bg-gradient-to-b from-gray-900 to-black transition-all duration-500 ${Translate2}
      }`}
    >
      <h4 className="w-max text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#29ADB2] to-blue-500 col-span-3 font-light">
        {data.name}
      </h4>
      <p className="font-light col-span-3">{data.brandName}</p>
      <img className="w-16 h-16 rounded-full row-start-1 col-start-4 row-span-2" src={data.image} alt="" />
      <p className="text-gray-400 text-sm font-thin col-span-4 pr-8">{data.message}</p>
    </div>
  );
};

export default ClientsMessageCard;
