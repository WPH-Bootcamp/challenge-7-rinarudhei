import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[393px] md:max-w-3xl xl:max-w-[1440px] h-screen mx-auto relative">
      {children}
    </div>
  );
};
export default Layout;
