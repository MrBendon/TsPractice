import GradientText from "../../components/GradientText";
import Card1Img from "../../assets/Home/Card1.webp";
import Card2Img from "../../assets/Home/Card2.webp";
import Card3Img from "../../assets/Home/Card3.webp";
import Card4Img from "../../assets/Home/Card4.webp";
import Card5Img from "../../assets/Home/Card5.webp";

import SmallVersion_Card from "./SmallVersion_Card";
import { useLayoutEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LargeVersion_Card from "./LargeVersion_Card";

gsap.registerPlugin(ScrollTrigger);

export type CardDataType = {
  id: number;
  highlighttext: string[];
  title: string;
  description: string;
  url: string;
  img: string;
};

export const SectionData: CardDataType[] = [
  {
    id: 1,
    highlighttext: ["Webflow Development", "UI/UX Design", "Webflow Training", "Graphic Design"],
    title: "Hacien",
    description:
      "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worl.scrollWidth They approached Phunk to undertake a comprehensive design project comprising web, packaging and marketing assets as well as 3D renders of their signature bottles.",
    url: "",
    img: Card1Img,
  },
  {
    id: 2,
    highlighttext: [
      "Splash Screens",
      "Illustrations",
      "Graphic Design",
      "Lottie Animations",
      "Webflow Training",
    ],
    title: "Mobilleo",
    description:
      "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees.  The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app.",
    url: "",
    img: Card2Img,
  },
  {
    id: 3,
    highlighttext: ["Webflow Development", "UI/UX Design", "Webflow Training", "Graphic Design"],
    title: "Mannson Freight",
    description:
      "Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
    url: "",
    img: Card3Img,
  },
  {
    id: 4,
    highlighttext: ["Webflow Development", "UI/UX Design", "Webflow Training", "Graphic Design"],
    title: "BOX iQ",
    description:
      "BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.",
    url: "",
    img: Card4Img,
  },
  {
    id: 5,
    highlighttext: ["Webflow Development", "Visual Identity", "Packaging", "Apparel & Merchandise"],
    title: "The Honest Watch Dealer",
    description:
      "The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.",
    url: "",
    img: Card5Img,
  },
];

const SectionFive = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const SmallVersionDivRef = useRef<HTMLDivElement>(null);
  const LargeVersionDivRef = useRef<HTMLDivElement>(null);
  const TitleDivRef = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function Resize() {
    setWindowWidth(window.innerWidth);
  }
  useLayoutEffect(() => {
    window.addEventListener("resize", Resize);
    Resize();
    const ctx = gsap.context(() => {
      gsap.to(windowWidth <= 768 ? SmallVersionDivRef.current : LargeVersionDivRef.current, {
        x: windowWidth <= 768 ? -(SmallVersionDivRef.current!.scrollWidth - (windowWidth / 5) * 4) : "",
        y:
          windowWidth <= 768
            ? ""
            : -(LargeVersionDivRef.current!.scrollHeight - sectionRef.current!.clientHeight + 300),
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end:
            windowWidth <= 768
              ? "+=5000"
              : `+=${LargeVersionDivRef.current!.scrollHeight + 1 * TitleDivRef.current!.clientHeight}`,
          scrub: 1,
          pin: windowWidth <= 768 ? sectionRef.current : sectionRef.current,
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, [windowWidth]);

  return (
    <div
      id="section"
      className="w-[95%] mx-auto h-screen bg-black  md:pt-20 p-8 flex flex-col gap-4"
      ref={sectionRef}
    >
      <div className="text-white flex flex-col gap-8" ref={TitleDivRef}>
        <h2 className="text-6xl">
          Dive into the <GradientText text="work."></GradientText>
        </h2>
        <p className="hidden md:block text-gray-500 font-thin">
          As creatives ourselves, we know that what you really want to see is the work we’ve actually put
          live. Here’s a showcase of some of our recent projects, across a range of sectors.
        </p>
      </div>
      {/* 大尺寸版本 */}
      <div className="w-full hidden md:block h-[60rem] overflow-hidden">
        <div className="w-full  flex-col" ref={LargeVersionDivRef}>
          {SectionData.map((data) => (
            <LargeVersion_Card key={data.id} cardData={data} />
          ))}
        </div>
      </div>
      {/* 小尺寸版本 */}

      <div
        className="flex flex-row md:flex-col items-center gap-4 md:gap-16 md:hidden min-h-max"
        ref={SmallVersionDivRef}
      >
        {SectionData.map((cardData) => (
          <SmallVersion_Card key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default SectionFive;
