import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "src/styles/prism-theme-atom-dark.css";
import "src/styles/global.css";

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
