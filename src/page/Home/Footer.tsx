import Logo from "../../assets/Logo.svg";
import FooterLinkCard from "../../components/FooterLinkCard";

export type FooterlinkType = {
  linkName: string;
  linkUrl: string;
};

export type CategoryType = {
  categoryName: string;
  categorylink: FooterlinkType[];
};

const linklist: CategoryType[] = [
  {
    categoryName: "Company",
    categorylink: [
      {
        linkName: "Home",
        linkUrl: "",
      },
      {
        linkName: "About Us",
        linkUrl: "",
      },
      {
        linkName: "Services",
        linkUrl: "",
      },
      {
        linkName: "Pricing",
        linkUrl: "",
      },
      {
        linkName: "Portfolio",
        linkUrl: "",
      },
    ],
  },
  {
    categoryName: "Service",
    categorylink: [
      {
        linkName: "Web Design",
        linkUrl: "",
      },
      {
        linkName: "Graphic Design",
        linkUrl: "",
      },
      {
        linkName: "Software",
        linkUrl: "",
      },
      {
        linkName: "Webflow",
        linkUrl: "",
      },
      {
        linkName: "Portfolio",
        linkUrl: "",
      },
    ],
  },
  {
    categoryName: "Contact",
    categorylink: [
      {
        linkName: "Phunk Creative, Salts Mill, Victoria Rd, Saltaire, Shipley BD18 3LA",
        linkUrl: "",
      },
      {
        linkName: "",
        linkUrl: "",
      },
      {
        linkName: "hello@phunk.co.uk",
        linkUrl: "",
      },
      {
        linkName: "+441133 908 188",
        linkUrl: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className="w-[95%] mx-auto h-max bg-black flex flex-col lg:flex-row justify-between py-24 p-8 gap-16">
      <div className="text-white flex flex-col gap-8 ">
        <div className="flex items-center justify-start font-semibold gap-4">
          <img className="w-8 aspect-square " src={Logo} alt="logo" />
          <h4 className=" text-3xl">phunk</h4>
        </div>
        <p className="text-3xl font-semibold">
          Your brand,
          <br /> built
          <span className=" text-transparent bg-gradient-to-r bg-clip-text from-[#29ADB2] to-blue-600 ">
            &nbsp;better
          </span>
        </p>
        <div className="text-gray-500 text-xs ">
          <p>Company Number: 13426455</p>
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-2 md:flex md:flex-1 md:justify-between  lg:px-12">
        {linklist.map((category) => (
          <FooterLinkCard key={category.categoryName} data={category} />
        ))}
        {/* <div className="text-gray-400 flex flex-col gap-8">
          <p className="text-md text-transparent bg-clip-text bg-gradient-to-r from-[#29ADB2] to-blue-600">
            Contact
          </p>
          <p
            className="text-sm font-thin
        "
          >
            Phunk Creative, Salts Mill, Victoria Rd, Saltaire, Shipley BD18 3LA
          </p>
          <div
            className="text-sm font-thin flex flex-col gap-2
        "
          >
            <p>hello@phunk.co.uk</p>
            <p>+441133 908 188</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
