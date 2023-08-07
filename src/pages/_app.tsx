import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./fragments/Header";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
