'use client';

import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return { toggleModal, showModal };
};

export default useModal;
