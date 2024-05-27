'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSubmit = (schema: any, defaultValues: any = {}) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });
  return { register, handleSubmit, errors, watch, control, setValue };
};

export default useSubmit;
