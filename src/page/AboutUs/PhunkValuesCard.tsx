import GradientText from "../../components/GradientText";
import { valuesDataType } from "./AB_SectionThree";

type PropsTyep = {
  data: valuesDataType;
};

const PhunkValuesCard = ({ data }: PropsTyep) => {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl flex flex-col gap-4">
      <div className="flex gap-8 justify-between items-center">
        <div className="text-4xl">
          <img src={data.icon} alt={data.icon} />
          <GradientText text={data.title} />
        </div>
        <div className="text-6xl cardTitle">{data.id}</div>
      </div>
      <p className="text-gray-300 text-sm font-light">{data.description}</p>
    </div>
  );
};

export default PhunkValuesCard;
