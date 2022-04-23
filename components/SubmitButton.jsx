import React from "react";
import styles from "../styles/sass/submitButton.module.scss";

function SubmitButton({ label }) {
  return (
    <>
      <button className={styles.btn} type="submit">
        {label}
      </button>
    </>
  );
}

export default SubmitButton;
