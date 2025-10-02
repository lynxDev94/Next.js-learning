"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
  return !text || meal.title.trim() === "";
};

async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    // grabs data by name title
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (isInvalidText(meal.title) || isInvalidText(meal.summary)) {
    return {
        message: 'Invalid Input'
    }
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect("/meal");
}

export default shareMeal;
