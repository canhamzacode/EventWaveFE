'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSubmit = (schema: any) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  return { register, handleSubmit, errors, watch, control };
};

export default useSubmit;