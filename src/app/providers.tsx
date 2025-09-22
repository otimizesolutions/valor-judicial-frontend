"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider refetchInterval={4 * 60}>
        {children}

        <Toaster richColors closeButton />
      </SessionProvider>
    </QueryClientProvider>
  );
}
