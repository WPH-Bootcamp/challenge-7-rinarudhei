import React from "react";

const Awards: React.FC = () => {
  const awards = [
    { id: 1, count: "50+", description: "Projects Delivered" },
    { id: 2, count: "5+", description: "Years Of Experience" },
    { id: 3, count: "10+", description: "Industry Awards Won" },
    { id: 4, count: "100%", description: "Client Satisfaction Rate" },
  ];
  return (
    <section className="flex flex-col gap-6 py-20 px-4 xl:px-[140px] xl:gap-16">
      <header className="flex flex-col gap-[11px]">
        <h2 className="h-[76px] md:h-fit xl:h-[56px] xl:text-[40px] xl:leading-[56px] font-bold text-3xl tracking-tight text-center text-[#0a0d12] dark:text-[#fdfdfd]">
          End-to-End IT Solutions That Drive Results
        </h2>
        <p className=" xl:text-lg xl:leading-8 text-sm leading-7 font-medium text-[#717680] dark:text-[#a4a7ae] text-center">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </header>
      <div className="flex h-fit gap-4 flex-wrap">
        {awards.map((award) => (
          <div
            key={award.id}
            className="flex flex-col w-[172.5px] h-[172.5px] md:w-[162.5px] md:h-[162.5px] xl:w-[275px] xl:h-[275px] border border-[#dedcdc] dark:border-[#181d27] rounded-full bg-[#fafafa] dark:bg-[#0a0d12] gap-[6px] p-4 justify-center items-center"
          >
            <div className="w-[140.5px] h-11 xl:w-[243px] xl:h-[60px] font-bold text-[36px] md:text-3xl leading-11 xl:text-[48px] xl:leading-[60px] tracking-tight text-center text-[#ff623e]">
              {award.count}
            </div>
            <p className="w-[140.5px] h-7 xl:w-[243px] xl:h-[34px] font-semibold text-sm leading-7  xl:text-xl xl:leading-[34px] text-center text-[#0a0d12] dark:text-[#fdfdfd]">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
