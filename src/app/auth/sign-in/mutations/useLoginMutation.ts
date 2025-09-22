import { applyFormErrors, Form } from "@/utils/errors";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface MutationProps {
  email: string;
  password: string;
}

export const useLoginMutation = (form: Form<MutationProps>) => {
  const router = useRouter();

  return useMutation<unknown, unknown, MutationProps>({
    mutationFn: async ({ email, password }) => {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/app",
      });
      if (response?.error) {
        console.log(response?.error);
        throw new Error(response.error);
      }
    },
    onSuccess: () => {
      router.push("/app");
      toast.success("Login realizado com sucesso");
    },
    onError: (error) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const jsonResponse = JSON.parse((error as any).message);
        console.log(jsonResponse);
        applyFormErrors(jsonResponse, form);
      } catch {
        toast.error("Aconteceu um erro desconhecido!");
      }
    },
  });
};
