import React from 'react';

const CustomModal = ({
  children,
  toggleModal
}: {
  children: React.ReactNode;
  toggleModal?: () => void;
}) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && toggleModal) {
      toggleModal();
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="w-full z-50 top-0 absolute h-full bg-text/55 flex items-start pt-8 justify-center overflow-auto p-5"
    >
      <div onClick={(e) => e.stopPropagation()} className="">
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
