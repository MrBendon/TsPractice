import { linkType } from "./Header";
import Link from "./Link";

type PropsType = {
  isOpenNav: boolean;
  onClose: () => void;
  linklist: linkType[];
  setIsOpenNav: (value: boolean) => void;
};

const MobileNav = ({ linklist, isOpenNav, onClose, setIsOpenNav }: PropsType) => {
  console.log(setIsOpenNav);
  return (
    <div
      className={`lg:hidden w-[90%] fixed left-[50%] -translate-x-[50%] bg-white rounded-2xl ${
        !isOpenNav ? "invisible opacity-0 top-0" : "top-16"
      } p-12 transition-all duration-300 cursor-pointer flex flex-col gap-4 `}
    >
      <button
        className=" absolute top-4 right-4 border border-gray-200 w-8 aspect-square rounded-full flex justify-center items-center hover:bg-gray-500  hover:text-white transition-all hover:cursor-pointer"
        onClick={() => onClose()}
      >
        X
      </button>
      {linklist.map((link, i) => (
        <Link i={i} key={link.linkName} link={link} onClose={onClose} />
      ))}
    </div>
  );
};

export default MobileNav;
