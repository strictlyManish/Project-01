import { nanoid } from "nanoid";
import React, { createContext, useState } from "react";

export const recipescontext = createContext(null);

function RecipesContext({ children }) {
  const [data, setData] = useState([
    
  {
    title: "Butter Chicken",
    chief: "Chef Aryan",
    image: "https://source.unsplash.com/400x300/?butter-chicken",
    description: "A rich and creamy tomato-based chicken curry from North India.",
    instruction: "Marinate chicken, grill it, then cook in creamy tomato sauce for 25 minutes.",
    ingredients: 
     ` "Chicken"
      "Butter"
      "Tomato Puree"
      "Cream"
      "Spices (Garam Masala, Chili Powder)`,
    
    category: "Main Course"
  },
  {
    title: "Paneer Tikka",
    chief: "Chef Neha",
    image: "https://source.unsplash.com/400x300/?paneer-tikka",
    description: "Grilled cottage cheese cubes marinated in spiced yogurt.",
    instruction: "Marinate paneer, skewer with veggies, and grill till golden.",
    ingredients: [
      "Paneer",
      "Yogurt",
      "Capsicum",
      "Onion",
      "Tandoori Masala"
    ],
    category: "Starter"
  },
  {
    title: "Gulab Jamun",
    chief: "Chef Iqbal",
    image: "https://source.unsplash.com/400x300/?gulab-jamun",
    description: "Soft and spongy milk-solid balls soaked in cardamom sugar syrup.",
    instruction: "Fry dough balls on low heat and soak in hot sugar syrup.",
    ingredients: [
      "Khoya",
      "Flour",
      "Sugar",
      "Cardamom",
      "Rose Water"
    ],
    category: "Dessert"
  }
])
  return (
    <recipescontext.Provider value={{ data, setData }}>
      {children}
    </recipescontext.Provider>
  );
}

export default RecipesContext;
