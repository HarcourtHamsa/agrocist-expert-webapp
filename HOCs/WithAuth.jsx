import React from "react";
import { useRouter } from "next/router";

const WithAuth = (Component) => {
  return (props) => {
    // checks if we are on a browser
    if (typeof window !== "undefined") {
      const router = useRouter();

      const token = localStorage.getItem("token");

      // if there is no token, redirect to login
      if (!token) {
        router.replace("/account/login");
        return null;
      }

      return <Component {...props} />;
    }

    // if we are not on a browser
    return null;
  };
};

export default WithAuth;
