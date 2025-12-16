import React from "react";
import ProcessAccordion from "../../ui/MenuButton/ProcessAccordion";

const Process: React.FC = () => {
  const accordions = [
    {
      id: 1,
      title: "Discovery & Consultation",
      text: "Understand Your Needs & Goals",
    },
    {
      id: 2,
      title: "Planning & Strategy",
      text: "Build a Clear, Scalable Roadmap",
    },
    {
      id: 3,
      title: "Design & Prototyping",
      text: "Craft UX That Converts",
    },
    {
      id: 4,
      title: "Development & Implementation",
      text: "Deliver With Speed & Precision",
    },
    {
      id: 5,
      title: "Testing & Optimization",
      text: "Ensure Quality at Every Step",
    },
    {
      id: 6,
      title: "Launch & Growth",
      text: "Scale, Measure & Improve Continuously",
    },
  ];

  return (
    <section className="flex flex-col h-fit py-10 px-4 gap-6 xl:py-20 xl:px-[140px] xl:gap-16">
      <header className="flex flex-col gap-[11px]">
        <h2 className="w-[361px] h-[38px] font-bold text-[28px] leading-[38px] tracking-tight text-center text-[#0a0d12] dark:text-[#fdfdfd] md:w-full xl:w-[1160px] xl:h-[56px] xl:text-[40px] xl:leading-[56px]">
          Our Process
        </h2>
        <p className="w-[361px] h-[56px] font-medium text-sm leading-7 text-center text-[#717680] dark:text-[#a4a7ae] md:w-full xl:w-[1160px] xl:h-[32px] xl:font-medium xl:text-lg xl:leading-8">
          Clear steps. Smart executions. Results you can count on.
        </p>
      </header>

      <div className="flex flex-col h-fit gap-4 relative">
        {/* <!-- STEP LINE --> */}

        <div className="h-[590px] xl:h-[703px] border border-[#dfdfdf] absolute left-5 md:left-[366px] xl:left-[580px] top-[27px] xl:top-[34px] -z-50 dark:border-[#252b37]"></div>
        {accordions.map((accordion) => (
          <ProcessAccordion
            key={accordion.id}
            id={accordion.id}
            title={accordion.title}
            text={accordion.text}
          ></ProcessAccordion>
        ))}
      </div>
    </section>
  );
};

export default Process;
