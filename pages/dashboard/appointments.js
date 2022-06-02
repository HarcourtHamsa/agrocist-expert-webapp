import React from "react";
import Head from "next/head";
import Wrapper from "../../components/dashboard/Wrapper";
import styles from "../../styles/sass/appointments.module.scss";

function Appointments() {
  return (
    <>
      <Head>
        <title>Agrocist - Appointments</title>
        <meta name="theme-color" content="#05612E"></meta>
      </Head>

      <Wrapper>
        <div className={styles.container}>
          <select>
            <option>New Appointments</option>
            <option>Ongoing Appointments</option>
            <option>Finished Consultation</option>
          </select>

          <div className={styles.appointments}>
            <table>
              <tbody>
                <tr>
                  <th>Farmer</th>
                  <th>Phone</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Subscription Time</th>
                </tr>
                <tr>
                  <td>Remi Adams</td>
                  <td>736263</td>

                  <td>KISHANSHREE-I </td>
                  <td>22/11/2021</td>
                  <td>N19,350.00</td>
                </tr>
                <tr>
                  <td>Remi Adams</td>
                  <td>736263</td>

                  <td>KISHANSHREE-I </td>
                  <td>22/11/2021</td>
                  <td>N19,350.00</td>
                </tr>
                <tr>
                  <td>Remi Adams</td>
                  <td>736263</td>

                  <td>KISHANSHREE-I </td>
                  <td>22/11/2021</td>
                  <td>N19,350.00</td>
                </tr>
                <tr>
                  <td>Remi Adams</td>
                  <td>736263</td>

                  <td>KISHANSHREE-I </td>
                  <td>22/11/2021</td>
                  <td>N19,350.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Appointments;
