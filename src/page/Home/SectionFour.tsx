import { useState } from "react";
import CarouselImg01 from "../../assets/Carousel01.webp";
import CarouselImg02 from "../../assets/Carousel02.webp";
import CarouselImg03 from "../../assets/Carousel03.webp";
import CarouselImg04 from "../../assets/Carousel04.webp";
import Carousel from "../../components/Carousel";

export type SingleCarouselDataType = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const CarouselData: SingleCarouselDataType[] = [
  {
    id: 1,
    title: "Imagination",
    description:
      "We’re not interested in recreating the wheel — reworking tired old layouts, copying competitor sites or reusing commercial templates. We bring a fresh pair of eyes to every project, as well as the inspiration, curiosity and creative skills necessary to ensure your next project is one-of-a-kind. Otherwise, what’s the point?",
    image: CarouselImg01,
    link: "link",
  },
  {
    id: 2,
    title: "Vision",
    description:
      "We’re experts at taking the ideas you’ve developed, the story behind your brand and the personality of your team, and developing them into a clear and cogent brand vision. We’ll help you drill down into what actually matters to your clients, what you’re really trying to communicate, and the best mix of media to use to get the message across.",
    image: CarouselImg02,
    link: "",
  },
  {
    id: 3,
    title: "Effciency",
    description:
      "We don’t cut corners, but we do round them off. That means eliminating those frustrating wait times between mockups, responding to your emails promptly, working in parallel teams to build quality work faster, and taking ownership of your project to hit key business deadlines. We respect your time as much as we do ours.",
    image: CarouselImg03,
    link: "",
  },
  {
    id: 4,
    title: "Fun",
    description:
      "We wouldn’t be in this business if we didn’t love it. And we like our clients to have fun with the process too. Working with Phunk means interacting with a friendly bunch of professionals who are happy to share their expertise — not show it off — involving you in the key decisions and discussions that make every design project genuinely enjoyable.",
    image: CarouselImg04,
    link: "",
  },
];

const SectionFour = () => {
  const [showSlideId, setShowSlideId] = useState(CarouselData[0].id);
  function handleClickBack() {
    if (showSlideId === CarouselData[0].id) {
      setShowSlideId(CarouselData.length);
    } else {
      setShowSlideId((prev) => prev - 1);
    }
  }

  function handleClickFront() {
    if (showSlideId === CarouselData.length) {
      setShowSlideId(CarouselData[0].id);
    } else {
      setShowSlideId((prev) => prev + 1);
    }
  }

  return (
    <div className=" w-[95%] mx-auto flex flex-col justify-center items-center gap-16 py-8">
      <div className="text-white">logo</div>
      <h3 className="text-7xl text-white">
        Why work
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#29adb2] to-blue-600">
          &nbsp; with us?
        </span>
      </h3>
      <div className="w-[95%] min-h-40 rounded-2xl overflow-hidden relative bg-gradient-to-b from-black via-black to-blue-600 border-[1px] border-gray-500">
        {CarouselData.map((data) => (
          <Carousel showSlideId={showSlideId} key={data.id} data={data} />
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
    </div>
  );
};

export default SectionFour;
