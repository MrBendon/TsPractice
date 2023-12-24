import Img1 from "../../assets/aboutus/aboutus-section-1.webp";
import Img2 from "../../assets/aboutus/aboutus-section-2.webp";
import Img3 from "../../assets/aboutus/aboutus-section-3.webp";
import Button from "../../components/Button";
import AB_SectionTwoCard from "./AB_SectionTwoCard";
import Funboy from "../../assets/aboutus/AboutUs _Girl - Implement-1.webp";

export type dataType = {
  title: string;
  needhighlight: boolean;
  description: string;
  buttontext: string;
  buttonInImg: boolean;
  Img: string;
  ordertype?: "imgdown" | "imgleft" | "imgright" | "imgup";
  buttonlink: "";
};

const SectionTwoData: dataType[] = [
  {
    title: "The origin story",
    needhighlight: true,
    description:
      "The partnership behind Phunk began a long time before the company was officially established. Our founders Joe Murray and Joe Crabtree first met at college, both studying creative and digital media courses —never imagining that sharing a first name would make their copywriter’s job unnecessarily difficult at some point in the future.",
    buttontext: "Talk to us",
    buttonInImg: true,
    Img: Img1,
    ordertype: "imgdown",
    buttonlink: "",
  },
  {
    title: "After graduating, the Joes took different paths,",
    needhighlight: false,
    description:
      "JM heading into a marketing agency role focused on web design, branding and animation, and JC working on print design and web advertising for household names like Kellogg's, Fred Perry and Axe/Lynx. They kept in touch, collaborating on various projects and inevitably moved towards a closer working relationship which made the most of their complementary skills. While the rest of the world transitioned towards remote working during COVID, Joe and Joe decided they’d rather open an office, and Phunk was officially born.",
    buttontext: "Start a project",
    buttonInImg: false,
    Img: Img2,
    ordertype: "imgright",
    buttonlink: "",
  },
  {
    title: "A little over 2 years in,",
    needhighlight: false,
    description:
      "and the business has gone from strength to strength. New team members have joined, widening our skillset and bringing more diversity to our thinking. Client projects ship regularly, each one bringing unique challenges and opportunities to stretch our creativity. And our passion for Webflow design has been recognised with an official professional partnership.",
    buttontext: "Talk to us",
    buttonInImg: true,
    Img: Img3,
    ordertype: "imgup",
    buttonlink: "",
  },
];

const AB_SectionTwo = () => {
  return (
    <div className="w-full bg-white px-8 md:px-24 py-36">
      <div className="xl:w-[70%] mx-auto w-full  flex flex-col gap-36">
        {SectionTwoData.map((data, index) => (
          <AB_SectionTwoCard key={index} data={data} />
        ))}
        <div className="mt-16 flex flex-col-reverse md:flex-row bg-gradient-to-r items-center  justify-between from-blue-500 to-[#54d996] rounded-3xl p-8 relative">
          <div className="w-full md:flex-1 flex flex-col gap-8 justify-around py-8 md:pt-0 sm:pt-96 pt-[20rem]">
            <h3 className="text-white text-4xl">It’s been a lot of fun.</h3>
            <p className="text-white text-2xl">Now let's do more!</p>
            <Button styledtype="whitedark" buttonContent="Talk to us" />
          </div>
          <div className="absolute md:-translate-y-0 sm:-translate-y-[30%] -translate-y-[40%]  w-[80%] md:-bottom-4 md:right-[5%] md:h-max md:w-[40%] xl:w-[35%]">
            <img className="" src={Funboy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AB_SectionTwo;
