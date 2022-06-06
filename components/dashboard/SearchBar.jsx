import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from "../../styles/sass/searchBar.module.scss";

import { BiSearch } from "react-icons/bi";
import InputElement from "../InputElement";

import helpers from "../../helpers/helpers";
import avatar from "../../assets/images/avatar.svg";

function SearchBar({ isOpen, setIsOpen }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("re-rendering....");
    const user = helpers.getUserDetailsFromLocalStorage();
    setUser(user);
  }, []);

  return (
    <div className={styles.nav}>
      <div className="container">
        <div
          id="hamburger-menu"
          tabIndex={0}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div id="search-container" tabIndex={0}>
          <BiSearch size={20} color="gray" />
          <InputElement placeholder="Search clients, orders, products." />
        </div>

        <div id="user-details">
          <p>{user?.user.fullname}</p>
          <Image
            className="avi"
            src={avatar}
            width={50}
            height={50}
            tabIndex={0}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
