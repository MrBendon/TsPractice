import { useFormContext } from "react-hook-form";

type PropsType = {
  option: string;
};

const HelpOption = ({ option }: PropsType) => {
  const { register } = useFormContext();
  return (
    <label className="">
      <input type="checkbox" className="peer hidden" value={option} {...register("HelpOption")} />
      <span className=" px-4 py-2 border border-white rounded-full w-max cursor-pointer hover:bg-slate-400 transition-all peer-checked:bg-gradient-to-r font-thin peer-checked:from-blue-500 peer-checked:to-blue-700 peer-checked:border-blue-300 peer-checked:shadow-blue-300 peer-checked:shadow-2xl">
        {option}
      </span>
    </label>
  );
};

export default HelpOption;
