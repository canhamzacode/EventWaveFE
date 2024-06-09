'use client';

import { CustomInputPropType } from '@/types/index.t';

const CustomInput = ({
  type,
  placeholder,
  register,
  name,
  errors,
  label,
  customStyle,
  readonly,
  value,
  onChange
}: CustomInputPropType) => (
  <div className="w-full flex flex-col gap-2">
    <label htmlFor={name} className="text-base font-bold">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className={`border outline-none w-full p-3 active:border-primary focus:border-primary rounded-lg border-gray-300 ${customStyle || 'placeholder:text-black'}`}
      {...register(name)}
      readOnly={readonly}
      value={value}
      onChange={onChange}
    />
    {errors[name] && (
      <p className="text-red-600 capitalize text-sm">{errors[name]?.message}</p>
    )}
  </div>
);

export default CustomInput;
