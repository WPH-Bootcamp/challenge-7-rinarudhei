import React from "react";
import FaqAccordion from "../../ui/FaqAccordion";

type FaqType = {
  id: number;
  question: string;
  answer: string;
};
const Faq: React.FC = () => {
  const faqs: FaqType[] = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
    },
    {
      id: 2,
      question: "How do I know if this is right for my business?",
      answer:
        "Book a free consult - we'll assess your goals and recommend the right approach.",
    },
    {
      id: 3,
      question: "How much does a project cost?",
      answer:
        "Every project is different. Let's talk about your needs to get a tailored estimate.",
    },
    {
      id: 4,
      question: "How long does it take?",
      answer:
        "Depends on scope - but we always prioritize quality and dealines.",
    },
    {
      id: 5,
      question: "Can I start with a small project first? ",
      answer: "Absolutely. We often begin with MVPs or pilot projects.",
    },
  ];
  return (
    <section className="flex flex-col py-10 px-4 gap-6 md:py-16 xl:py-20 md:px-28 xl:px-[140px] md:gap-8 xl:gap-12">
      <header className="flex flex-col md:flex-row  xl:w-[1200px] gap-4 md:justify-between md:items-center overflow-visible">
        <h2 className="w-[331px] h-[38px] md:h-fit font-bold text-[28px] md:text-[32px] leading-[38px] xl:text-[40px] md:leading-[56px] tracking-tight text-[#0a0d12] dark:text-[#fdfdfd] text-wrap">
          Need Help? Start Here
        </h2>
        <p className="md:w-[245px] md:h-8 text-sm md:text-lg text-start leading-7 md:leading-8 md:text-right font-medium text-[#717680] dark:text-[#a4a7ae]">
          Everything you need to know &mdash; all in one place.
        </p>
      </header>

      <div className="w-[361px] md:w-[544px] xl:w-[1200px] h-0 border border-[#dfdfdf] dark:border-[#252b37]"></div>

      <div className="flex flex-col xl:flex-row gap-6 md:gap-[73px]">
        <div className="flex flex-col gap-7">
          {faqs.map((faq) => (
            <>
              <FaqAccordion
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
              ></FaqAccordion>
              <div className="w-[361px] md:w-[544px] xl:w-[798px] h-0 border border-[#dfdfdf] dark:border-[#252b37]"></div>
            </>
          ))}
        </div>

        <div className="flex flex-col rounded-2xl md:[483px]  xl:h-[453px] md:rounded-3xl p-5 md:p-[6] gap-4 md:gap-6 bg-[#cc4e32]">
          <div className="flex flex-col gap-1">
            <h2 className="w-[321px] md:w-full xl:w-[281px] xl:h-[88px] h-[38px] font-bold text-[28px] leading-[38px] md:text-[36px] md:leading-[44px] tracking-tight text-white">
              Let's talk it through
            </h2>
            <p className="w-[321px] md:w-full xl:w-[281px] xl:h-16 h-[38px] font-semibold text-sm md:text-lg md:leading-8 leading-7 text-white">
              book a free consultation with our team.
            </p>
          </div>
          <div className="w-[321px] md:w-full xl:w-[281px] h-[175.21px] md:h-full xl:h-[153.38px] rounded-2xl overflow-clip">
            <img
              className="object-cover object-center"
              src="./consultant-meeting.png"
              alt="consultant team meeting image"
            />
          </div>
          <button
            aria-label="Consultation button"
            className="h-11 md:h-12 rounded-full p-2 gap-1 bg-black shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)_inset] dark:bg-white dark:shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)_inset]"
          >
            <div className="h-[30px] font-bold text-base leading-[30px] tracking-tight text-white dark:text-black">
              Free Consultation
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
