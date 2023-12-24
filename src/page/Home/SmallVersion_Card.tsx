import { forwardRef, useRef } from "react";
import HighLightText from "../../components/HighLightText";
import { CardDataType } from "./SectionFive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

type PropsType = {
  cardData: CardDataType;
};

const SmallVersion_Card = forwardRef<HTMLDivElement, PropsType>(({ cardData }, ref) => {
  const CardRef = useRef<HTMLDivElement>(null);
  if (ref !== null) {
    console.log(ref);
  }
  return (
    <div className="min-w-full flex flex-col md:flex-row gap-4" ref={CardRef}>
      <div className="w-full md:h-96 md:w-[50%] h-40 overflow-hidden ">
        <img
          className="md:w-full -translate-y-[25%] md:-translate-y-0"
          src={cardData.img}
          alt={cardData.title}
        />
      </div>
      <div className="text-white flex flex-col justify-between gap-4 md:w-[50%]">
        <div className="flex flex-wrap gap-2 justify-start">
          {cardData.highlighttext.map((text) => (
            <HighLightText text={text} key={text}></HighLightText>
          ))}
        </div>
        <h3 className="text-4xl">{cardData.title}</h3>
        <p className="text-gray-500 font-light">{cardData.description}</p>
        <a className="py-8 md:py-0 underline underline-offset-[5px]" href="">
          See full case study &ensp; &rarr;
        </a>
      </div>
    </div>
  );
});

export default SmallVersion_Card;
