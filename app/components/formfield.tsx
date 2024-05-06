import { FormFieldProps } from "@/lib/types";
import React from "react";

export const Input: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  label,
}) => {
  return (
    <div>
      <label htmlFor={name} className="mt-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        id={name}
        className="border p-2 my-2 rounded-md w-full"
      />
      {error && <span className="text-red-500 my-2">{error.message}</span>}
    </div>
  );
};
