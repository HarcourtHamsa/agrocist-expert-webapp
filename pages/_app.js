import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "../context/auth";
import Loader from "../components/Loader";
import "../styles/globals.css";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
