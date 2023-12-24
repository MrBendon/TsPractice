import Button from "../../components/Button";
import GradientText from "../../components/GradientText";
import Service_Card from "./Service_Card";

export type CardType = {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: string;
};

export const ServiceCardData: CardType[] = [
  {
    id: 1,
    title: "Graphic Design",
    description: "Add as many design requests to your board as you'd like.",
    url: "",
    icon: "",
  },
  {
    id: 2,
    title: "Web Design",
    description: "Stunning, engaging and high-conversion websites.",
    url: "",
    icon: "",
  },
  {
    id: 3,
    title: "Software Development",
    description: "Custom systems to meet specific needs.",
    url: "",
    icon: "",
  },
];

const Services_SectionTwo = () => {
  return (
    <section className="w-full min-h-screen bg-black px-8 py-16">
      <div className="flex md:flex-row  flex-col gap-8 justify-around items-center">
        {ServiceCardData.map((item) => (
          <Service_Card key={item.id} data={item}></Service_Card>
        ))}
      </div>
      <div className="text-white text-center flex flex-col gap-8 pt-24">
        <h2 className="text-6xl">
          <GradientText text="Pricing" />
          &ensp;— made simple
        </h2>
        <p className="text-gray-500 font-light text-sm">
          Costing a design project can be a nightmare. We’ve made it easy for our clients by offering a choice
          of subscription packages, so you can see exactly what you’re getting, and match it to your budget.
          Or for ad-hoc work, we’ll give you a single all-in price so there are no surprises later.
        </p>
        <div className="w-full flex justify-center items-center gap-8">
          <Button buttonContent="See our plans"></Button>
          <Button styledtype="whitedark" buttonContent="Unique project?"></Button>
        </div>
      </div>
    </section>
  );
};

export default Services_SectionTwo;
