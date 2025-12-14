import React from "react";
import Button from "../../ui/Button";

const Hero: React.FC = () => {
  return (
    <>
      <div
        id="hero"
        className="absolute flex flex-col w-[361px]  xl:w-[653px] gap-10 left-4  xl:left-[140px] top-[125px]  xl:top-[230px] z-10 "
      >
        <header className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl  xl:text-[56px] leading-[44px]  xl:leading-[68px] tracking-tight text-[#0a0d12] dark:text-[#fdfdfd] h-[88px]  xl:h-[136px]">
            Your Tech Partner for
            <span className="text-[#ff6c37]"> Smarter Growth</span>
          </h1>
          <p className="font-semibold h-[60px]  xl:h-[68px] text-base  xl:text-xl  xl:leading-[34px] text-[#0a0d12] dark:text-[#fdfdfd]">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
        </header>
        <Button
          className="md:w-[200px] md:h-12"
          aria-label="Let's Talk - Main CTA on hero section"
        >
          <div className="font-bold text-sm leading-7 text-white h-7 md:h-[30px]  md:leading-[30px]">
            Let's Talk
          </div>
        </Button>
      </div>

      <div className="hidden absolute xl:inline dark:hidden top-0 right-0">
        <img
          className="w-[747px] h-[747px]"
          src="/hero-light-big.svg"
          alt="light hero image"
        />
      </div>
      <div className="absolute inline xl:hidden dark:hidden top-[408px]  md:top-[24px] md:right-0 right-[1px]">
        <img
          className="w-[391px] h-[391px]"
          src="/hero-light.svg"
          alt="light hero image"
        />
      </div>
      <div className="hidden absolute xl:dark:inline top-0 right-0">
        <img
          className="w-[747px] h-[747px]"
          src="/hero-dark-big.svg"
          alt="dark hero image"
        />
      </div>
      <div className="hidden absolute dark:inline xl:dark:hidden top-[408px] md:top-[24px] md:right-0 right-[1px]">
        <img
          className="w-[391px]  h-[391px] "
          src="/hero-dark.svg"
          alt="dark hero image"
        />
      </div>
    </>
  );
};

export default Hero;
