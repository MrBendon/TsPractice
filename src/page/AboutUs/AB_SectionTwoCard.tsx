import Button from "../../components/Button";
import { dataType } from "./AB_SectionTwo";
import { motion } from "framer-motion";

type PropsType = { data: dataType };

const orderTypeConvert = {
  imgdown: "flex-col",
  imgleft: "flex-row-reverse",
  imgright: "flex-row",
  imgup: "flex-col-reverse",
};

const AB_SectionTwoCard = ({ data }: PropsType) => {
  const orderType: string = data.ordertype ? orderTypeConvert[data.ordertype] : "";
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex md:${orderType} ${
        orderType === "flex-col-reverse" ? "flex-col-reverse" : "flex-col"
      } gap-8`}
    >
      <div className={`flex md:w-[60%] w-full flex-col gap-8`}>
        <h2 className="lg:text-6xl text-5xl">
          {data.title.split(" ").slice(0, -1).join(" ")}
          <span
            className={`${
              data.needhighlight
                ? "text-transparent bg-clip-text bg-gradient-to-r  from-[#29ADB2] to-blue-600"
                : "hidden"
            }  `}
          >
            &ensp;{data.title.split(" ").pop()}
          </span>
        </h2>
        <p className="text-sm">
          The partnership behind Phunk began a long time before the company was officially established. Our
          founders Joe Murray and Joe Crabtree first met at college, both studying creative and digital media
          courses —never imagining that sharing a first name would make their copywriter’s job unnecessarily
          difficult at some point in the future.
        </p>
        {data.buttonInImg || <Button buttonContent={data.buttontext} />}
      </div>
      <div className={`${orderType.startsWith("flex-col") ? "" : "md:w-[50%] w-full"} relative`}>
        {data.buttonInImg && (
          <div className=" absolute right-6 bottom-6">
            <Button styledtype="whitedark" buttonContent={data.buttontext} />{" "}
          </div>
        )}
        <img
          className="w-full object-cover min-h-[16rem] max-h-[24rem] rounded-3xl"
          src={data.Img}
          alt={data.title}
        />
      </div>
    </motion.div>
  );
};

export default AB_SectionTwoCard;
