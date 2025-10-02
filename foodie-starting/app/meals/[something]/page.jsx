import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "../../../lib/meals";

function MealDetailPage({params}) {
  const meal = getMeal(params.something);
  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  if(!meal) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>Summary</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}></p>
       
      </main>
    </>
  );
}

export default MealDetailPage;
