import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./formfield";
import { FormData } from "@/lib/types";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="text-3xl font-bold ">Form validated with zod</h1>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />

        <Input
          type="text"
          placeholder="GitHub URL"
          name="github_url"
          register={register}
          error={errors.github_url}
        />

        <Input
          type="number"
          placeholder="Years of Experience (1 - 10)"
          name="years_of_experience"
          register={register}
          error={errors.years_of_experience}
          valueAsNumber
        />

        <Input
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          register={register}
          error={errors.confirm_password}
        />

        <button
          type="submit"
          className="p-2 my-2 bg-green-600 rounded-md w-full text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
