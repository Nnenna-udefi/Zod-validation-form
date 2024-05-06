import { z } from "zod";

const required_error = "This field can not be blank";

// Define Zod schema for form data
export const schema = z.object({
  username: z.string({ required_error }),
  email: z.string().email("Please provide a valid email"),
  password: z.string().min(8),
  //      password: z.string().refine((value) => {
  //          const passwordRegex =
  //            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //        return passwordRegex.test(value);
  //    }, "Password must contain an uppercase letter, a number, a special character and a minimum of 8 numbers"),
});
