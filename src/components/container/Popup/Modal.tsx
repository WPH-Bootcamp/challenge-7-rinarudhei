import React from "react";
import Button from "../../ui/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/80 "></div>

      <div className="relative bg-[#fafafa]/95 dark:bg-[#0a0d12]/95 border border-[#252b37] rounded-2xl w-[353px] xl:w-[518px] mt-[239px]  xl:ml-[461px] xl:mt-[272px] mx-auto ">
        <div className="h-[160px] xl:h-[225px] flex items-center justify-center border-t-2xl p-2 gap-2">
          <img
            src="./message-success.png"
            alt="Message Success"
            className="h-[140px] w-[140px] xl:h-[225px] xl:w-[225px]"
          />
        </div>

        <div className="bg-white dark:bg-black rounded-b-2xl pt-6 xl:pt-8 pr-6 xl:pr-8 pb-10 pl-6 xl:pl-8 h-[214px] xl:h-[254px] border-none">
          <div className="gap-[2px] xl:gap-2 h-[90px] xl:h-[102px]">
            <h2 className="text-xl leading-[34px] font-bold text-center text-[#0a0d12] dark:text-[#fdfdfd] mb-[2px] xl:mb-2">
              Message Received!
            </h2>
            <p className="text-sm leading-7 xl:text-base text-center xl:leading-[30px] text-[#717680] dark:text-[#a4a7ae]">
              Thanks for reaching out - we'll get back to you as soon as
              possible
            </p>
          </div>

          <Button
            onClick={onClose}
            className="bt-primary text-[#FFFFFF] font-bold text-sm leading-7 xl:text-base xl:leading-[30px] w-[305px] h-11 xl:w-[361px] md:h-12 p-2 gap-1 mx-auto mt-4 xl:mt-8 mb-10"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
