import Card01 from "../../assets/CardImage01.webp";
import Card02 from "../../assets/CardImage02.webp";
import Card03 from "../../assets/CardImage03.webp";
import Button from "../../components/Button";
import SectionThreeCard from "./SectionThreeCard";

export type CardDataType = {
  id: string;
  title: string;
  description: string;
  img: string;
};

const CardData: CardDataType[] = [
  {
    id: "01",
    title: "Web Design",
    description:
      "We create stunning, engaging and high-conversion websites based on the versatile and future-proof Webflow platform. Search engine optimisation and cutting-edge user experience design come as standard, along with exceptional reliability, scalability and performance. Plus, friendly support — whenever you need us.",
    img: Card01,
  },
  {
    id: "02",
    title: "Graphic Design",
    description:
      "Access a wealth of experience in logo design, brand identity development, and social media presence, along with signage, packaging and print design. \n Great design isn't just about looks. It's about purpose. At Phunk, you'll find no end of imaginative design skills. But we also back up the “wow” factor with logical layouts and engaging messaging.",
    img: Card02,
  },
  {
    id: "03",
    title: "Custom System Development",
    description:
      "We create stunning, engaging and high-conversion websites based on the versatile and future-proof Webflow platform. Search engine optimisation and cutting-edge user experience design come as standard, along with exceptional reliability, scalability and performance. Plus, friendly support — whenever you need us.",
    img: Card03,
  },
];

const SectionThree = () => {
  return (
    <section className="lg:w-[75%] w-[95%] min-h-screen mx-auto flex flex-col justify-center items-center py-16 gap-16">
      <h2 className=" text-white lg:text-7xl text-4xl text-center font-semibold px-4">
        <span className=" text-transparent bg-gradient-to-r bg-clip-text  from-[#29adb2]  to-blue-600">
          Laser-focused
        </span>
        &nbsp; on 3 key aspects of design.
      </h2>
      <div className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-4">
        {CardData.map((data) => (
          <SectionThreeCard key={data.id} data={data}></SectionThreeCard>
        ))}
      </div>
      <div className="flex gap-4">
        <Button buttonContent="See ours plans"></Button>
        <Button styledtype="whitedark" buttonContent="Unique project?"></Button>
      </div>
    </section>
  );
};

export default SectionThree;
