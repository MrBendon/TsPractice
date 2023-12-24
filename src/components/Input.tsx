import { type ComponentPropsWithoutRef } from "react";
import { FieldValues, UseFormRegister, useFormContext } from "react-hook-form";

type PropsType = {
  labelName: string;
  inputType: string;
  register?: UseFormRegister<FieldValues>;
  required?: boolean;
  hasError?: boolean;
} & ComponentPropsWithoutRef<"input">;

const Input = ({ labelName, inputType = "text", required, hasError, ...Props }: PropsType) => {
  const { register } = useFormContext();
  return (
    <label htmlFor={labelName} className="relative flex flex-col gap-1">
      {labelName}
      <div className=" relative">
        <input
          {...Props}
          type={inputType}
          {...register(labelName, { required: required })}
          className={`w-[95%] rounded-none bg-transparent py-2 border-b  text-md transition-all duration-500 focus:border-blue-500 outline-none text-gray-200 font-thin placeholder-gray-600 ${
            hasError ? "border-red-700" : "border-white"
          }`}
        />

        {required && <div className=" absolute top-1 right-1"> *</div>}
      </div>
    </label>
  );
};

export default Input;
