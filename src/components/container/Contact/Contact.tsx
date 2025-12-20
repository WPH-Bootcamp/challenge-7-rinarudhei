import React from "react";
import Form from "../../ui/Form";

const ContactForm: React.FC = () => {
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
        <Form></Form>
      </div>
    </section>
  );
};

export default ContactForm;
