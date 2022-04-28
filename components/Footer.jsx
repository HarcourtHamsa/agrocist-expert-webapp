import React from "react";
import Image from "next/image";
import logo from "../assets/images/transparent-logo.png";
import styles from "../styles/sass/footer.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div>
          <div id="logo" tabIndex={0}>
            <Image src={logo} alt="agrocist logo" />
          </div>

          <p>
            Farmers to get their Plants or Animals with the best care of disease
            diagnosis and best treatment recommendation.
          </p>
        </div>

        <div>
          <ul>
            {FOOTER_NAV_ITEMS.map((elem) => {
              return (
                <li key={elem.label}>
                  <Link href={elem.href}>{elem.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const FOOTER_NAV_ITEMS = [
  {
    label: "Products",
    href: "/",
  },
  {
    label: "Manufacturers",
    href: "/",
  },
  {
    label: "Experts",
    href: "/",
  },
  {
    label: "Analytics",
    href: "/",
  },
  {
    label: "Disease Intelligence",
    href: "/",
  },
  {
    label: "B2B Ecommerce",
    href: "/",
  },
];
