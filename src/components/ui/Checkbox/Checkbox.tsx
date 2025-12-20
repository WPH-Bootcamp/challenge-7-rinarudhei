import React, { type ChangeEvent } from "react";

type CheckboxProp = {
  id: string;
  value: string;
  name: string;
  checked: boolean;
  label: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox: React.FC<CheckboxProp> = ({
  id,
  value,
  handleChange,
  name,
  checked,
  label,
}) => {
  return (
    <label
      key={id}
      htmlFor={id}
      className="flex items-center h-7 font-medium text-sm leading-7 text-[#0a0d12] dark:text-[#fdfdfd] cursor-pointer  gap-3  relative"
    >
      <input
        className="peer appearance-none w-5 h-5 rounded-[6px] border border-[#dfdfdf] dark:border-[#252b37] focus:outline-4 checked:absolute focus:outline-offset-4 focus:outline-[#9e77ed]"
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
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
      {label}
    </label>
  );
};

export default Checkbox;
