import GradientText from "../../components/GradientText";
import HighLightText from "../../components/HighLightText";
import { PersonDataType } from "./AB_SectionFive";

type PropsType = {
  data: PersonDataType;
};
const PeopleCard = ({ data }: PropsType) => {
  return (
    <div className="flex-1 p-4 bg-gray-800 flex flex-col gap-4 rounded-2xl group">
      <img
        className="w-full object-cover aspect-[3/2] rounded-2xl saturate-[0.3] transition-all group-hover:saturate-100"
        src={data.photo}
        alt={data.name}
      />
      <h2 className="text-3xl">
        <GradientText text={data.name} />
      </h2>
      <HighLightText text={data.position} />
      <p className="text-gray-400 text-sm font-light">{data.description}</p>
    </div>
  );
};

export default PeopleCard;
