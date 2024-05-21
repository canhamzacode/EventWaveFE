import React from 'react';

const CustomModal = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="w-full z-10 top-0 absolute min-h-screen bg-text/55 flex items-center justify-center">
    <div className="w-full p-4">{children}</div>
  </div>
);

export default CustomModal;
