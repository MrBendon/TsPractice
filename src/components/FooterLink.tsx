import { FooterlinkType } from "../page/Home/Footer";

type PropsType = {
  linkdata: FooterlinkType;
};

const FooterLink = ({ linkdata }: PropsType) => {
  return (
    <a className="text-gray-500 text-sm" href={linkdata.linkUrl}>
      {linkdata.linkName}
    </a>
  );
};

export default FooterLink;
