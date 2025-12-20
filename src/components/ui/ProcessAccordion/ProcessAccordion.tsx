import React, { useState } from "react";

type ProcessAccordion = {
  id: number;
  title: string;
  text: string;
};

const ProcessAccordion: React.FC<ProcessAccordion> = ({ id, title, text }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleShowText = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`flex ${id % 2 === 1 && "md:flex-row-reverse"} md:justify-end h-[94px] xl:h-[116px] gap-3 xl:gap-6 items-center`}
    >
      {/* <!-- CIRCLE NUMBER --> */}
      <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-[83.33px] xl:rounded-[100px] p-[6.67px] xl:p-2 gap-[6.67px] xl:gap-2 bg-[#ff623e]">
        <div className="flex justify-center items-center h-full">
          <p className="text-xs xl:text-base font-bold text-center text-white">
            {id}
          </p>
        </div>
      </div>

      {/* <!-- TEXT BOX --> */}
      <div className="w-[309px] md:w-[336px] xl:w-[532px]  rounded-2xl border flex flex-row justify-between p-4 xl:p-6 bg-[#fafafa] dark:bg-[#0a0d12] border-[#dedcdc] dark:border-[#181d27]">
        <div className="flex flex-col h-fit gap-1">
          <h3 className="text-base leading-[30px] xl:text-xl xl:leading-[34px] font-bold tracking-tight text-[#0a0d12] dark:text-[#fdfdfd]">
            {title}
          </h3>
          {isOpen && (
            <p className="font-medium text-sm leading-7 xl:text-base xl:leading-[30px] text-[#717680] dark:text-[#a4a7ae]">
              {text}
            </p>
          )}
        </div>
        {isOpen ? (
          <svg
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleShowText}
          >
            <path
              d="M18 15L12 9L6 15"
              className="stroke-[#0a0d12] dark:stroke-[#fdfdfd]"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleShowText}
          >
            <path
              d="M6 9L12 15L18 9"
              className="stroke-[#0a0d12] dark:stroke-[#fdfdfd]"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ProcessAccordion;
