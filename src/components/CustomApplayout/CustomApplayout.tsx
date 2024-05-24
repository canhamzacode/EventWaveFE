'use client';

import React, { useEffect } from 'react';
import ModalContext from '@/context/modalContext';
import useModal from '@/hooks/useModal';
import { AppHeader } from '../AppHeader';
import { Footer } from '../Footer';
import { Filter } from '../Filter';
import { Logout } from '../Logout';

const CustomApplayout = ({
  children,
  hideFooter
}: Readonly<{
  children: React.ReactNode;
  hideFooter?: boolean;
}>) => {
  const { toggleModal, showModal } = useModal();
  const { toggleModal: toggleLogout, showModal: showLogout } = useModal();

  useEffect(() => {
    // disable scroll bar if modal is open
    if (showModal || showLogout) {
      document.body.style.overflow = 'hidden';
    }
  }, [showModal, showLogout]);

  const contextValue = React.useMemo(
    () => ({ toggleModal, toggleLogout }),
    [toggleModal, toggleLogout]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      <div>
        <AppHeader toggleModal={toggleLogout} />
        {showModal && <Filter toggleModal={toggleModal} />}
        {children}
        {showLogout && <Logout toggleModal={toggleLogout} />}
        {hideFooter ? '' : <Footer />}
      </div>
    </ModalContext.Provider>
  );
};

export default CustomApplayout;
