import React from "react";

const Portofolio: React.FC = () => {
  const portofolios = [
    {
      id: 1,
      category: "Landing Page",
      title: "Portofolio 1",
      img: "/Portofolio 1.svg",
      alt: "Portofolio 1 Image",
    },
    {
      id: 2,
      category: "Landing Page",
      title: "Portofolio 2",
      img: "/Portofolio 2.svg",
      alt: "Portofolio 2 Image",
    },
    {
      id: 3,
      category: "Landing Page",
      title: "Portofolio 3",
      img: "/Portofolio 3.svg",
      alt: "Portofolio 3 Image",
    },
  ];
  return (
    <section
      id="projects"
      className="flex flex-col py-10 xl:py-20 px-4 xl:px-[140px] gap-6 xl:gap-16"
    >
      <header className="flex flex-col gap-[11px]">
        <h2 className="w-[361px] md:w-full xl:w-[1160px] h-[76px] md:h-fit xl:h-[56px] font-bold text-[28px] leading-[38px] xl:text-[40px] xl:leading-[56px] tracking-tight text-center text-[#0a0d12] dark:text-[#fdfdfd]">
          From Vision to Launch! Projects We're Proud Of
        </h2>
        <p className="w-[361px] md:w-full xl:w-[1160px] h-[56px] xl:h-8 font-medium text-sm leading-7 xl:text-sm xl:leading-8 text-center text-[#717680] dark:text-[#a4a7ae]">
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </header>
      <div className="flex flex-col xl:flex-row gap-5 w-[361px] xl:w-[1159px] md:mx-auto">
        {portofolios.map((portofolio) => (
          <div key={portofolio.id} className="flex flex-col gap-2 xl:gap-3">
            <img
              className="w-[361px] xl:w-[373px] h-[361px] xl:h-[373px] rounded-2xl"
              src={portofolio.img}
              alt={portofolio.alt}
            />
            <div className="flex flex-col">
              <div className="h-7 xl:h-[30px] font-medium text-sm leading-7 xl:text-base xl:leading-[30px] text-[#ff623e]">
                {portofolio.category}
              </div>
              <div className="h-[30px] xl:h-[34px] font-bold text-base leading-[30px] xl:text-xl xl:leading-[34px] tracking-tight text-[#0a0d12] dark:text-[#fdfdfd]">
                {portofolio.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portofolio;
