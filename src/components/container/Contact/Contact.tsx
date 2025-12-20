import React, { useState } from "react";

type Form = {
  name: string;
  email: string;
  message: string;
  services: string[];
};
const ContactForm = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    message: "",
    services: [],
  });

  const services = [
    {
      id: "service-webdev",
      label: "Web Development",
      value: "web development",
    },
    {
      id: "service-mobile-app",
      label: "Mobile App Development",
      value: "mobile app development",
    },
    { id: "service-uiux", label: "UI/UX Design", value: "uiux design" },
    { id: "service-cloud", label: "Cloud Solutions", value: "cloud solutions" },
    {
      id: "service-software-dev",
      label: "Software Development",
      value: "software development",
    },
    { id: "service-other", label: "Other", value: "other" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          services: [...prev.services, value],
        };
      } else {
        return {
          ...prev,
          services: prev.services.filter((service) => service !== value),
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <section
      id="contact"
      className="flex flex-col px-4 pt-10 gap-16 md:px-[140px] md:py-20 md:justify-center md:items-center"
    >
      <div className="flex flex-col gap-6 md:gap-12 md:w-[720px] md:justify-center">
        <header className="flex flex-col rounded-none p-0 gap-4">
          <h2 className="h-[38px] xl:h-[56px] font-bold text-[28px] xl:text-[40px] leading-[38px] md:leading-[56px] tracking-tight text-center text-[#0a0d12] dark:text-[#fdfdfd]">
            Ready to Start? Let's Talk
          </h2>
          <p className="h-7 md:h-[56px] font-medium text-sm xl:text-lg :leading-32px leading-7 text-center text-[#717680] dark:text-[#a4a7ae]">
            Tell us what you need, and we'll get back to you soon.
          </p>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[6px]">
              <label
                className="h-7 font-bold text-sm leading-7 text-[#0a0d12] dark:text-[#fdfdfd]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="h-12 rounded-xl py-2 px-4 border border-[#dfdfdf] text-[#0a0d12] dark:text-[#fdfdfd] dark:border-[#252b37]"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label
                className="h-7 font-bold text-sm leading-7 text-[#0a0d12] dark:text-[#fdfdfd]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="h-12 rounded-xl py-2 px-4 border border-[#dfdfdf] text-[#0a0d12] dark:text-[#fdfdfd] dark:border-[#252b37]"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label
                className="h-7 font-bold text-sm leading-7 text-[#0a0d12] dark:text-[#fdfdfd]"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="flex flex-row h-[134px] py-2 px-4 gap-2 border border-[#dfdfdf] rounded-xl text-[#0a0d12] dark:text-[#fdfdfd] dark:border-[#252b37]"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleTextAreaChange}
                required
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex flex-col gap-[14px]">
              <legend className="w-[361px] h-7 font-bold text-sm leading-7 text-[#0a0d12] dark:text-[#fdfdfd]">
                Services
              </legend>
              <div className="md:gap-[37px] md:grid md:grid-rows-3 md:grid-cols-3 md:grid-flow-col md:w-full">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex gap-3 items-center relative"
                  >
                    <label htmlFor={service.id} className="flex items-center">
                      <input
                        className="peer appearance-none w-5 h-5 rounded-[6px] border border-[#dfdfdf] dark:border-[#252b37] focus:outline-4 checked:absolute focus:outline-offset-4 focus:outline-[#9e77ed]"
                        type="checkbox"
                        id={service.id}
                        name="services"
                        value={service.value}
                        checked={formData.services.includes(service.value)}
                        onChange={handleCheckboxChange}
                      />
                      <svg
                        className="hidden peer-checked:inline"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="20" height="20" rx="6" fill="#FF623E" />
                        <path
                          d="M14.6663 6.5L8.24967 12.9167L5.33301 10"
                          stroke="#FDFDFD"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </label>
                    <label
                      className="h-7 font-medium text-sm leading-7 text-[#0a0d12] dark:text-[#fdfdfd]"
                      htmlFor={service.id}
                    >
                      {service.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="bt-primary h-11 md:h-12" type="submit">
            <div className="h-7 md:h-[30px] font-bold text-sm md:text-base md:leading-[30px] leading-7 text-white">
              Send
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
