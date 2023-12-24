import { forwardRef } from "react";
import HighLightText from "../../components/HighLightText";
import { CardDataType } from "./SectionFive";

type PropsType = {
  cardData: CardDataType;
};

const LargeVersion_Card = forwardRef<HTMLDivElement, PropsType>(({ cardData }, ref) => {
  if (ref !== null) {
    console.log(ref);
  }

  return (
    <div className="p-4 flex flex-row justify-between items-center gap-4 h-max ">
      {/* 左邊ＩＭＧ */}
      <div className="min-w-[24rem] w-[50%] max-w-[28rem] aspect-square mx-auto overflow-hidden">
        <img src={cardData.img} alt={cardData.title} />
      </div>

      {/* 右邊文字 */}
      <div className="w-[50%] aspect-square max-h-[28rem] flex flex-col text-white justify-between  md:gap-4">
        <div className="flex flex-wrap gap-2">
          {cardData.highlighttext.map((text) => (
            <HighLightText text={text} key={text} />
          ))}
        </div>
        <h2 className="text-4xl">{cardData.title}</h2>
        <p className="text-sm text-gray-500 font-light">{cardData.description}</p>
        <a className=" underline underline-offset-4" href={cardData.url}>
          See full case study &ensp; &rarr;
        </a>
      </div>
    </div>
  );
});

export default LargeVersion_Card;
