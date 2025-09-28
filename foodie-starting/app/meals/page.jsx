import React from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../../assets/components/meals/meals-grid";

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
        <p>Choose your favourite meal and enjoy the taste!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}

export default MealsPage;
