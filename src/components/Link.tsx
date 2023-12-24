import { type linkType } from "./Header";
import { NavLink } from "react-router-dom";

type PropsType = {
  link: linkType;
  onClose: () => void;
  i?: number;
};

const Link = ({ link, onClose }: PropsType) => {
  return (
    <NavLink
      className="lg:px-4 lg:font-thin lg:hover:text-white flex gap-4 hover:bg-gray-300 rounded-xl transition-all"
      key={link.linkName}
      to={link.linkUrl}
      onClick={() => onClose()}
    >
      <p className="lg:flex hidden">{link.linkName}</p>
      {/* 手機版 */}

      <div className="lg:hidden h-12 aspect-square bg-gray-200 flex justify-center items-center rounded-xl ">
        <img className="w-[70%] aspect-square" src={link.linkImage} alt={link.linkName} />
      </div>
      <div className="lg:hidden flex flex-col text-sm">
        <p className=" font-bold">{link.linkName}</p>
        <p className=" font-light text-gray-500">{link.linkdescription}</p>
      </div>
    </NavLink>
  );
};

export default Link;
