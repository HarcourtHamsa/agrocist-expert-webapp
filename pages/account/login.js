import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import InputElement from "../../components/InputElement";
import SubmitButton from "../../components/SubmitButton";
import styles from "../../styles/sass/login.module.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFormik } from "formik";
import helpers from "../../helpers/helpers";

function Login() {
  const Router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const notify = (type, msg) => toast(msg, { type: type });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const res = await helpers.login(values);
        notify("success", "Login successful");

        helpers.saveUserDetailsToLocalStorage(res);

        // redirects to dashboard
        Router.push("/dashboard");
      } catch (error) {
        // user is unathorized
        if (error.response.status === 401) {
          notify("error", "User is unauthorized");
          return;
        }

        notify("error", "Wrong email or password ");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Login - Agrocist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.page}>
        <ToastContainer position="top-center" hideProgressBar={true} />
        <div className={"container"}>
          <div className={"card"}>
            <h3>Login</h3>

            <form onSubmit={formik.handleSubmit}>
              <InputElement
                placeholder="Email or phone number"
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <InputElement
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <SubmitButton
                label={isLoading ? "Loading..." : "Login to your account"}
              />
            </form>
            <p>
              <Link href="/account/reset-password">Forgot Password?</Link>
            </p>
            <p>
              New on Angrocist? <Link href="/account/signup">Register</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
