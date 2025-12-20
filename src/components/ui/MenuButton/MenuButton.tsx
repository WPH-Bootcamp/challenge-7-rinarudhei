import React from "react";

type MenuButtonProps = {
  onClick: () => void;
  isOpen: boolean;
  className?: string;
};

const MenuButton: React.FC<MenuButtonProps> = ({
  onClick,
  isOpen,
  className,
}) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label="Toggle show menu"
    >
      {isOpen ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            className="stroke-[#0a0d12] dark:stroke-[#fdfdfd] stroke-2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-[#0a0d12] dark:stroke-[#fdfdfd] stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 12H21M3 6H21M3 18H21" />
        </svg>
      )}
    </button>
  );
};

export default MenuButton;
