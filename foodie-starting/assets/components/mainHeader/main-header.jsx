
import React from "react";
import Link from "next/link";
import styles from "./main-header.module.css";
import Logo from "../../../assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "../mainHeaderBackground/main-header-background";
import NavLink from "../navLink/nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={Logo} alt="Foodie" />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
            <NavLink href="/meals/share">Share Meal</NavLink>
            </li>
            <li>
            <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
