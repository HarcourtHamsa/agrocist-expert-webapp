import React from "react";
import Head from "next/head";
import InputElement from "../../components/InputElement";
import SubmitButton from "../../components/SubmitButton";
import styles from "../../styles/sass/reset.module.scss";

function ResetPassword() {
  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.page}>
        <div className={"container"}>
          <div className={"card"}>
            <h3>Reset Password</h3>
            <p>Enter your email to get a password reset link</p>

            <form>
                <InputElement placeholder="Email address"/>
                <SubmitButton label={"Reset"}/>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default ResetPassword;
