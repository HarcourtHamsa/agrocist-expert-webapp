import React from "react";
import styles from "../../styles/sass/statsCard.module.scss";

const StatsCard = ({ number, title, icon }) => {
  return (
    <div className={styles.card}>
      <div>
        <h3>{number}</h3>
        <p className="sub">{title}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
};

export default StatsCard;
