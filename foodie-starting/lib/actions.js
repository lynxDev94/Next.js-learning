'use server';

async function shareMeal(formData) {

    const meal = {
      title: formData.get('title'),
      // grabs data by name title 
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }

    console.log(meal);
  }

  export default shareMeal;