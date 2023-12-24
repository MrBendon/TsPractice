type PropsType = {
  text: string;
};

const HighLightText = ({ text = "default text" }: PropsType) => {
  return (
    <div className="text-white font-light p-[1px] bg-gradient-to-r from-[#29ADB2] via-[#448ad5] to-blue-600 w-max rounded-2xl">
      <p className="px-4 bg-black rounded-2xl">{text}</p>
    </div>
  );
};

export default HighLightText;
