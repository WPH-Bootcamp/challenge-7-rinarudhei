import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-w-[393px] max-w-[393px] md:max-w-3xl xl:min-w-[1440px] h-full mx-auto relative">
      {children}
    </div>
  );
};
export default Layout;
