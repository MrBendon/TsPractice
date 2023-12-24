import { useContext } from "react";
import { QuestionContext, questionDataType } from "./P_SectionThree";

type PropsType = {
  data: questionDataType;
  //   nowActiveId: number;
  //   setNowActiveId: (nowActiveId: number) => void;
};

const P_SectionThreeQuestionCard = ({ data }: PropsType) => {
  const { nowActiveId, setNowActiveId } = useContext(QuestionContext)!;

  const isRenderAnswer: boolean = data.id === nowActiveId;

  function handleClick() {
    if (isRenderAnswer) {
      setNowActiveId(0);
    } else {
      setNowActiveId(data.id);
    }
  }
  return (
    <div
      className="bg-gradient-to-b from-white/80 to-gray-500 rounded-[3rem] p-[1px] font-light cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`bg-black rounded-[3rem] p-6 flex flex-col relative md:pr-16 pr-[2.5rem] transition-all overflow-hidden duration-300 ease-in-out h-max ${
          isRenderAnswer ? " gap-8" : " gap-0"
        }`}
      >
        <div
          className={`transition-all text-base md:text-lg duration-300 delay-75 ${
            isRenderAnswer ? "text-white " : "text-gray-500"
          }`}
        >
          {data.question}
        </div>
        <p
          className={`text-gray-500 text-sm transition-all ease-in-out ${
            isRenderAnswer ? "opacity-100 visible h-max" : " h-0 invisible opacity-0 "
          }`}
        >
          {data.answer}
        </p>
        <button className="text-white border border-white w-6 h-6 flex justify-center items-center rounded-full absolute top-6 right-4 ">
          <p
            className={`relative before:absolute before:top-0 before:-left-[5px] before:w-[10px] before:h-[1px] before:border-b before:border-white after:-left-[4px]  after:h-1 after:border-white after:border-b after:absolute after:transition-all after:duration-500 ${
              isRenderAnswer
                ? "after:w-[8px] after:rotate-0 after:-top-[3px]"
                : "after:w-[10px] after:rotate-90 after:-top-[2px]"
            }`}
          ></p>
        </button>
      </div>
    </div>
  );
};

export default P_SectionThreeQuestionCard;
