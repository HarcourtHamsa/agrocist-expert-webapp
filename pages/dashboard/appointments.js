import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Wrapper from "../../components/dashboard/Wrapper";
import styles from "../../styles/sass/appointments.module.scss";

import avatar from "../../assets/images/avatar.svg";

function Appointments() {
  const [activeFilter, setActiveFilter] = useState(null);
  return (
    <>
      <Head>
        <title>Agrocist - Appointments</title>
        <meta name="theme-color" content="#05612E"></meta>
      </Head>

      <Wrapper>
        <div className={styles.container}>
          <div className={"filters"}>
            <button
              onClick={() => setActiveFilter(0)}
              className={activeFilter === 0 ? "active-filter" : null}
            >
              New Appointments
            </button>
            <button
              onClick={() => setActiveFilter(1)}
              className={activeFilter === 1 ? "active-filter" : null}
            >
              Ongoing Consultation
            </button>
            <button
              onClick={() => setActiveFilter(2)}
              className={activeFilter === 2 ? "active-filter" : null}
            >
              Finished Consultation
            </button>
          </div>

          <div className={styles.appointments}>
            <table>
              <tbody>
                <tr>
                  <th>FARMER</th>
                  <th>CONTACT</th>
                  <th>CALL TIME</th>
                  <th>DATE</th>
                  <th>SUBSCRIPTION TIME</th>
                </tr>
                <tr>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <Image src={avatar} width={30} height={30} alt=""/>
                    Remi Adams
                  </td>
                  <td>0985049830</td>

                  <td>Iseyin, Oyo</td>
                  <td>22/11/2021</td>
                  <td>16 DAYS LEFT</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className="appointments-card">
            <div className="card-header">
              <p>FARMER</p>
              <p>CONTACT</p>
              <p>CALL TIME</p>
              <p>DATE</p>
              <p>SUBSCRIPTION TIME</p>
            </div>

            <div className="card-body">
              <div className="row">
                <p
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Image className="avi" src={avatar} width={30} height={30} />
                  Ajayi Yusuf
                </p>
                <p>0985049830</p>
                <p>Iseyin, Oyo </p>
                <p>22/05/22 </p>
                <p>16 DAYS LEFT</p>
              </div>
            </div>
          </div> */}
        </div>
      </Wrapper>
    </>
  );
}

export default Appointments;
