import Link from "next/link";
import React from "react";
import styles from "../styles/sass/navbar.module.scss";

import logo from "../assets/images/logo.svg";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div id="logo" tabIndex={0}>
          <Image src={logo} alt="agrocist logo" />
        </div>

        <div id="nav-links" className={isOpen ? "active" : null}>
          <Link href="/account/login">Login</Link>
          <Link href="/account/signup">Sign up</Link>
        </div>

        <div
          id="hamburger-menu"
          tabIndex={0}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
