import React, { useState } from "react";

type Sector = {
  id: number;
  sectorName: "Fintech" | "E-commerce" | "Healthcare";
  text: string;
  img: string;
};
const sectors: Sector[] = [
  {
    id: 1,
    sectorName: "Fintech",
    text: "We build secure, scalable, and compliant fintech solutions - from digital wallets to core banking systems - tailored to modern financial needs.",
    img: "./industry-fintech.png",
  },
  {
    id: 2,
    sectorName: "E-commerce",
    text: "Build your online sales with fase, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    img: "./industry-ecommerce.png",
  },
  {
    id: 3,
    sectorName: "Healthcare",
    text: "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    img: "./industry-healthcare.png",
  },
];

const Industries: React.FC = () => {
  const [activeSector, setActiveSector] = useState(sectors[0]);

  function onClick(id: number) {
    const selectedSector = sectors.find((sector) => sector.id === id);
    setActiveSector(selectedSector as Sector);
  }

  return (
    <section className="flex flex-col py-10 px-4 gap-6 xl:py-20 xl:px-[140px] xl:gap-16">
      <header className="flex flex-col gap-[11px] h-fit">
        <h2 className="w-[361px] md:w-full h-[42px] xl:w-[1160px] xl:h-14 font-bold text-[32px] leading-[42px] xl:text-[40px] xl:leading-[56px] tracking-tight text-[#0a0d12] dark:text-[#fdfdfd]">
          Built for Your Industry
        </h2>
        <p className="w-[361px] h-[56px] xl:w-[1160px] xl:h-8 font-medium text-sm xl:text-lg xl:leading-8 leading-7 text-[#717680] dark:text-[#a4a7ae]">
          We've helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </header>
      <div className="flex flex-col md:flex-row h-fit gap-6 xl:gap-16 md:justify-between">
        {/* <!-- INDUSTRY LIST --> */}
        <ul className="flex flex-col gap-3 md:gap-6">
          {sectors.map((sector) => (
            <li key={sector.id} onClick={() => onClick(sector.id)}>
              <div className="flex gap-[6px] md:gap-2 justify-start">
                <div
                  className={`w-1 h-6 md:h-8 rounded-[100px] ${sector.sectorName === activeSector.sectorName ? "bg-[#ff623e]" : "bg-[#aaaaaa] dark:bg-[#535862]"}`}
                ></div>
                <h4
                  className={`h-[30px] md:h-[34px] md:w-[100px] xl:w-full font-bold text-center md:text-start text-base leading-[30px] xl:text-xl xl:leading-[34px] ${sector.sectorName === activeSector.sectorName ? "text-[#0a0d12] dark:text-[#fdfdfd]" : "text-[#aaaaaa] dark:text-[#535862]"} tracking-tight`}
                >
                  {sector.sectorName}
                </h4>
              </div>
            </li>
          ))}
        </ul>

        {/* <!-- INDUSTRY DETAIL - FINTECH --> */}
        <div className="flex flex-col gap-5">
          <p className="h-[84px] xl:h-16 xl:w-[840px] font-medium text-sm md:text-lg md:leading-8 text-[#0a0d12] dark:text-[#fdfdfd] leading-7">
            {activeSector.text}
          </p>
          <div className="relative rounded-xl md:rounded-3xl overflow-hidden w-[361px] h-[222px] md:h-[300px] md:w-[580px] xl:w-[840px] xl:h-[351px]">
            <img
              className="object-cover object-[50%_60%] w-full h-full scale-120 md:scale-100 md:object-[50%_55%]"
              src={activeSector.img}
              alt={`${activeSector.sectorName} image`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
