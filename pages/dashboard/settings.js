import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

import Tabs from "../../components/dashboard/Tabs";
import Wrapper from "../../components/dashboard/Wrapper";
import helpers from "../../helpers/helpers";
import styles from "../../styles/sass/settings.module.scss";

import avatar from "../../assets/images/avatar.svg";

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
            <Image className="avi" src={avatar} width={70} height={70} />
            <h1>{user?.fullname}</h1>
            <p>{user?.email}</p>
          </div>

          <section>
            <Tabs user={user} />
          </section>
        </div>
      </Wrapper>
    </>
  );
}

export default Settings;
