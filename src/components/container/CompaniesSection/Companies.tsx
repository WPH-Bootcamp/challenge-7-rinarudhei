import React from "react";

const Companies: React.FC = () => {
  const companies = [
    { id: 4, name: "adobe" },
    { id: 5, name: "upwork" },
    { id: 6, name: "zoom" },
    { id: 7, name: "postman" },
    { id: 8, name: "databricks" },
    { id: 9, name: "airbnb" },
    { id: 10, name: "dropbox" },
    { id: 11, name: "paypal" },
    { id: 12, name: "netflix" },
    { id: 13, name: "adobe" },
  ];
  return (
    <section className="flex flex-col w-[393px] md:w-3xl xl:w-[1440px] h-[144px] xl:h-[236px] relative">
      <h3 className="h-[30px] xl:h-9 md:text-[24px] md:leading-[36px] leading-[30px] font-bold text-base tracking-tight text-center text-[#0a0d12] dark:text-[#fdfdfd]">
        Trusted by Global Innovators & Leading Brands
      </h3>
      <div className="z-48 absolute left-0  bottom-0 w-[45.55px] md:w-[120px]  xl:w-[260px] h-4/5 xl:h-[200px] bg-gradient-to-r from-white dark:from-black from-50% to-white/0 dark:to-black/0"></div>
      <div className="z-48 absolute right-0  bottom-0  w-[45.55px] md:w-[120px] xl:w-[260px] h-4/5 xl:h-[200px] bg-gradient-to-l from-white dark:from-black from-50% to-white/0 dark:to-black/0"></div>
      <div className="h-32 xl:h-[200px] overflow-x-scroll no-scrollbar flex justify-center items-center relative">
        <div className="flex gap-12 py-10 items-center justify-center absolute xl:top-9 left-[492px] md:left-[754px] xl:left-[640px]">
          {companies.map((company) => (
            <img
              key={company.id}
              className="mix-blend-luminosity h-[34px] md:h-12"
              src={`./company-logo-${company.name}.svg`}
              alt={`company-logo ${company.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
