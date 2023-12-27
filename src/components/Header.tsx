import { useState } from "react";
import Button from "./Button";
import Link from "./Link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HomeImg from "../assets/home.png";
import AboutusImg from "../assets/information.png";
import ServicesImg from "../assets/services.png";
import ProtfolioImg from "../assets/portfolio.png";
import NewsImg from "../assets/news.png";
import ContactImg from "../assets/contact-info.png";

export type linkType = {
  linkName: string;
  linkUrl: string;
  linkdescription: string;
  linkImage: string;
};

const linklist: linkType[] = [
  {
    linkName: "Home",
    linkUrl: "/",
    linkdescription: "We transform your brand vision into tangible experiences.",
    linkImage: HomeImg,
  },
  {
    linkName: "About Us",
    linkUrl: "/aboutus",
    linkdescription: "Find out more about what makes us tick.",
    linkImage: AboutusImg,
  },
  {
    linkName: "Services",
    linkUrl: "/services",
    linkdescription: "We transform your brand vision into tangible experiences.",
    linkImage: ServicesImg,
  },
  {
    linkName: "Portfolio",
    linkUrl: "/portfolio",
    linkdescription: "We transform your brand vision into tangible experiences.",
    linkImage: ProtfolioImg,
  },
  {
    linkName: "News",
    linkUrl: "/news",
    linkdescription: "We transform your brand vision into tangible experiences.",
    linkImage: NewsImg,
  },
  {
    linkName: "Contact Us",
    linkUrl: "/contactus",
    linkdescription: "Get in touch and let's transform your ideas into reality.",
    linkImage: ContactImg,
  },
];

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  function handleClickNav() {
    setIsOpenNav((prev) => !prev);
  }
  return (
    <header className="fixed top-0 pt-6 w-full flex justify-between px-8 z-50 bg-gradient-to-b from-black to-transparent">
      <Logo />
      <nav className="lg:flex hidden border-[1px] border-grey bg-black/80 hover:bg-black/60 rounded-3xl px-4 py-2 justify-around items-center text-white hover:text-white/50 transition-all duration-300">
        {linklist.map((link) => (
          <Link key={link.linkName} link={link} onClose={() => handleClickNav()} />
        ))}
      </nav>
      {/* mobile Nav */}
      <nav className="lg:hidden text-white hover:cursor-pointer group">
        <div
          className="px-4 py-1 border font-thin border-gray-600 rounded-2xl"
          onClick={() => handleClickNav()}
        >
          Menu
        </div>
      </nav>
      <MobileNav
        linklist={linklist}
        isOpenNav={isOpenNav}
        setIsOpenNav={setIsOpenNav}
        onClose={() => handleClickNav()}
      />
      <div className="lg:flex hidden">
        <Button buttonContent="Talk to us" />
      </div>
    </header>
  );
};

export default Header;
