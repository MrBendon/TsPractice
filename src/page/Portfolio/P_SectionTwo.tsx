import Card1_1 from "../../assets/Portfolio/card1_1.webp";
import Card1_2 from "../../assets/Portfolio/card1_2.svg";
import Card2_1 from "../../assets/Portfolio/card2_1.webp";
import Card2_2 from "../../assets/Portfolio/card2_2.svg";
import Card3_1 from "../../assets/Portfolio/card3_1.webp";
import Card3_2 from "../../assets/Portfolio/card3_2.svg";
import Card4_1 from "../../assets/Portfolio/card4_1.webp";
import Card4_2 from "../../assets/Portfolio/card4_2.webp";
import Card5_1 from "../../assets/Portfolio/card5_1.webp";
import Card5_2 from "../../assets/Portfolio/card5_2.webp";
import Card6_1 from "../../assets/Portfolio/card6_1.webp";
import Card6_2 from "../../assets/Portfolio/card6_2.webp";
import Card7_1 from "../../assets/Portfolio/card7_1.webp";
import Card7_2 from "../../assets/Portfolio/card7_2.webp";
import P_SectionTwoCard from "./P_SectionTwoCard";

export type CardDataType = {
  id: number;
  title: string;
  description: string;
  highlight: string[];
  url: string;
  img1: string;
  img2: string;
  imgBackGroundColor: string;
};

export const SectionTwoCardData: CardDataType[] = [
  {
    id: 1,
    title: "Hacien Tequila",
    description:
      "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project comprising web, packaging and marketing assets as well as 3D renders of their signature bottles. ",
    highlight: ["Webflow Development", "UI/UX Design", "Webflow Traning", "Graphic Design"],
    url: "",
    img1: Card1_1,
    img2: Card1_2,
    imgBackGroundColor: "bg-black",
  },
  {
    id: 2,
    title: "Monnson Freight",
    description:
      "Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
    highlight: ["Webflow Development", "UI/UX Design", "Branding", "Software Development", "Graphic Design"],
    url: "",
    img1: Card2_1,
    img2: Card2_2,
    imgBackGroundColor: "bg-blue-900",
  },
  {
    id: 3,
    title: "Mobilleo",
    description:
      "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees.  The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app. ",
    highlight: ["Splash Screens", "Illustrations", "Webflow Traning", "Graphic Design", "Lottie Animation"],
    url: "",
    img1: Card3_1,
    img2: Card3_2,
    imgBackGroundColor: "bg-blue-500",
  },
  {
    id: 4,
    title: "Bay 2 Campers",
    description:
      "Custom campervan brand Bay2 approached Phunk to develop an updated brand identity, new website and merchandise designs to help their growing company stand out from their competitors and communicate the quality of their product range. ",
    highlight: ["Webflow Development", "UI/UX Design", "Visual Identity", "Graphic Design"],
    url: "",
    img1: Card4_1,
    img2: Card4_2,
    imgBackGroundColor: "bg-blue-800",
  },
  {
    id: 5,
    title: "Box IQ",
    description:
      "BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.",
    highlight: ["Webflow Development", "UI/UX Design", "Webflow Training", "Graphic Design"],
    url: "",
    img1: Card5_1,
    img2: Card5_2,
    imgBackGroundColor: "bg-red-500",
  },
  {
    id: 6,
    title: "Honest Watch Dealer",
    description:
      "The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.",
    highlight: ["Graphic Design", "Visual Identity", "Packaging", "Apparel & Merchandise"],
    url: "",
    img1: Card6_1,
    img2: Card6_2,
    imgBackGroundColor: "bg-white",
  },
  {
    id: 7,
    title: "Breaking Bread",
    description:
      "Breaking Bread is a popular conversational podcast fronted by BeardMeatsFood and Josh Gudgeon with over half a million listeners across Spotify, YouTube and Facebook. The founders approached Phunk to develop a unique brand identity for use across web and social media properties, merchandising and live event promotions.",
    highlight: ["Visual Identity", "Apparel & Merchandise", "Social Media Templates", "Animation"],
    url: "",
    img1: Card7_1,
    img2: Card7_2,
    imgBackGroundColor: "bg-black",
  },
];

const P_SectionTwo = () => {
  return (
    <section className="bg-black w-full lg:w-[80%] py-16 mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 md:gap-8 px-8">
      {SectionTwoCardData.map((data) => (
        <P_SectionTwoCard key={data.id} data={data} />
      ))}
    </section>
  );
};

export default P_SectionTwo;
