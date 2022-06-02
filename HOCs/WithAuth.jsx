import React from "react";
import { useRouter } from "next/router";

const WithAuth = (Component) => {
  return (props) => {
    // checks if we are on a browser
    if (typeof window !== "undefined") {
      const router = useRouter();

      const user = localStorage.getItem("user");

      // if there is no user, redirect to login
      if (!user) {
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
