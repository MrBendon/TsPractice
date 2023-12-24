import { CategoryType } from "../page/Home/Footer";
import FooterLink from "./FooterLink";

type PropsType = {
  data: CategoryType;
};

const FooterLinkCard = ({ data }: PropsType) => {
  return (
    <div className="text-white flex flex-col gap-8 odd:last-of-type:col-span-2">
      <p className="text-md text-transparent bg-clip-text bg-gradient-to-r from-[#29ADB2] to-blue-600">
        {data.categoryName}
      </p>
      <div className="flex min-w-[8rem] flex-col gap-2 max-w-full md:max-w-[20rem]">
        {data.categorylink.map((link) => (
          <FooterLink key={link.linkName} linkdata={link} />
        ))}
      </div>
    </div>
  );
};

export default FooterLinkCard;
