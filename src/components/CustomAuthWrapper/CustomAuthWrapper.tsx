'use client';

import { useAuth } from '@/hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const CustomAuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading, initialSignup } = useAuth();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || loading) return;

    if (isAuthenticated) {
      if (initialSignup) {
        router.push('/auth/signup/success');
      } else {
        router.push('/dashboard');
      }
    }
  }, [hydrated, isAuthenticated, initialSignup, loading, router]);

  if (!hydrated || isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full grid  h-screen grid-cols-1 tablet:grid-cols-[457px,1fr]">
      <div className="w-full h-screen bg-black tablet:flex hidden">
        <Image
          src="/authSideImage.png"
          alt="logo"
          width={662}
          height={600}
          className="h-full w-full object-cover "
        />
      </div>
      <div className="overflow-x-hidden overflow-y-auto w-full grid tablet:grid-rows-1 grid-rows-[60px,1fr]">
        <div className="w-full tablet:hidden flex items-center justify-center">
          <div className="w-[133px] h-[31px] md:hidden flex">
            <Image src="/eventWaveLogo.svg" alt="eventwave logo" width={133} height={31} />
          </div>
        </div>
        <div className="flex items-start justify-center py-10">
          <div className="w-full min-h-full max-w-[500px] flex items-center justify-center p-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAuthWrapper;
