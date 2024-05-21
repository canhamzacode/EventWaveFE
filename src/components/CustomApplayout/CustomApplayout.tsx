'use client';

import React, { useEffect } from 'react';
import ModalContext from '@/context/modalContext';
import useModal from '@/hooks/useModal';
import { AppHeader } from '../AppHeader';
import { Footer } from '../Footer';
import { Filter } from '../Filter';

const CustomApplayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { toggleModal, showModal } = useModal();

  useEffect(() => {
    // disable scroll bar if modal is open
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [showModal]);

  const contextValue = React.useMemo(() => ({ toggleModal }), [toggleModal]);

  return (
    <ModalContext.Provider value={contextValue}>
      <div>
        <AppHeader />
        {showModal && <Filter toggleModal={toggleModal} />}
        {children}
        <Footer />
      </div>
    </ModalContext.Provider>
  );
};

export default CustomApplayout;
