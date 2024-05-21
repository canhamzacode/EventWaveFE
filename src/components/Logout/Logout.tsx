import React from 'react';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import { CustomModal } from '../CustomModal';

interface LogoutProp {
  toggleModal: () => void;
}

const Logout = ({ toggleModal }: LogoutProp) => (
  <CustomModal>
    <div className="w-full max-w-[527px] py-10 px-14 rounded-2xl bg-white mx-auto flex flex-col gap-8 text-center">
      <h3 className="text-4xl">Are you sure?</h3>
      <div className="grid gap-4">
        <div className="w-full flex items-center justify-center">
          <Image src="/message-question.svg" alt="" width={75} height={75} />
        </div>
        <p>
          When you log out, you&lsquo;ll be signed out of your account and will need to sign in
          again to access your account.
        </p>
        <div className="w-full flex items-center justify-center gap-6">
          <button
            className="w-[130px] py-4 px-6 rounded-xl flex items-center gap-3 justify-center border border-primary text-primary"
            onClick={toggleModal}
          >
            <IoMdClose size={25} />
            <p>Cancel</p>
          </button>
          <button
            className="py-4 px-6 rounded-xl flex items-center gap-3 justify-center border bg-primary text-white"
            onClick={toggleModal}
          >
            <CiLogout size={25} />
            <p>Log Out</p>
          </button>
        </div>
      </div>
    </div>
  </CustomModal>
);

export default Logout;
