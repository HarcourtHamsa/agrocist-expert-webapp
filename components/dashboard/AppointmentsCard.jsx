import React from "react";
import styles from "../../styles/sass/appointmentsCard.module.scss";

const APPOINTMENTS = [
  {
    id: 1,
    time: "10:00 AM",
    appointee: "Ajayi Yusuf",
    reason: "Cassava invaded by pink pest",
  },
  {
    id: 2,
    time: "12:00 PM",
    appointee: "Garba Shehu",
    reason: "Millet plants growing thinner ",
  },
  {
    id: 3,
    time: "02:00 PM",
    appointee: "Naomi Boazi",
    reason: "Cucumber grows roughly ",
  },
  {
    id: 4,
    time: "04:00 PM",
    appointee: "Mandaline Fasae",
    reason: "Ugwu leaves discoloration",
  },
];

function AppointmentsCard() {
  return (
    <div className={styles.card}>
      <h3>TODAY APPOINTMENTS</h3>
      <div className="appointments">
        {APPOINTMENTS.map((appointment) => {
          return (
            <div id="row" key={appointment.id}>
              <p className="appointment-time">{appointment.time}</p>

              <div className="avi"></div>

              <div className="appointment-details">
                <p>{appointment.appointee}</p>
                <p>{appointment.reason}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppointmentsCard;
