import React from 'react';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import { CustomModal } from '../CustomModal';

interface LogoutProp {
  toggleModal: () => void;
  description: string;
  actionName: string;
  undoName?: string;
}

const ActionModal = ({ toggleModal, description, actionName, undoName }: LogoutProp) => (
  <CustomModal>
    <div className="w-full max-w-[527px] py-10 md:px-14 px-7 rounded-2xl bg-white mx-auto flex flex-col gap-8 text-center z-30">
      <h3 className="md:text-4xl text-3xl">Are you sure?</h3>
      <div className="grid gap-4">
        <div className="w-full flex items-center justify-center">
          <Image src="/message-question.svg" alt="" width={75} height={75} />
        </div>
        <p>{description}</p>
        <div className="w-full sm:flex grid items-center justify-center sm:gap-6 gap-3">
          <button
            className="w-full py-4 px-6 rounded-xl flex items-center gap-3 justify-center border border-primary text-primary"
            onClick={toggleModal}
          >
            <IoMdClose size={25} />
            <p>{undoName || 'Cancel'}</p>
          </button>
          <button
            className="w-full py-4 px-6 rounded-xl flex items-center gap-3 justify-center border bg-primary text-white"
            onClick={toggleModal}
          >
            <CiLogout size={25} />
            <p>{actionName}</p>
          </button>
        </div>
      </div>
    </div>
  </CustomModal>
);

export default ActionModal;
