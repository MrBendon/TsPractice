import { MouseEvent, useState } from "react";
import Card1 from "../../assets/News/NewsSectionTwo/card1.webp";
import Card2 from "../../assets/News/NewsSectionTwo/card2.webp";
import Card3 from "../../assets/News/NewsSectionTwo/card3.jpeg";
import Card4 from "../../assets/News/NewsSectionTwo/card4.webp";
import HighLightText from "../../components/HighLightText";
import News_CategoryCard from "./News_CategoryCard";

export type dataType = {
  id: number;
  url: string;
  title: string;
  img: string;
};

export type categoryType = {
  categoryName: string;
  categoryCardData: dataType[];
};

export const SectinTwoData: categoryType[] = [
  {
    categoryName: "Latest",
    categoryCardData: [
      {
        id: 1,
        url: "",
        title: "Awwwards.com gives Phunk the thumbs-up!",
        img: Card1,
      },
      {
        id: 2,
        url: "",
        title: "Why our new subscription model is a win for our clients",
        img: Card2,
      },
      {
        id: 3,
        url: "",
        title: "Not just a pretty logo: why branding really matters",
        img: Card3,
      },
      {
        id: 4,
        url: "",
        title: "Webflow is 10 years old — here’s why it’s our first choice platform.",
        img: Card4,
      },
    ],
  },
  {
    categoryName: "All time",
    categoryCardData: [
      {
        id: 1,
        url: "",
        title: "Awwwards.com gives Phunk the thumbs-up!",
        img: Card1,
      },
      {
        id: 2,
        url: "",
        title: "Webflow is 10 years old — here’s why it’s our first choice platform.",
        img: Card4,
      },
      {
        id: 3,
        url: "",
        title: "Not just a pretty logo: why branding really matters",
        img: Card3,
      },

      {
        id: 4,
        url: "",
        title: "Why our new subscription model is a win for our clients",
        img: Card2,
      },
    ],
  },
];

const News_SectionTwo = () => {
  const [nowActiveCategoryName, setNowActiveCategoryName] = useState("Latest");

  function handleClickCategoryName(e: MouseEvent) {
    if (!e.currentTarget.textContent) return;
    const clickName = e.currentTarget.textContent;
    setNowActiveCategoryName(clickName);
  }
  return (
    <div className="w-[80%] md:w-[90%] mx-auto min-h-screen  flex flex-col gap-8 py-16">
      <div className="flex justify-center items-center gap-8">
        {SectinTwoData.map((category) => (
          <div
            className=" cursor-pointer "
            onClick={(e) => handleClickCategoryName(e)}
            key={category.categoryName}
          >
            <HighLightText text={category.categoryName} />
          </div>
        ))}
      </div>
      <div>
        {SectinTwoData.map((category) => (
          <News_CategoryCard
            nowActiveCategoryName={nowActiveCategoryName}
            categoryData={category}
            key={category.categoryName}
          ></News_CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default News_SectionTwo;
