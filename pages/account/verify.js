import React from "react";
import Head from "next/head";
import styles from "../../styles/sass/verify.module.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Verify() {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Verify Account - Agrocist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.page}>
        <div>
          <svg
            width="43"
            height="40"
            viewBox="0 0 43 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3955 24C-5.56733 9.63329 27.676 -14.6111 35 11.7282C29.1049 9.83242 17.1308 9.63273 16.3955 24Z"
              fill="#05612E"
            />
            <path
              d="M27.1401 26.4399C23.3348 54.7889 -14.2752 30.3275 7.89654 14.8322C7.43424 20.8487 15.6905 32.1619 27.1401 26.4399Z"
              fill="#10B401"
            />
            <path
              d="M22.9233 15.4524C47.4907 4.33704 49.019 45.9216 24.7989 37.8474C29.9443 34.6953 32.8135 21.1545 22.9233 15.4524Z"
              fill="#F0B611"
            />
            <path
              d="M22.4175 18.7081C21.0925 19.8292 18.7483 22.7442 19.9714 25.435C21.2964 24.5177 24.2521 22.8665 25.4752 23.6004C24.6598 22.8869 22.9067 20.9096 22.4175 18.7081Z"
              fill="#10B401"
            />
          </svg>

          <div className={"container"}>
            <div className={"card"}>
              <h3>Please verify your email</h3>
              <p>
                You're almost there! We sent an email to <b>{query.email}</b>
              </p>

              <p>
                Just click on the link in that email to complete your signup. If
                you don't see it, you may need to <b>check your spam</b> folder
              </p>

              <p>
                Need help? <Link href="/">Contact Us</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Verify;
