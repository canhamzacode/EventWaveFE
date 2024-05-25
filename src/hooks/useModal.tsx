'use client';

import { useEffect, useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return { toggleModal, showModal };
};

export default useModal;
