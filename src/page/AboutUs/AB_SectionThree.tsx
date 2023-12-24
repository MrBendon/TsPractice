import GradientText from "../../components/GradientText";
import PhunkValuesCard from "./PhunkValuesCard";
import Professional_Parnter from "../../assets/aboutus/Partner_White@.png";

export type valuesDataType = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

const valuesData: valuesDataType[] = [
  {
    id: "01",
    icon: "",
    title: "Quality",
    description:
      "We don’t send anything out the door that we’re not proud to put our names to. There’s no pride in a rushed job, a cobbled-together piece of code, or a logo that looks like everyone else’s — we check and double-check every element of our projects to guarantee its quality.",
  },
  {
    id: "02",
    icon: "",
    title: "Reliability",
    description:
      "It’s important to us that you can trust we’ll deliver what we promise — whether that’s meeting a tight deadline, returning a call, or reworking a draft ahead of an important presentation. In every interaction, we go the extra mile for our clients to reinforce that trust.",
  },
  {
    id: "03",
    icon: "",
    title: "Creativity",
    description:
      "Each member of the team at Phunk has built their creative career on the principle that the work only matters if it’s original, effective and exciting — we’re not interested in building anything substandard, derivative or boring.",
  },
  {
    id: "04",
    icon: "",
    title: "Ambition",
    description:
      "We’re in the creative industry because we want to push boundaries, find new ways to communicate and innovate at every stage of our process. If we’re not always striving to outdo our previous work, and motivating each other to do better, we’re doing it wrong.",
  },
];

const AB_SectionThree = () => {
  return (
    <div className="bg-black px-8 xl:w-[60%] w-full mx-auto  min-h-screen flex flex-col justify-center items-center gap-16 py-24">
      <div>
        <h2 className="text-white md:text-6xl text-4xl ">
          Phunk <GradientText text="Values" />
        </h2>
      </div>
      <div className="w-full lg:grid lg:grid-cols-2 flex flex-col gap-8">
        {valuesData.map((data) => (
          <PhunkValuesCard key={data.id} data={data} />
        ))}
      </div>
      <div className="md:w-[75%] mx-auto w-full flex flex-col gap-8 items-center">
        <h3 className="text-white font-semibold md:text-6xl text-4xl text-center">Webflow @ phunk</h3>
        <p className="text-center text-gray-400 font-light">
          We’re immensely proud to be official <span className="text-white">Webflow partners </span>— we’ve
          been avid users of the platform since the early days, and it’s amazing to be part of its
          development. Check out our Webflow page to learn why we (and our clients) love it so much. For now,
          here are the basics.
        </p>
        <img className="w-72" src={Professional_Parnter} alt="" />
      </div>
    </div>
  );
};

export default AB_SectionThree;
