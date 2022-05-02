import React from "react";
import styles from "../../styles/sass/searchBar.module.scss";
import { BiSearch } from "react-icons/bi";
import InputElement from "../InputElement";

function SearchBar({ isOpen, setIsOpen }) {
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
          <p>Adeoye Stephen</p>
          <div id="avi" tabIndex={0}></div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
