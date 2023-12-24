import { categoryName } from "./P_SectionThree";
import P_SectionThreeQuestionCard from "./P_SectionThreeQuestionCard";

type PropsDataType = {
  categoryData: categoryName;
  nowActiveCategoryName: string;
};

const P_SectionThreeCategoryCard = ({ nowActiveCategoryName, categoryData }: PropsDataType) => {
  //   const [nowActiveId, setNowActiveId] = useState(0);

  if (nowActiveCategoryName !== categoryData.categoryName) return;

  return (
    <div className="w-full h-max text-white flex flex-col gap-4">
      {categoryData.questionData.map((question) => (
        <P_SectionThreeQuestionCard key={question.id} data={question} />
      ))}
    </div>
  );
};

export default P_SectionThreeCategoryCard;
