import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from "../../styles/sass/backButton.module.scss";

function BackButton() {
  const Router = useRouter();
  return (
    <div className={styles.btn} onClick={() => Router.back()}>
      <IoIosArrowBack size={30} />
    </div>
  );
}

export default BackButton;
