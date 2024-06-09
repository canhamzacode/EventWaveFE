'use client';

import { useAuth } from '@/hooks';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const CustomAuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (isAuthenticated) {
  //   return null;
  // }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default CustomAuthWrapper;
