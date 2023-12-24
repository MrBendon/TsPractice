import News_NewsCard from "./News_NewsCard";
import { categoryType } from "./News_SectionTwo";

type PropsType = {
  categoryData: categoryType;
  nowActiveCategoryName: string;
};
const News_CategoryCard = ({ nowActiveCategoryName, categoryData }: PropsType) => {
  const isrender = nowActiveCategoryName === categoryData.categoryName;
  const dataset = categoryData.categoryCardData;
  //   if (nowActiveCategoryName !== categoryData.categoryName) return;
  return (
    <div
      className={`${
        isrender
          ? " translate-y-0 opacity-100 visible h-max w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          : "translate-y-8 opacity-0 invisible max-h-0 "
      } transition-all duration-500 `}
    >
      {dataset.map((news) => (
        <News_NewsCard isrender={isrender} key={news.id} news={news} />
      ))}
    </div>
  );
};

export default News_CategoryCard;
