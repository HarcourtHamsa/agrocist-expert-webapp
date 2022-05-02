import React from "react";
import styles from "../../styles/sass/notifications.module.scss";

const NOTIFICATIONS = [
  {
    id: 1,
    title: "New Message from MARIAM",
    msg: "Sir, I have added the drops of metyl...",
  },
  {
    id: 2,
    title: "ADE Replied to your comment",
    msg: "I will try this out sir. Thank you so much ",
  },
  {
    id: 3,
    title: "BUHARI just subscribed",
    msg: "Hurray! you have a new farmer on your.. ",
  },
  {
    id: 4,
    title: "New Message from MARIAM",
    msg: "Sir, I have added the drops of metyl...",
  },
];

function Notifications() {
  return (
    <div className={styles.card}>
      <h3>NOTIFICATIONS</h3>
      <div className="notifications">
        {NOTIFICATIONS.map((notification) => {
          return (
            <div id="row" key={notification.id}>
              <div className="avi"></div>

              <div className="notification-details">
                <p>{notification.title}</p>
                <p>{notification.msg}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notifications;
