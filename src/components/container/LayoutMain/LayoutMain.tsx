import React from "react";

type LayoutMain = {
  children: React.ReactNode;
};
const LayoutMain: React.FC<LayoutMain> = ({ children }) => {
  return (
    <main className="flex flex-col mt-[843px] md:mt-[452px] xl:mt-[747px]">
      {children}
    </main>
  );
};

export default LayoutMain;
