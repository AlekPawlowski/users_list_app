import { z } from "zod";

// based on IUsers interface but without 
// id and createt at params
export const userFormSchema = z.object({
    city: z.string().min(3),
    email: z.string().email({message: "Please provide correct email"}),
    name: z.string().min(3),
    username: z.string().min(3)
})

export type IUserFormSchema = z.infer<typeof userFormSchema>