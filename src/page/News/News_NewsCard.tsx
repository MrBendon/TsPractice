import { type dataType } from "./News_SectionTwo";
type PropsType = {
  news: dataType;
  isrender: boolean;
};

const News_NewsCard = ({ isrender, news }: PropsType) => {
  return (
    <div
      className={`${isrender ? "" : "hidden"} bg-gradient-to-b from-white to-gray-400 p-[1px] rounded-2xl `}
    >
      <div className="bg-black h-full flex rounded-2xl flex-col justify-between gap-8">
        <div className="w-full rounded-2xl overflow-hidden">
          <img className="w-full " src={news.img} alt={news.title} />
        </div>
        <h3 className="p-4 text-white text-3xl">{news.title}</h3>
        <a className=" underline underline-offset-8 p-8 text-white" href={news.url}>
          Read more &ensp; &#x2197;
        </a>
      </div>
    </div>
  );
};

export default News_NewsCard;
