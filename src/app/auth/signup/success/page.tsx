import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Success = () => (
  <div className="grid gap-8 text-center">
    <div>
      <h1>Sign Up Successful</h1>
    </div>
    <div className="grid gap-6">
      <Image src="/successIcon.svg" alt="sucess icon" width={74} height={74} className="mx-auto" />
      <p>
        Sign Up process has been completed successfully. A verification link has been sent to your
        mail.
      </p>

      <Link href="/auth/signup/emailverification">
        <button className="btn w-full bg-primary text-white border-0">Go to your mail</button>
      </Link>
    </div>
  </div>
);

export default Success;
