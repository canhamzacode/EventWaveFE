'use client';

import api from '@/lib/axios';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const EmailVerification = () => {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get('token');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await api.get('/verify-email', {
          params: { token }
        });
        setMessage(response.data.message);
        if (response.status === 200) {
          router.push('/onboarding');
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'Something went wrong');
        } else {
          setError('Something went wrong');
        }
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [token, router]);

  return (
    <div className="grid gap-8 text-center">
      <div>
        <h1>{message || 'Verifying email...'}</h1>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-6">
        <Image
          src="/successIcon.svg"
          alt="success icon"
          width={74}
          height={74}
          className="mx-auto"
        />
        <p>{message || 'Please wait while we verify your email.'}</p>
        {message && (
          <Link href="/onboarding">
            <button className="btn w-full bg-primary text-white border-0">Proceed</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
