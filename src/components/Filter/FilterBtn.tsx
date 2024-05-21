'use client';

import { modalContext } from '@/context';
import React, { useContext } from 'react';
import { CiFilter } from 'react-icons/ci';

const FilterBtn = () => {
  const { toggleModal } = useContext(modalContext);

  return (
    <button
      type="button"
      onClick={toggleModal}
      className="btn flex items-center justify-center gap-2 md:w-[128px] w-full bg-primary text-white font-bold"
    >
      <CiFilter size={20} />
      Filter
    </button>
  );
};

export default FilterBtn;
