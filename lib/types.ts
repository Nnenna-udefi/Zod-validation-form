import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  github_url: string;
  years_of_experience: number;
  password: string;
  confirm_password: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};
