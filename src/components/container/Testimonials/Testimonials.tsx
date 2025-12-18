import React, { useState } from "react";

type Testimony = {
  id: number;
  name: string;
  title: string;
  message: string;
  img: string;
  alt: string;
};

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<
    [Testimony, Testimony, Testimony]
  >([
    {
      id: 1,
      name: "John Lee",
      title: "Director at Innovate Corp",
      message: `“Working with this team was a game-changer for our project. They
                understood our vision and turned it into reality efficiently and
                effectively.”`,
      img: "/john-lee.png",
      alt: "John Lee profile picture",
    },
    {
      id: 2,
      name: "Sarah Tan",
      title: "Product Manager at Finovate",
      message: `“The team delivered exactly what we needed &mdash; on time and
                 with outstanding quality. Their attention to detail and
                 communication were top-notch.”`,
      img: "/sarah-tan.png",
      alt: "Sarah Tan profile picture",
    },
    {
      id: 3,
      name: "Emily Chen",
      title: "Marketing Head at Tech Solutions",
      message: `“The collaboration was seamless, and the results surpassed our
                expectations. Their expertise transformed our ideas into a
                successful product.”`,
      img: "/emily-chen.png",
      alt: "Emily Chen profile picture",
    },
  ]);

  function handleOnClick() {
    setTestimonials([testimonials[2], testimonials[0], testimonials[1]]);
  }

  return (
    <section
      id="testimonials"
      className="xl:relative flex flex-col py-10 gap-12 xl:py-20 xl:gap-20 xl:w-[1440px] xl:h-full"
    >
      <header className="flex flex-col gap-[11px]">
        <h2 className="h-[76px] xl:h-[56px] text-[28px] leading-[38px] xl:text-[40px] xl:leading-[56px] font-bold tracking-tight text-center text-[#0a0d12] dark:text-[#fdfdfd]">
          What Partners Say About Working With Us
        </h2>
        <p className="h-7 xl:h-8 font-medium text-sm xl:text-lg xl:leading-[32px] leading-7 text-center text-[#717680] dark:text-[#a4a7ae]">
          Trusted voices. Real Experiences. Proven results.
        </p>
      </header>
      <div className="xl:relative xl:w-[1440px] xl:h-full mx-auto xl:overflow-hidden xl:pt-[25px] xl:pb-[45px]">
        <div className="hidden xl:flex xl:w-[1440px] justify-between absolute -top-12">
          <div className="w-[422.05px] h-[450px] bg-gradient-to-r from-white dark:from-black to-white/0 dark:to-black/0 z-50"></div>
          <div className="w-[422.05px] h-[450px] bg-gradient-to-l from-white dark:from-black to-white/0 dark:to-black/0 z-50"></div>
        </div>
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-5 justify-center relative">
          <div className="hidden xl:flex xl:flex-col w-[361px] xl:w-[594px] xl:h-[292px] mx-auto rounded-2xl border pt-4 xl:pt-6 pb-12 px-4 xl:px-6 gap-4 xl:gap-6 border-[#dedcdc] dark:border-[#181d27] bg-[#fafafa] dark:bg-[#0a0d12] relative">
            <div className="flex flex-col gap-3 items-center relative">
              <div className="flex gap-1">
                <img
                  className="w-6 h-6"
                  src="./line-md_star-filled.svg"
                  alt="yellow star icon"
                />
                <img
                  className="w-6 h-6"
                  src="./line-md_star-filled.svg"
                  alt="yellow star icon"
                />
                <img
                  className="w-6 h-6"
                  src="./line-md_star-filled.svg"
                  alt="yellow star icon"
                />
                <img
                  className="w-6 h-6"
                  src="./line-md_star-filled.svg"
                  alt="yellow star icon"
                />
                <img
                  className="w-6 h-6"
                  src="./line-md_star-filled.svg"
                  alt="yellow star icon"
                />
              </div>
              <p className="w-[329px] xl:w-[546px] h-28 xl:h-24 font-semibold text-sm leading-7 xl:text-lg xl:leading-8 text-center text-[#0a0d12] dark:text-[#fdfdfd]">
                {testimonials[0].message}
              </p>
              <img
                className="w-16 h-16 xl:w-20 xl:h-20 absolute -top-12 xl:-top-[68px] left-0 xl:left-[8.33px]"
                src="./tdesign_quote-filled.svg"
                alt="salmon-colored double quote icon"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="h-7 xl:h-8 font-semibold text-sm leading-7 xl:text-lg xl:leading-8 text-center text-[#0a0d12] dark:text-[#fdfdfd]">
                {testimonials[0].name}
              </h4>
              <p className="text-[#ff623e] text-center font-semibold">
                {testimonials[0].title}
              </p>
            </div>
            <div className="h-15 xl:h-[75px] w-15 xl:w-[75px] overflow-clip rounded-full absolute -bottom-[30px] xl:-bottom-[45px] left-[150.5px] xl:left-[264.5px]">
              <img
                className="object-cover object-center"
                src={testimonials[0].img}
                alt={testimonials[0].alt}
              />
            </div>
          </div>

          <div className="hover:bg-linear-to-br hover:from-[#ff6c37]/50 hover:via-[#dedcdc%] hover:to-[#dedcdc] dark:hover:via-[#181d27_30%] dark:hover:to-[#181d27] bg-[#dedcdc] dark:bg-[#181d27] rounded-2xl flex py-[1px] px-[1px] justify-center items-center w-fit mx-auto">
            <div
              onClick={handleOnClick}
              className="cursor-pointer flex flex-col w-[361px] xl:w-[594px] xl:h-[292px] mx-auto rounded-2xl border-[1px] pt-4 xl:pt-6 pb-12 px-4 xl:px-6 gap-4 xl:gap-6 border-[#fafafa] dark:border-[#181d27] bg-[#fafafa] dark:bg-[#0a0d12] relative "
            >
              <div className="flex flex-col gap-3 items-center relative">
                <div className="flex gap-1">
                  <img
                    className="w-6 h-6"
                    src="./line-md_star-filled.svg"
                    alt="yellow star icon"
                  />
                  <img
                    className="w-6 h-6"
                    src="./line-md_star-filled.svg"
                    alt="yellow star icon"
                  />
                  <img
                    className="w-6 h-6"
                    src="./line-md_star-filled.svg"
                    alt="yellow star icon"
                  />
                  <img
                    className="w-6 h-6"
                    src="./line-md_star-filled.svg"
                    alt="yellow star icon"
                  />
                  <img
                    className="w-6 h-6"
                    src="./line-md_star-filled.svg"
                    alt="yellow star icon"
                  />
                </div>
                <p className="w-[329px] xl:w-[546px] h-28 xl:h-24 font-semibold text-sm leading-7 xl:text-lg xl:leading-8 text-center text-[#0a0d12] dark:text-[#fdfdfd]">
                  {testimonials[1].message}
                </p>
                <img
                  className="w-16 h-16 xl:w-20 xl:h-20 absolute -top-12 xl:-top-[68px] left-0 xl:left-[8.33px]"
                  src="./tdesign_quote-filled.svg"
                  alt="salmon-colored double quote icon"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="h-7 xl:h-8 font-semibold text-sm leading-7 xl:text-lg xl:leading-8 text-center text-[#0a0d12] dark:text-[#fdfdfd]">
                  {testimonials[1].name}
                </h4>
                <p className="text-[#ff623e] text-center font-semibold">
                  {testimonials[1].title}
                </p>
              </div>
              <div className="h-15 xl:h-[75px] w-15 xl:w-[75px] overflow-clip rounded-full absolute -bottom-[30px] xl:-bottom-[45px] left-[150.5px] xl:left-[264.5px]">
                <img
                  className="object-cover object-center"
                  src={testimonials[1].img}
                  alt={testimonials[1].alt}
                />
              </div>
            </div>
          </div>

          <div className="hidden xl:flex xl:flex-col w-[361px] xl:w-[594px] xl:h-[292px] mx-auto rounded-2xl border pt-4 xl:pt-6 pb-12 px-4 xl:px-6 gap-4 xl:gap-6 border-[#dedcdc] dark:border-[#181d27] bg-[#fafafa] dark:bg-[#0a0d12] relative">
            <div className="flex flex-col gap-3 items-center relative">
              <div className="flex gap-1">
                <img
                  className="w-6 h-6"
                  src="./line-md_star-filled.svg"
                  alt="yellow star icon"
                />
                <img
                  className="w-6 h-6"
                  src="./line-md_star-filled.svg"
                  alt="yellow star icon"
                />
                <img
                  className="w-6 h-6"
                  src="./line-md_star-filled.svg"
                  alt="yellow star icon"
                />
                <img
                  className="w-6 h-6"
                  src="./line-md_star-filled.svg"
                  alt="yellow star icon"
                />
                <img
                  className="w-6 h-6"
                  src="./line-md_star-filled.svg"
                  alt="yellow star icon"
                />
              </div>
              <p className="w-[329px] xl:w-[546px] h-28 xl:h-24 font-semibold text-sm leading-7 xl:text-lg xl:leading-8 text-center text-[#0a0d12] dark:text-[#fdfdfd]">
                {testimonials[2].message}
              </p>
              <img
                className="w-16 h-16 xl:w-20 xl:h-20 absolute -top-12 xl:-top-[68px] left-0 xl:left-[8.33px]"
                src="./tdesign_quote-filled.svg"
                alt="salmon-colored double quote icon"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="h-7 xl:h-8 font-semibold text-sm leading-7 xl:text-lg xl:leading-8 text-center text-[#0a0d12] dark:text-[#fdfdfd]">
                {testimonials[2].name}
              </h4>
              <p className="text-[#ff623e] text-center font-semibold">
                {testimonials[2].title}
              </p>
            </div>
            <div className="h-15 xl:h-[75px] w-15 xl:w-[75px] overflow-clip rounded-full absolute -bottom-[30px] xl:-bottom-[45px] left-[150.5px] xl:left-[264.5px]">
              <img
                className="object-cover object-center"
                src={testimonials[2].img}
                alt={testimonials[2].alt}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex gap-[6px] -bottom-[22px] right-[178px] md:right-[364px] xl:bottom-[35px] xl:right-[690px]">
        {testimonials.map((testimony, i) => (
          <div
            key={i}
            className={`w-2 h-2 xl:w-3 xl:h-3 rounded-full ${testimony.id === 1 ? "bg-[#ff6c37]" : "bg-[#dedcdc] dark:bg-[#181d27]"} cursor-pointer`}
            onClick={handleOnClick}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
