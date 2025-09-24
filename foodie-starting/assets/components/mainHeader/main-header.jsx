import React from "react";
import Link from "next/link";
import styles from "./main-header.module.css";
import Logo from "../../../assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "../mainHeaderBackground/main-header-background";

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
            <Link href="/meals/share">Share Meal</Link>
            </li>
            <li>
            <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
