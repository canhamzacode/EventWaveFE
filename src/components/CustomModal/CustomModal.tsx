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
      className="w-full z-50 top-0 absolute min-h-screen bg-text/55 flex items-center justify-center"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative">
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
