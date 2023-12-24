import { MouseEvent, createContext, useState } from "react";
import P_SectionThreeCategoryCard from "./P_SectionThreeCategoryCard";

export type questionDataType = {
  question: string;
  answer: string;
  id: number;
};

export type categoryName = {
  categoryName: string;
  questionData: questionDataType[];
};

export const DataSet: categoryName[] = [
  {
    categoryName: "Graphic Design",
    questionData: [
      {
        id: 1,
        question: "How much do your design packages cost ?",
        answer:
          "Design costs vary according to scope, format, print specifications, materials and more — so it’s difficult to give a guide price. Get in touch to discuss your needs, and we’ll create a custom estimate that includes the services relevant to your project and is costed based on a one-off or subscription model. You’ll find full details of our pricing structure here: Phunk Pricing",
      },
      {
        id: 2,
        question: "Do you offer graghic design services for social media ?",
        answer:
          "Yes, we do. We can create compelling visuals that will enhance your brand's presence on social media platforms, driving engagement and building a cohesive brand narrative. From profile pictures to post graphics and story designs, we've got your social media branding covered.",
      },
      {
        id: 3,
        question: "Can you provide print-ready graphics ?",
        answer:
          "Absolutely. We deliver all graphics in print-ready formats, ensuring a seamless transition from on-screen designs to physical assets. This means you can take our designs straight to the printer without any additional hassle or adjustments needed. Or, we can arrange printing and shipping for you, via one of our trusted partners.",
      },
      {
        id: 4,
        question: "What graphic design services do you offer ?",
        answer:
          "We offer a comprehensive range of graphic design services, including logo design, brand identity development, signage, packaging, and print design. We're your one-stop shop for all things design. From initial concept sketches to the final deliverable, we'll support you through the entire design journey.",
      },
    ],
  },
  {
    categoryName: "Software",
    questionData: [
      {
        id: 1,
        question: "How much do your system & software development services cost ?",
        answer:
          "It’s highly dependent on the complexity and requirements of the project. For a detailed quote, contact us directly. We'll talk through your needs and provide a customised estimate that aligns with your budget and objectives — either a fixed project cost or an monthly subscription. You’ll find full details of our pricing structure here: Phunk Pricing",
      },
      {
        id: 2,
        question: "can you design mobile apps ?",
        answer:
          "Yes, we can. Our team is skilled in creating mobile apps that offer an intuitive user experience, coupled with robust functionality. Whether you're looking to develop an app for iOS, Android, or both, we have the expertise to bring your vision to life.",
      },
      {
        id: 3,
        question: "What coding languages caan you build systems with ?",
        answer:
          "We have specific experience in HTML, CSS, REACT, NextJS, Laravel, JQuery, Bootstrap, PHP, and MySQL. Our team is well-versed in using these languages to develop systems that are both efficient and effective. This wide array of expertise allows us to choose the best technologies for your specific needs.",
      },
      {
        id: 4,
        question: "What types of systems can you develop ?",
        answer:
          "We create custom systems tailored to a range of use cases. This includes customer portals, dashboards, quoting tools, mobile apps, and SaaS solutions, among others. Whether you're a startup or an established business, we can develop a system that streamlines your operations and enhances the user experience.",
      },
    ],
  },
  {
    categoryName: "Web Design",
    questionData: [
      {
        id: 1,
        question: "How much do your websites cost ?",
        answer:
          "Costs can vary based on the scope and features of your website. We offer a choice of subscription packages to suit different budgets and needs. Or, for a project-specific tailored quote, feel free to reach out to us. We're more than happy to discuss your project and provide a detailed estimate. You’ll find full details of our pricing structure here: Phunk Pricing",
      },
      {
        id: 2,
        question: "How long does it take to launch a new website ?",
        answer:
          "The timeline for launching a new website can vary depending on the complexity and specific requirements of the project. However, we typically aim to get your site up and running within 4 to 8 weeks. We'll keep you in the loop every step of the way, ensuring that you're fully satisfied with the progress and final product.",
      },
      {
        id: 3,
        question: "Can you design ecommerce websites ?",
        answer:
          "Absolutely, we can. We're experts in crafting ecommerce platforms that not only look stunning but also drive conversions. Utilising the robust and versatile Webflow platform, we ensure your online store is both user-friendly and optimised for sales. From product catalogues to secure payment gateways, we've got every aspect covered to make your online store a success.",
      },
      {
        id: 4,
        question: "Are your websites optimised for search engines ?",
        answer:
          "Yes, they are. Search engine optimisation (SEO) comes as standard when you work with us. We make sure your website is not just visually appealing but also easily discoverable by your target audience. From keyword research to meta descriptions, we implement a comprehensive SEO strategy to boost your site's visibility.",
      },
    ],
  },
];

type contextType = {
  nowActiveId: number;
  setNowActiveId: (nowActiveId: number) => void;
};

export const QuestionContext = createContext<contextType | null>(null);

const P_SectionThree = () => {
  const [nowActiveCategoryName, setNowActiveCategoryName] = useState(DataSet[0].categoryName);
  const [nowActiveId, setNowActiveId] = useState(0);

  function handleClickCategoryName(e: MouseEvent<HTMLDivElement>) {
    if (!e.target) return;
    const clickCategoryName = e.currentTarget.innerHTML;
    console.log(clickCategoryName);
    setNowActiveCategoryName(clickCategoryName);
    setNowActiveId(0);
  }

  return (
    <QuestionContext.Provider value={{ nowActiveId, setNowActiveId }}>
      <div className="w-full h-screen md:px-8 px-4 flex flex-col gap-8">
        <h2 className=" text-center text-transparent bg-gradient-to-b bg-clip-text from-gray-300 to-gray-400 lg:text-6xl text-4xl">
          Frequently asked questions
        </h2>
        <p className="text-gray-500 text-center font-light text-sm">
          Explore our Frequently Asked Questions to find the answers you've been looking for, without even
          having to ask.
        </p>
        <div className="flex flex-col gap-8 lg:grid grid-cols-3">
          {/* 問題集名稱 */}
          <div className="text-white flex md:flex-col justify-start items-center md:text-3xl text-2xl gap-8">
            {DataSet.map((category) => (
              <div key={category.categoryName}>
                <h3
                  onClick={(e) => handleClickCategoryName(e)}
                  className={`hidden transition-all md:block cursor-pointer  ${
                    nowActiveCategoryName === category.categoryName
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#34d6dc] to-blue-600"
                      : "text-gray-400 hover:text-white"
                  } `}
                >
                  {category.categoryName}
                </h3>
                <h3
                  onClick={(e) => handleClickCategoryName(e)}
                  className={`md:hidden transition-all cursor-pointer ${
                    nowActiveCategoryName === category.categoryName
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {category.categoryName}
                </h3>
              </div>
            ))}
          </div>
          {/* 問題集 */}
          <div className=" col-span-2">
            {DataSet.map((category, i) => (
              <P_SectionThreeCategoryCard
                nowActiveCategoryName={nowActiveCategoryName}
                key={i}
                categoryData={category}
              />
            ))}
          </div>
        </div>
      </div>
    </QuestionContext.Provider>
  );
};

export default P_SectionThree;
