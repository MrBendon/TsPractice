type PropsType = {
  text: string;
};

const P_CasePoints = ({ text }: PropsType) => {
  return (
    <div className="px-4 py-1 bg-transparent border border-gray-500 text-gray-500 group-hover:border-white group-hover:text-white w-max rounded-2xl transition-all font-light text-sm">
      {text}
    </div>
  );
};

export default P_CasePoints;
