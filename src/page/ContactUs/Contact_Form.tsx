import { FieldValues, FormProvider, useForm } from "react-hook-form";
import HelpOption from "../../components/HelpOption";
import Input from "../../components/Input";
import { SyntheticEvent, useState } from "react";
import Button from "../../components/Button";

export type FormValueType = {
  "Full Name": string;
  Company: string;
  Email: string;
  Phone: number;
  HelpOption: [];
  budget: string;
  details: string;
};

const messageCategory = [
  { categoryName: "Full Name", categoryType: "text", isRequired: true, placeholder: "Lai" },
  { categoryName: "Company", categoryType: "text", placeholder: "Phunk Studio", isRequired: false },
  {
    categoryName: "Email",
    categoryType: "email",
    isRequired: true,
    placeholder: "name@gmail.com",
  },
  { categoryName: "Phone", categoryType: "number", isRequired: true, placeholder: "+44" },
];

const helpOptions = [
  "UI/UX",
  "Mobile Apps",
  "Graphic Design",
  "Animation",
  "SEO",
  "Webflow Development",
  "Branding",
  "Video",
  "Webtesting",
];

const budgetOption = [
  "£0 - £2,000",
  "£2,000 - £5,000",
  "£5,000 - £10,000",
  "£10.000 - £20,000",
  "£20,000 - £40,000",
  "£40,000 - £70,000",
  "£70,000 - £100,000",
  "£100,000+",
];

const Contact_Form = () => {
  const methods = useForm<FieldValues>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const [isOpenBudgetList, setIsOpenBudgetList] = useState(false);
  const [selectBudget, setSelectBudget] = useState(budgetOption[0]);

  function handleClickBudget(e: SyntheticEvent) {
    console.log(e.currentTarget.textContent);
    const target = e.currentTarget.textContent;
    if (!target) return;
    setSelectBudget(target);
    setIsOpenBudgetList((prev) => !prev);
  }

  function OnSubmit(data: FieldValues): void {
    console.log(data);
  }

  function onError(error: FieldValues): void {
    console.log(error);
  }

  return (
    <div className="lg:w-[75%] w-[95%] mx-auto border boder-white bg-gradient-to-b from-white to-gray-500 rounded-3xl">
      <FormProvider {...methods}>
        <form
          className="bg-black h-full w-full md:p-8 py-8 px-4 rounded-3xl flex flex-col gap-8"
          onSubmit={handleSubmit(OnSubmit, onError)}
        >
          <h3 className="text-3xl font-light">Send a Message</h3>
          <div className="grid grid-cols-2 gap-8 font-thin">
            {messageCategory.map((category, i) => (
              <Input
                labelName={category.categoryName}
                required={category.isRequired}
                placeholder={category.placeholder}
                key={i}
                inputType={category.categoryType}
                register={register}
                hasError={errors[category.categoryName] ? true : false}
              ></Input>
            ))}
          </div>
          {/* 協助項目 */}
          <div>
            <p>What do you need help with?</p>
            <div className=" bg-transparent w-full md:p-4 py-4 outline-none cursor-pointer flex justify-start flex-wrap gap-y-6 md:gap-x-4 gap-x-2  after:flex-1">
              {helpOptions.map((option) => (
                <HelpOption option={option} key={option}></HelpOption>
              ))}
            </div>
          </div>
          {/* 預算 */}
          <div className="flex flex-col gap-4 justify-center items-between">
            <p>What is your estimated budget?</p>
            <div className="flex  ">
              <div className="flex-1 flex flex-col gap-2">
                <div
                  className="w-[90%] mx-auto p-3 text-gray-400 border border-white rounded-full hover:cursor-pointer hover:text-blue-500 text-center"
                  onClick={(e) => handleClickBudget(e)}
                >
                  {selectBudget}
                </div>
                {isOpenBudgetList &&
                  budgetOption.map((option) => (
                    <div
                      className="w-[90%] mx-auto p-3 text-gray-400 border border-gray-500 rounded-full hover:cursor-pointer hover:text-blue-500 text-center"
                      key={option}
                      onClick={(e) => handleClickBudget(e)}
                    >
                      {option}
                    </div>
                  ))}
              </div>
              <div
                className="w-12 h-12 flex justify-center items-center rounded-xl bg-gray-700 cursor-pointer"
                onClick={() => setIsOpenBudgetList((prev) => !prev)}
              >
                {isOpenBudgetList ? "close" : "open"}
              </div>
            </div>
          </div>

          {/* 專案細節 */}
          <div className="flex flex-col gap-4">
            <p>Enter your project details:</p>
            <textarea
              className=" outline-none p-4 border border-gray-500 w-full h-40 rounded-2xl resize-none bg-transparent text-white placeholder:text-gray-400 font-thin"
              id="detail"
              placeholder="Enter some project details..."
              {...register("details")}
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex sm:flex-row flex-col md:gap-4 gap-2">
              <p>hello@phunk.co.uk</p>
              <p>01133 908 188</p>
            </div>
            <Button type="submit" styledtype="whitedark" buttonContent="Send" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Contact_Form;
