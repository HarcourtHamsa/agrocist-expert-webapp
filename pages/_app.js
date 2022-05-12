import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "../context/auth";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
