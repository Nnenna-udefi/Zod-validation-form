import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define Zod schema for form data
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  //      password: z.string().refine((value) => {
  //          const passwordRegex =
  //            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //        return passwordRegex.test(value);
  //    }, "Password must contain an uppercase letter, a number, a special character and a minimum of 8 numbers"),
});

type FormDa = z.infer<typeof schema>;

export const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDa>();
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const onSubmit = (data: FormDa) => {
    try {
      const validatedData = schema.parse(data);
      console.log("Form data:", validatedData);
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
        <h1 className="text-2xl font-bold mt-10">
          Form validation using Zod and react-hook-form
        </h1>
        <input
          {...register("email")}
          placeholder="Email Address"
          className="border p-2 my-2 rounded-md w-full"
        />
        {emailError && (
          <span className="text-red-500 text-xs my-2">{emailError}</span>
        )}

        <input
          {...register("password")}
          placeholder="Password"
          className="border p-2 my-2 rounded-md w-full"
        />
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
