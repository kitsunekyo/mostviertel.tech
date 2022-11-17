import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";

import "src/styles/prism-theme-atom-dark.css";
import "src/styles/global.css";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
