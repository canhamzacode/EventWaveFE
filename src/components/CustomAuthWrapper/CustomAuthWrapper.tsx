'use client';

import { useAuth } from '@/hooks';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const CustomAuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading, initialSignup } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // Wait until loading is finished

    if (isAuthenticated) {
      if (initialSignup) {
        router.push('/auth/signup/success');
      } else {
        router.push('/dashboard');
      }
    }
  }, [isAuthenticated, initialSignup, loading, router]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default CustomAuthWrapper;
