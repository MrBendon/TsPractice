import { useState } from "react";
import Client1 from "../../assets/client1.jpeg";
import Client2 from "../../assets/client2.jpeg";
import Client3 from "../../assets/client3.png";
import Client4 from "../../assets/client4.jpeg";
import Client5 from "../../assets/client5.jpeg";
import Client6 from "../../assets/client6.webp";
import ClientsMessageCard from "../../components/ClientsMessageCard";
import Button from "../../components/Button";

export type clientsMessageDataType = {
  id: number;
  name: string;
  brandName: string;
  message: string;
  image: string;
};

const clientsMessageData: clientsMessageDataType[] = [
  {
    id: 1,
    name: "Josh Gudgeon",
    brandName: "Breaking Bread",
    message:
      "Phunk Creative recently delivered on the branding of our new podcast. The team were responsive, professional & a real pleasure to work with.",
    image: Client1,
  },
  {
    id: 2,
    name: "Sarah Baugh",
    brandName: "Get Dynamic",
    message:
      "Our new website is so cool, really engaging and user friendly. Will definitely be using them again on future projects.",
    image: Client2,
  },
  {
    id: 3,
    name: "Stuart Crowder",
    brandName: "Mannson Freight",
    message:
      "Our brand means the world to us and if yours does too then we could not recommend any other partner more highly than Phunk Creative.",
    image: Client3,
  },
  {
    id: 4,
    name: "Alex Lambert",
    brandName: "Lambert&Co",
    message:
      "Our branding is regularly complimented, the sleek simplistic design fits perfectly & helps us stand out from our competitors.",
    image: Client4,
  },
  {
    id: 5,
    name: "Jordan Sims",
    brandName: "BOXIQ",
    message:
      "Phunk have been brilliant all through out the process. Super responsive & fair pricing. I would highly recommend Phunk for all web development needs.",
    image: Client5,
  },
  {
    id: 6,
    name: "Josh Illingworth",
    brandName: "Wave Platform",
    message:
      "Phunk did a fantastic job on my latest project, they are easy to work with and very professional. Highly recommend!",
    image: Client6,
  },
];

const SectionSeven = () => {
  const [nowShowCard, setNowShowCard] = useState(0);

  function handleClickLeft() {
    if (nowShowCard === 0) {
      setNowShowCard(clientsMessageData.length - 1);
    } else {
      setNowShowCard((prev) => prev - 1);
    }
  }

  function handleClickRight() {
    if (nowShowCard === clientsMessageData.length - 1) {
      setNowShowCard(0);
    } else {
      setNowShowCard((prev) => prev + 1);
    }
  }
  return (
    <section className=" py-8 flex flex-col items-center gap-16">
      {/* Title */}
      <div className="w-[90%] mx-auto text-white flex flex-col items-center gap-4">
        <h2 className="text-center lg:text-7xl  text-4xl">
          What our clients think of
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#29ADB2] to-blue-500">
            &nbsp;Phunk.
          </span>
        </h2>
        <p className="font-thin text-gray-400 lg:text-base sm:text-sm text-xs">
          We’re honest about our skills and abilities — and we’re delighted that our clients agree.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex w-full overflow-hidden gap-4 relative">
        {/* Go Left */}
        <div
          className=" absolute h-full bg-gradient-to-r from-black  to-transparent xl:w-40 sm:w-24 w-12 top-0 left-0 hover:cursor-w-resize z-10"
          onClick={() => handleClickLeft()}
        ></div>
        {/* Go Right */}
        <div
          className=" absolute h-full xl:w-40 sm:w-24 w-12 top-0 right-0 bg-gradient-to-l from-black  to-transparent  hover:cursor-e-resize z-10"
          onClick={() => handleClickRight()}
        ></div>
        {/* Message */}
        <div className={`flex  gap-4 `}>
          {clientsMessageData.map((data) => (
            <ClientsMessageCard nowShowCard={nowShowCard} key={data.id} data={data} />
          ))}
        </div>
      </div>

      {/* Down Part */}
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center py-24 gap-8 text-white bg-gradient-to-b from-black via-black to-blue-500  rounded-2xl relative ">
        <h3 className=" lg:text-6xl text-4xl font-bold">
          Let’s get to
          <span className=" text-transparent bg-gradient-to-r from-[#29ADB2] to-blue-500 bg-clip-text ">
            &nbsp;work.
          </span>
        </h3>
        <p className="text-center font-light lg:text-base sm:text-sm text-xs">
          We’re ready to get started on your next creative project. All you need to do is hit the button below
        </p>
        <div className="z-10">
          <Button styledtype="whitedark" buttonContent="Talk to us" />
        </div>
        <div className=" absolute bottom-0 w-full h-[30rem] overflow-hidden">
          {[8, 6, 4, 2].map((el) => (
            <div
              key={el}
              className={`absolute bottom-0 w-[${el}0%] aspect-square rounded-full left-[50%] -translate-x-[50%] bg-blue-${
                el / 2 + 1
              }00/10 z-[${el}] translate-y-[50%]`}
            ></div>
          ))}
        </div>
        <div className=" absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] w-12 aspect-square rounded-full bg-slate-400 flex justify-center items-center">
          logo
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
