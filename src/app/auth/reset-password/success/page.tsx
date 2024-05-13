import Image from 'next/image';
import React from 'react';

const Success = () => (
  <div className="grid gap-8 text-center">
    <div>
      <h1>Reset Password Successful</h1>
    </div>
    <div className="grid gap-6">
      <Image src="/successIcon.svg" alt="sucess icon" width={74} height={74} className="mx-auto" />
      <p>Your password has been successfully reset. Click below to log in.</p>
      <button className="btn w-full bg-primary text-white border-0">Back To Login</button>
    </div>
  </div>
);

export default Success;
