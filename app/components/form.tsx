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
      <div className="mt-8">
        <h1 className="text-xl font-bold ">
          Form validation using react-hook-form
        </h1>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
          id="email"
          label="Email Address:"
        />

        <Input
          type="text"
          placeholder="GitHub URL"
          name="github_url"
          register={register}
          error={errors.github_url}
          id="github_url"
          label="Github URL:"
        />

        <Input
          type="number"
          placeholder="Years of Experience (1 - 10)"
          name="years_of_experience"
          register={register}
          error={errors.years_of_experience}
          valueAsNumber
          id="years_of_experience"
          label="Years of Experience:"
        />

        <Input
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
          id="password"
          label="Enter Password:"
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          register={register}
          error={errors.confirm_password}
          id="confirm_password"
          label="Confirm Password:"
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
