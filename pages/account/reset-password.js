import React from "react";
import Head from "next/head";
import InputElement from "../../components/InputElement";
import SubmitButton from "../../components/SubmitButton";
import styles from "../../styles/sass/reset.module.scss";

import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import helpers from "../../helpers/helpers";

function ResetPassword() {
  const [isLoading, setIsLoading] = React.useState(false);

  const notify = (type, msg) => toast(msg, { type: type });

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: async (values) => {
      const { email } = values;
      try {
        setIsLoading(true);
        const res = await helpers.forgot_password({ email, notify });
        console.log("response...", res);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.page}>
        <ToastContainer position="top-center" hideProgressBar={true} />

        <div className={"container"}>
          <div className={"card"}>
            <h3>Reset Password</h3>
            <p>Enter your email to get a password reset link</p>

            <form onSubmit={formik.handleSubmit}>
              <InputElement
                placeholder="Email address"
                name="email"
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <SubmitButton
                label={isLoading ? "Loading..." : "Send Reset Password"}
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default ResetPassword;
