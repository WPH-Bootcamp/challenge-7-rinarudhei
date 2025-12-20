import React, { useState, type ChangeEvent } from "react";
import Button from "../Button";
import InputField from "../InputField";
import Checkbox from "../Checkbox/Checkbox";

type Form = {
  name: string;
  email: string;
  message: string;
  services: string[];
};

type Service = {
  id: string;
  label: string;
  value: string;
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    message: "",
    services: [],
  });

  const services: Service[] = [
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
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <InputField
          label="Name"
          inputType="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        ></InputField>
        <InputField
          label="Email"
          inputType="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        ></InputField>
        <InputField
          label="Message"
          inputType="textarea"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Enter your email"
        ></InputField>
        <div className="flex flex-col gap-[14px]">
          <legend className="w-[361px] h-7 font-bold text-sm leading-7 text-[#0a0d12] dark:text-[#fdfdfd]">
            Services
          </legend>
          <div className="md:gap-[37px] md:grid md:grid-rows-3 md:grid-cols-3 md:grid-flow-col md:w-full">
            {services.map((service) => (
              <Checkbox
                key={service.id}
                id={service.id}
                name="services"
                value={service.value}
                checked={formData.services.includes(service.value)}
                handleChange={handleCheckboxChange}
                label={service.label}
              ></Checkbox>
            ))}
          </div>
        </div>
      </div>

      <Button className="bt-primary h-11 md:h-12" type="submit">
        <div className="h-7 md:h-[30px] font-bold text-sm md:text-base md:leading-[30px] leading-7 text-white">
          Send
        </div>
      </Button>
    </form>
  );
};

export default Form;
