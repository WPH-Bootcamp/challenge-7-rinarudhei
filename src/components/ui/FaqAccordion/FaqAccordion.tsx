import React, { useState } from "react";

type FaqAccordion = {
  question: string;
  answer: string;
  id: number;
};

const FaqAccordion: React.FC<FaqAccordion> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  function onClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h3 className="font-bold text-lg xl:text-2xl xl:leading-9 xl:text-center leading-8 text-[#0a0d12] dark:text-[#fdfdfd]">
          {question}
        </h3>
        {isOpen ? (
          <svg
            onClick={onClick}
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="open faq answer"
          >
            <path
              d="M5 12H19"
              className="stroke-[#0a0d12] dark:stroke-[#fdfdfd]"
              stroke="#0A0D12"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            onClick={onClick}
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="close faq answer"
          >
            <path
              d="M12 5V19M5 12H19"
              className="stroke-[#0a0d12] dark:stroke-[#fdfdfd]"
              stroke="#0A0D12"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </header>
      <p
        className={`${!isOpen && "hidden"} h-14 md:h-[24px] xl:h-[34px] font-medium text-sm xl:text-xl xl:leading-[34px] leading-7 text-[#717680] dark:text-[#a4a7ae]`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqAccordion;
