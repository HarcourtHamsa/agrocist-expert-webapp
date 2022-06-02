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

  useEffect(() => {
    const handleStart = (url) => {
      Router.asPath !== url && setIsLoading(true);
    };

    const handleComplete = (url) => {
      Router.asPath === url && setIsLoading(false);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
  });

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {isLoading ? <Loader /> : <Component {...pageProps} />}
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
