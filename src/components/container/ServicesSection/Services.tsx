import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: "/web-dev-icon.svg",
      title: "Web Development",
      text: "Build fast, scalable, and SEO-friendly websites.",
    },
    {
      id: 2,
      icon: "/mobile-app-icon.svg",
      title: "Mobile App Development",
      text: "Native & cross-platform apps tailored to user needs.",
    },
    {
      id: 3,
      icon: "/uiux-design-icon.svg",
      title: "UI/UX Design",
      text: "Delight users with intuitive and beautiful interfaces.",
    },
    {
      id: 4,
      icon: "/cloud-solution-icon.svg",
      title: "Cloud Solutions",
      text: "Secure and flexible cloud infrastructure for your growth.",
    },
    {
      id: 5,
      icon: "/software-dev-icon.svg",
      title: "Software Development ",
      text: "Custom solutions built around your business logic.",
    },
    {
      id: 6,
      icon: "/it-infrastructure-icon.svg",
      title: "IT Infrastructure",
      text: "Scale your backend with reliable tech foundations.",
    },
    {
      id: 7,
      icon: "/security-icon.svg",
      title: "Cybersecurity Services",
      text: "Stay protected with enterprise-grade security.",
    },
    {
      id: 8,
      icon: "/aq-solutions-icon.svg",
      title: "QA Solutions",
      text: "Ensure performance with rigorous testing frameworks.",
    },
    {
      id: 9,
      icon: "/it-consulting-icon.svg",
      title: "IT Consulting & Support",
      text: "Make smarter tech decisions with expert guidance.",
    },
  ];
  return (
    <section
      id="services"
      className="flex flex-col py-10 px-4 gap-10 md:py-20 md:px-[140px] md:gap-16"
    >
      <header className="flex flex-col gap-[11px] h-fit">
        <h2 className="w-[361px] md:w-full xl:w-[1160px] h-[76px] xl:h-14 font-semibold xl:font-bold text-[28px] leading-[38px] xl:text-[40px] xl:leading-[56px] text-center text-[#0a0d12] dark:text-[#fdfdfd]">
          Smart IT Solutions That Grow With You
        </h2>
        <p className="text-sm xl:text-lg leading-7 xl:leading-8 text-center w-[361px] xl:w-[1160px] h-7 xl:h-8 font-medium text-[#717680] dark:text-[#a4a7ae]">
          Tailored each to boost efficiency, security, and results.
        </p>
      </header>
      <div className="flex flex-col xl:grid gap-10 xl:grid-rows-3 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="hover:bg-linear-120 hover:from-[#ff6c37]/50 hover:via-[#ff6c37]/10 bg-[#dedcdc] dark:bg-[#181d27] rounded-2xl flex py-[1px] px-[1px] justify-center items-center"
          >
            <div className="relative bg-[#fafafa] dark:bg-[#0a0d12] pt-12 xl:pt-16 pb-5 px-5 rounded-2xl flex flex-col gap-5 w-full h-full">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-base leading-[30px] xl:text-xl xl:leading-[34px] tracking-tight text-[#0a0d12] dark:text-[#fdfdfd]">
                  {service.title}
                </h3>
                <p className="font-medium text-sm leading-7 xl:text-base xl:leading-[30px] text-[#717680] dark:text-[#a4a7ae]">
                  {service.text}
                </p>
              </div>
              <img
                className="absolute -top-[21px] left-5 w-16 h-16 xl:w-20 xl:h-20 xl:-top-[26px]"
                src={service.icon}
                alt={`${service.title} icon`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
