import { z } from "zod";

const formSchema = z.object({
  email: z.email({ error: "Preencha o seu e-mail." }),
  password: z
    .string({ error: "Preencha a sua senha." })
    .min(1, { error: "Preencha a sua senha." }),
});

export default formSchema;
