"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ProgressBar
        height="4px"
        color="#fbbf24"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </QueryClientProvider>
  );
};
