import React from "react";
import Head from "next/head";
import Link from "next/link";
import InputElement from "../../components/InputElement";
import SubmitButton from "../../components/SubmitButton";
import styles from "../../styles/sass/signup.module.scss";

import { useRouter } from "next/router";

import { useFormik } from "formik";
import helpers from "../../helpers/helpers";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();
  const notify = (type, msg) => toast(msg, { type: type });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phonenumber: "",
      address: "",
      profession: "Agronomist",
      firstName: "",
      lastName: "",
    },

    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const res = await helpers.signup(values);
        notify("success", "Account created successfully");
        router.push(
          {
            pathname: "/account/verify",
            query: {
              email: `${values.email}`,
            },
          },
          "/account/verify"
        );
      } catch (error) {
        console.log(error);
        notify("error", "Oops! an error occured");
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <>
      <Head>
        <title>Signup - Agrocist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.page}>
        <ToastContainer position="top-center" hideProgressBar={true} />
        <div className={"container"}>
          <div className={"card"}>
            <h3>Create Your Account</h3>
            <form onSubmit={formik.handleSubmit}>
              <InputElement
                placeholder="First name"
                type="text"
                id="first-name"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <InputElement
                placeholder="Last name"
                type="text"
                id="last-name"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              <InputElement
                placeholder="Email address"
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className="flex">
                <InputElement value="+234" disabled={true} readOnly />
                <InputElement
                  placeholder="Phone number"
                  type="text"
                  id="phone-number"
                  name="phonenumber"
                  onChange={formik.handleChange}
                  value={formik.values.phonenumber}
                />
              </div>
              <InputElement
                placeholder="Address"
                type="text"
                id="address"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              <InputElement
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div>
                <p>Please select your profession:</p> {" "}
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                  <label htmlFor="html">Agronomist</label> <br /> {" "}
                <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
                <label htmlFor="css">Veterinarian</label>
              </div>{" "}
              <br />
              <SubmitButton
                label={isLoading ? "Loading..." : "Create my account"}
              />
              <span>
                Already have an account?{" "}
                <Link href="/account/login">Login</Link>
              </span>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;
