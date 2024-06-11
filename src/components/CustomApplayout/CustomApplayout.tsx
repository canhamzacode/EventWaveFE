'use client';

import React, { useEffect, useMemo } from 'react';
import ModalContext from '@/context/modalContext';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/navigation';
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

  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/signin');
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    // Disable scroll bar if any modal is open, re-enable if no modal is open
    document.body.style.overflow = showModal || showLogout ? 'hidden' : 'auto';

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal, showLogout]);

  const contextValue = useMemo(() => ({ toggleModal, toggleLogout }), [toggleModal, toggleLogout]);

  if (loading || !isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <ModalContext.Provider value={contextValue}>
      <div>
        <AppHeader toggleModal={toggleLogout} />
        {showModal && <Filter toggleModal={toggleModal} />}
        {children}
        {showLogout && <Logout toggleModal={toggleLogout} />}
        {!hideFooter && <Footer />}
      </div>
    </ModalContext.Provider>
  );
};

export default CustomApplayout;
