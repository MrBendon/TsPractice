import GradientText from "../../components/GradientText";
import Photo1 from "../../assets/aboutus/EmployeePerson1.webp";
import Photo2 from "../../assets/aboutus/EmployeePerson2.webp";
import PeopleCard from "./PeopleCard";

export type PersonDataType = {
  id: number;
  name: string;
  position: string;
  description: string;
  photo: string;
};

const EmployeesData: PersonDataType[] = [
  {
    id: 1,
    name: "Joe Crabtree",
    position: "Co Founder / Director",
    description:
      "Meet Joe, our lead designer here at Phunk. Joe has 10 years of experience in graphic design, working with some of the world’s biggest brands. Specialising in branding and graphics, Joe relishes the challenge of building a brand from the ground up.",
    photo: Photo1,
  },
  {
    id: 2,
    name: "Joe Murray",
    position: "Co Founder / Director",
    description:
      "Meet Joe, Creative Director. He is a designer with over 10 years experience in the field. Branding, UX and animation are his main skills and, when he’s not working his creative magic, he is usually mountain biking, playing basketball, and getting away into the outdoors in his campervan.",
    photo: Photo2,
  },
];

const AB_SectionFive = () => {
  return (
    <div className="py-16 px-8 w-[95%] mx-auto flex flex-col justify-center items-center gap-8">
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <h2 className="text-white lg:text-6xl text-4xl">
          The <GradientText text="people" /> behind the projects.
        </h2>
        <p className="w-full lg:w-[50%] text-gray-500 text-center text-xs font-light">
          Phunk works because it’s a genuine collaboration between experts — equality of ideas,
          cross-pollination of skills and a healthy obsession with quality. Here’s the team that makes it
          happen.
        </p>
      </div>
      <div className="lg:w-[65%] w-[95%] mx-auto flex md:flex-row flex-col gap-8">
        {EmployeesData.map((data) => (
          <PeopleCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AB_SectionFive;
