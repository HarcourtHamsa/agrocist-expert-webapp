import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

import Wrapper from "../../components/dashboard/Wrapper";
import helpers from "../../helpers/helpers";
import styles from "../../styles/sass/settings.module.scss";

import avatar from "../../assets/images/avatar.svg";

import { MdPerson, MdEmail, MdPhone, MdMyLocation } from "react-icons/md";
import InputElement from "../../components/InputElement";
import SubmitButton from "../../components/SubmitButton";

function Settings() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const fetchUserData = async (token) => {
    helpers
      .getProfileDetails(token)
      .then((response) => response)
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const { access_token } = helpers.getUserDetailsFromLocalStorage();
    fetchUserData(access_token);
  }, []);

  return (
    <>
      <Head>
        <title>Agrocist - Settings</title>
        <meta name="theme-color" content="#05612E"></meta>
      </Head>

      <Wrapper>
        <div className={styles.container}>
          <div className="user-info">
            <Image className="avi" src={avatar} width={100} height={100} alt="" />

            <div className="card">
              <span>PROFILE</span>

              <div className="flex-container">
                {/* row */}
                <div className="flex">
                  <p>
                    <MdPerson size={25} color="#05612E" />
                  </p>
                  <p>{user?.fullname}</p>
                </div>

                {/* row */}
                <div className="flex">
                  <p>
                    <MdEmail size={25} color="#05612E" />
                  </p>
                  <p>{user?.email}</p>
                </div>

                {/* row */}
                <div className="flex">
                  <p>
                    <MdPhone size={35} color="#05612E" />
                  </p>
                  <p>{user?.phonenumber}</p>
                </div>

                {/* row */}
                <div className="flex">
                  <p>
                    <MdMyLocation size={25} color="#05612E" />{" "}
                  </p>
                  <p>{user?.address}</p>
                </div>
              </div>
            </div>
          </div>

          <section>
            <span>CHANGE PASSWORD</span>

            <form>
              <div>
                <label>Current Password</label>
                <InputElement placeholder="Enter your current password" />
              </div>

              <div>
                <label>New Password</label>
                <InputElement placeholder="Enter your new password" />
              </div>

              <div>
                <label>Confirm Password</label>
                <InputElement placeholder="Confirm your new password" />
              </div>

              <SubmitButton label="Save Password" />
            </form>
          </section>
        </div>
      </Wrapper>
    </>
  );
}

export default Settings;
