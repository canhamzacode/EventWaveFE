import React from 'react';

const CustomModal = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="w-full z-10 top-0 absolute min-h-screen bg-lightGrey/20 flex items-center justify-center">
    <div className="w-full">{children}</div>
  </div>
);

export default CustomModal;
