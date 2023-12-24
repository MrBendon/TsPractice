import WOWHYDRATEImg from "../../assets/WOWHYDRATE.webp";
import nakdImg from "../../assets/nakd.webp";
import unileverImg from "../../assets/unilever.webp";
import wildLifeImg from "../../assets/wildLife.webp";
import UniversityImg from "../../assets/UniversityofSheffield.webp";
import majenta from "../../assets/majenta.webp";
import mobilleo from "../../assets/mobilleo.webp";
import BOXiQ from "../../assets/BOXiQ.webp";

export type brandDataType = {
  id: number;
  brandName: string;
  brandLogo: string;
  url: string;
};

const brandList: brandDataType[] = [
  { id: 1, brandName: "WOWHYDRATE", brandLogo: WOWHYDRATEImg, url: "https://www.phunk.co.uk/#" },
  { id: 2, brandName: "nakd", brandLogo: nakdImg, url: "https://www.phunk.co.uk/#" },
  { id: 3, brandName: "unilever", brandLogo: unileverImg, url: "https://www.phunk.co.uk/#" },
  { id: 4, brandName: "wildLife", brandLogo: wildLifeImg, url: "https://www.phunk.co.uk/#" },
  { id: 5, brandName: "University of Sheffield", brandLogo: UniversityImg, url: "https://www.phunk.co.uk/#" },
  { id: 6, brandName: "majenta", brandLogo: majenta, url: "https://www.phunk.co.uk/#" },
  { id: 7, brandName: "mobilleo.", brandLogo: mobilleo, url: "https://www.phunk.co.uk/#" },
  { id: 8, brandName: "BOXiQ", brandLogo: BOXiQ, url: "https://www.phunk.co.uk/#" },
];

const SectionSix = () => {
  return (
    <section className="w-[95%] mx-auto h-screen bg-black flex flex-col justify-around py-8">
      <div className="w-full flex flex-col gap-8">
        <h2 className="text-6xl md:text-7xl  text-white ">
          Trusted by leading
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#29ADB2] to-blue-600">
            &nbsp;brands.
          </span>
        </h2>
        <p className=" text-gray-400 font-thin">
          We’re proud to have worked with some of the most innovative, creative and inventive brands around.
          If you come on board — you’ll be in great company
        </p>
      </div>
      <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 items-center justify-items-center gap-8">
        {brandList.map((img) => (
          <img className="max-w-[10rem] max-h-10" key={img.id} src={img.brandLogo} alt={img.brandName} />
        ))}
      </div>
    </section>
  );
};

export default SectionSix;
