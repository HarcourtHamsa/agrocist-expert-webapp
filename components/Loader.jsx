import React from "react";
import styles from "../styles/sass/loader.module.scss";

function Loader() {
  return (
    <div className={styles.loader}>
      <svg height="32" width="32" viewBox="0 0 24 24">
        <circle opacity=".25" cx="12" cy="12" r="10.2"></circle>
        <circle
          cx="12"
          cy="12"
          r="10.2"
          strokeDashArray="32.044245066615886"
        ></circle>
      </svg>
    </div>
  );
}

export default Loader;
