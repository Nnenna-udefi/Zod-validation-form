import { schema } from "@/lib/schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof schema>;

type FieldName = "username" | "email" | "password";

const formFields: { name: FieldName; placeholder: string; type: string }[] = [
  { name: "username", placeholder: "Enter Username", type: "text" },
  { name: "email", placeholder: "Enter Email Address", type: "email" },
  { name: "password", placeholder: "Enter password", type: "password" },
];

export const ZodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    try {
      const validatedData = schema.parse(data);
      console.log("Form data:", validatedData);
      alert("Form Submission successful");
      setEmailError(null);
      setPasswordError(null);
    } catch (error) {
      console.error("Form validation failed:", error);
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          if (err.path[0] === "email") {
            setEmailError(err.message);
          }
          if (err.path[0] === "password") {
            setPasswordError(err.message);
          }
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="text-xl font-bold">
          Form validation using Zod and react-hook-form
        </h1>

        {formFields.map((field) => (
          <div key={field.name}>
            <input
              {...register(field.name)}
              className="border p-2 my-2 rounded-md w-full"
              type={field.type}
              placeholder={field.placeholder}
            />
            {errors[field.name]?.message && (
              <span className="text-red-500 text-xs my-2">
                {errors[field.name]?.message}
              </span>
            )}
          </div>
        ))}

        {emailError && (
          <span className="text-red-500 text-xs my-2">{emailError}</span>
        )}
        <br />

        {passwordError && (
          <span className="text-red-500 my-2 text-xs">{passwordError}</span>
        )}

        <button
          type="submit"
          className="p-2 my-2 bg-black rounded-md w-full text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
