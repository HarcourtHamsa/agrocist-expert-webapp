import Head from "next/head";
import Link from "next/link";
import React from "react";
import InputElement from "../../components/InputElement";
import SubmitButton from "../../components/SubmitButton";
import styles from "../../styles/sass/login.module.scss";

import { useFormik } from "formik";
import helpers from "../../helpers/helpers";

function login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Head>
        <title>Login - Agrocist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.page}>
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
              <SubmitButton label={"Login to your account"} />
            </form>

            <p>
              New on Angrocist? <Link href="/register">Register</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default login;
