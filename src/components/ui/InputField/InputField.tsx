import React, { type ChangeEvent } from "react";

interface InputFieldProp {
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  name: string;
  value: string;
  label: string;
  inputType: string;
}

const InputField: React.FC<InputFieldProp> = ({
  placeholder,
  onChange,
  name,
  value,
  label,
  inputType,
}) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <label
        className="h-7 font-bold text-sm leading-7 text-[#0a0d12] dark:text-[#fdfdfd]"
        htmlFor="name"
      >
        {label}
      </label>
      {inputType === "textarea" ? (
        <textarea
          className="flex flex-row h-[134px] py-2 px-4 gap-2 border border-[#dfdfdf] rounded-xl text-[#0a0d12] dark:text-[#fdfdfd] dark:border-[#252b37]"
          id="message"
          name="message"
          value={value}
          onChange={onChange}
          required
          placeholder="Enter your message"
        ></textarea>
      ) : (
        <input
          className="h-12 rounded-xl py-2 px-4 border border-[#dfdfdf] text-[#0a0d12] dark:text-[#fdfdfd] dark:border-[#252b37]"
          type={inputType}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputField;
