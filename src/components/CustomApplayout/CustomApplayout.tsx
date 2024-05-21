'use client';

import React, { useEffect, useState } from 'react';
import ModalContext from '@/context/modalContext';
import useModal from '@/hooks/useModal';
import { AppHeader } from '../AppHeader';
import { Footer } from '../Footer';
import { Filter } from '../Filter';
import { Logout } from '../Logout';

const CustomApplayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { toggleModal, showModal } = useModal();
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    // disable scroll bar if modal is open
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [showModal]);

  const contextValue = React.useMemo(() => ({ toggleModal }), [toggleModal]);

  const toggleLogoutModal = () => {
    setShowLogout(!showLogout);
  };

  return (
    <ModalContext.Provider value={contextValue}>
      <div>
        <AppHeader toggleModal={toggleLogoutModal} />
        {showModal && <Filter toggleModal={toggleModal} />}
        {children}
        {showLogout && <Logout toggleModal={toggleLogoutModal} />}
        <Footer />
      </div>
    </ModalContext.Provider>
  );
};

export default CustomApplayout;
