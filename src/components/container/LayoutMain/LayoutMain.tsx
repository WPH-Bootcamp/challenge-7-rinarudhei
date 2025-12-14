import React from "react";

type LayoutMain = {
  children: React.ReactNode;
};
const LayoutMain: React.FC<LayoutMain> = ({ children }) => {
  return (
    <main className="absolute flex flex-col top-[843px] md:top-[452px] xl:top-[747px]">
      {children}
    </main>
  );
};

export default LayoutMain;
