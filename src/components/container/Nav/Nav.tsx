import { useState } from "react";
import Button from "../../ui/Button";
import MenuButton from "../../ui/MenuButton";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems = [
    { id: 1, label: "About", href: "#hero" },
    { id: 2, label: "Service", href: "#services" },
    { id: 3, label: "Projects", href: "#projects" },
    { id: 4, label: "Testimonials", href: "#testimonials" },
    { id: 5, label: "FAQ", href: "#faq" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 flex items-center justify-between h-16 xl:h-[84px] px-4 py-6 xl:px-[140px] bg-transparent backdrop-blur-sm z-49">
      <div className="flex items-center w-[141px] gap-[8.53px] xl:w-[158.63px] xl:gap-[9.6px]">
        <img
          className="w-[26.3px] h-[28.85px] xl:w-[29.59px] xl:h-[32.46px]"
          src="/logo-symbol.svg"
          alt="Company Logo"
        />
        <div className="font-[Outfit] font-semibold dark:text-white text-[21.33px] xl:text-[24px] w-[97px] xl:w-[109px] h-8 xl:h-9 leading-8 xl:leading-[36px]">
          Your Logo
        </div>
      </div>

      <nav className="hidden md:inline">
        <ul className="flex gap-3">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-2 md:px-1 xl:px-4 md:gap-[1px] xl:gap-[6px]"
            >
              <a
                href={item.href}
                className="font-semibold text-sm xl:text-base leading-[30px] text-[#0a0d12] dark:text-[#fdfdfd] h-[30px]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        className="hidden bt-primary md:flex md:w-[132px] xl:w-[197px] md:h-8 xl:h-11 rounded-full md:p-1 xl:p-2 gap-1  items-center"
        aria-label="Let's Talk - Main CTA on nav section"
      >
        <p className="font-bold md:text-xs xl:text-sm xl:leading-7 text-white text-center">
          Let's Talk
        </p>
      </Button>
      <MenuButton
        className="md:hidden"
        onClick={toggleMenu}
        isOpen={isOpen}
      ></MenuButton>
      {isOpen && (
        <div
          className="absolute w-full h-screen left-0  top-16 bg-white dark:bg-black flex flex-col items-center"
          aria-expand={isOpen}
        >
          <ul className="w-[361px] md:hidden flex flex-col gap-3 font-semibold text-sm leading-[14px] text-[#0a0d12] dark:text-[#fdfdfd]">
            {navItems.map((item) => (
              <li key={item.id} className="h-9 flex flex-col justify-center">
                <a onClick={toggleMenu} href={item.href}>
                  {item.label === "Projects" ? "Portfolio" : item.label}
                </a>
              </li>
            ))}
            <Button
              className="bt-primary rounded-full gap-1 items-center h-11"
              aria-label="Let's Talk - Main CTA on nav section"
            >
              <p className="font-bold md:text-xs xl:text-sm xl:leading-7 text-white text-center">
                Let's Talk
              </p>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
