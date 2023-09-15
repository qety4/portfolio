import { z } from "zod"

export const contactValidator = z.object({
    emailBody:z.string().nonempty('enter email message').max(400),
    email: z.string().email().nonempty('enter a valid email').min(8).max(100),
})