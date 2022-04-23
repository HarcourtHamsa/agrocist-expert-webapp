import React from "react";
import styles from "../styles/sass/input.module.scss";

function InputElement({ type, placeholder, id, name, onChange, value }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default InputElement;
