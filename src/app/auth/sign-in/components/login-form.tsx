"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import formSchema from "./schema";
import { useLoginMutation } from "../mutations/useLoginMutation";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      email: "",
      password: "",
    },
  });
  const loginMutation = useLoginMutation(form);

  function handleSubmit(values: z.infer<typeof formSchema>) {
    loginMutation.mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <div className="centered gap-2">
            {/* TODO Como fazer para manter os dados de entrada ? */}
            <Checkbox className="data-[state=checked]:bg-yellow-200 data-[state=checked]:border-yellow-200 size-4"/>
            <Label className="text-gray-900">Lembrar dados</Label>
          </div>
          <Link href={''} className="text-gray-900">Esqueci minha senha</Link>
        </div>
        <div className="flex flex-col items-center">
          <Button
            type="submit"
            variant="default"
            disabled={loginMutation.isPending}
            className="cursor-pointer w-full bg-blue-600 py-5 "
          >
            {loginMutation.isPending ? "Signing in..." : "Sign In"}
          </Button>

          <div className="flex gap-1 mt-5">
            <p className="text-gray-900">Não tem uma conta?</p>
            <Link href="/auth/signup" className="text-blue-600 hover:underline">
              Clique aqui
            </Link>
          </div>
          
        </div>
      </form>
    </Form>
  );
};
