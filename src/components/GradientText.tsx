type PropsType = {
  text: string;
};
const GradientText = ({ text }: PropsType) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#34d6dc] to-blue-600">{text}</span>
  );
};

export default GradientText;
