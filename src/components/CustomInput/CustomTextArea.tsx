import React from 'react';
import { CustomTextAreaProps } from '@/types/index.t';

const CustomTextArea = ({
  placeholder,
  register,
  name,
  errors,
  label,
  customStyle,
  readonly,
  value,
  onChange
}: CustomTextAreaProps) => (
  <div className="w-full flex flex-col gap-2">
    <label htmlFor={name} className="text-base font-bold">
      {label}
    </label>
    <textarea
      placeholder={placeholder}
      className={`border outline-none w-full  p-3 active:border-primary focus:border-primary rounded-lg  border-gray-300 ${customStyle || 'placeholder:text-black'}`}
      {...register(name)}
      readOnly={readonly}
      value={value}
      onChange={onChange}
    />
    {errors[name] && errors[name]?.message && (
      <p className="text-red-600 capitalize text-sm">{errors[name]?.message}</p>
    )}
  </div>
);

export default CustomTextArea;
