import { useState } from "react";
import Img1 from "../../assets/aboutus/friendly.svg";
import Img2 from "../../assets/aboutus/great.svg";
import Img3 from "../../assets/aboutus/versatile.svg";
import Img4 from "../../assets/aboutus/proof.svg";
import AB_Carousel from "./AB_Carousel";

export type SingleCarouselDataType = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const CarouselDataSet: SingleCarouselDataType[] = [
  {
    id: 1,
    title: "It’s user-friendly",
    description:
      "Webflow allows us to build sites our clients can actually use — so they stay updated, fresh and engaging.",
    image: Img1,
    link: "123",
  },
  {
    id: 2,
    title: "It looks great",
    description:
      "Using Webflow as a foundation opens up limitless potential for design, so we can build something true to our vision without compromise.",
    image: Img2,
    link: "",
  },
  {
    id: 3,
    title: "It’s versatile",
    description:
      "From ecommerce stores to e-learning courses, membership sites, commercial portals, and more — Webflow supports a variety of use cases.",
    image: Img3,
    link: "",
  },
  {
    id: 4,
    title: "It’s future-proof",
    description:
      "At a structural level, Webflow makes it easy to rework, refresh and reimagine existing sites without starting from scratch.",
    image: Img4,
    link: "",
  },
];

const AB_SectionFour = () => {
  const [showSlideId, setShowSlideId] = useState(1);
  console.log(showSlideId);
  function handleClickBack() {
    if (showSlideId === CarouselDataSet[0].id) {
      setShowSlideId(CarouselDataSet.length);
    } else {
      setShowSlideId((prev) => prev - 1);
    }
  }

  function handleClickFront() {
    if (showSlideId === CarouselDataSet.length) {
      setShowSlideId(CarouselDataSet[0].id);
    } else {
      setShowSlideId((prev) => prev + 1);
    }
  }

  return (
    <div className="w-[90%] xl:w-[60%] mx-auto border border-gray-500 rounded-2xl pt-8 bg-gradient-to-b from-black via-black to-blue-500 relative overflow-hidden">
      {CarouselDataSet.map((data) => (
        <AB_Carousel key={data.id} data={data} showSlideId={showSlideId} />
      ))}
      <div className=" absolute flex justify-around items-center gap-4 top-8 right-8">
        <button
          className="w-6 flex justify-center items-center aspect-square rounded-full bg-white"
          onClick={() => handleClickBack()}
        >
          &lt;
        </button>
        <button
          className="w-6 flex justify-center items-center aspect-square rounded-full bg-white"
          onClick={() => handleClickFront()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AB_SectionFour;
